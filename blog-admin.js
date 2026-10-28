const GH_API = "https://api.github.com";

function reply(statusCode, body) {
  return {statusCode, headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}, body:JSON.stringify(body)};
}
function b64decode(s) { return Buffer.from(s.replace(/\n/g, ""), "base64").toString("utf8"); }
function b64encode(s) { return Buffer.from(s, "utf8").toString("base64"); }

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return reply(405, {ok:false,error:"Método não permitido."});
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  const articlesPath = process.env.GITHUB_ARTICLES_PATH || "ultrabyte-articles.json";
  if (!expectedPassword || !token || !owner || !repo) {
    return reply(500, {ok:false,error:"Configuração incompleta: configure ADMIN_PASSWORD, GITHUB_TOKEN, GITHUB_OWNER e GITHUB_REPO no Netlify."});
  }
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return reply(400,{ok:false,error:"Pedido inválido."}); }
  // Lista pública apenas dos artigos publicados; nenhuma senha/token é exposta.
  // A função faz a leitura usando o token guardado no servidor.
  const headers = {"Accept":"application/vnd.github+json","Authorization":`Bearer ${token}`,"X-GitHub-Api-Version":"2022-11-28","User-Agent":"UltraByte-Blog-Admin"};
  const url = `${GH_API}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${articlesPath.split("/").map(encodeURIComponent).join("/")}`;
  async function getData() {
    const res = await fetch(`${url}?ref=${encodeURIComponent(branch)}`, {headers});
    if (res.status === 404) return {articles:[], sha:null};
    const data = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(data.message || `Erro ao ler GitHub (${res.status}).`);
    if (!data.content) throw new Error("O arquivo de artigos não tem conteúdo legível.");
    let parsed;
    try { parsed = JSON.parse(b64decode(data.content)); } catch { throw new Error("O arquivo ultrabyte-articles.json está inválido. Corrija-o no repositório."); }
    return {articles:Array.isArray(parsed) ? parsed : [], sha:data.sha};
  }
  async function writeData(articles, sha) {
    const payload = {message:"Atualizar artigos do blog UltraByte pelo painel",content:b64encode(JSON.stringify(articles,null,2)),branch};
    if (sha) payload.sha = sha;
    const res = await fetch(url, {method:"PUT",headers:{...headers,"Content-Type":"application/json"},body:JSON.stringify(payload)});
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
      if (res.status === 409 || res.status === 422) throw new Error("O arquivo mudou no GitHub ou houve conflito. Atualize e tente de novo.");
      if (res.status === 401 || res.status === 403) throw new Error("Token inválido ou sem permissão Contents: Read and write.");
      throw new Error(data.message || `Erro ao salvar no GitHub (${res.status}).`);
    }
    return data;
  }

  try {
    if (body.action === "publicList") {
      const publicStored = await getData();
      return reply(200,{ok:true,articles:publicStored.articles});
    }
    if (typeof body.password !== "string" || body.password !== expectedPassword) return reply(401,{ok:false,error:"Senha incorreta."});
    if (body.action === "check") return reply(200,{ok:true});
    const stored = await getData();
    if (body.action === "list") return reply(200,{ok:true,articles:stored.articles});
    if (body.action === "save") {
      const a = body.article;
      if (!a || typeof a.id !== "string" || !a.id || typeof a.titulo !== "string" || !a.titulo.trim() ||
          typeof a.categoria !== "string" || typeof a.resumo !== "string" || typeof a.conteudo !== "string" ||
          a.titulo.length > 120 || a.resumo.length > 250 || a.conteudo.length > 100000) {
        return reply(400,{ok:false,error:"Confira os campos. O título deve ter até 120 caracteres, resumo até 250 e conteúdo até 100 KB."});
      }
      const clean = {id:a.id,titulo:a.titulo.trim(),categoria:a.categoria,resumo:a.resumo.trim(),conteudo:a.conteudo,atualizadoEm:new Date().toISOString()};
      const index = stored.articles.findIndex(item=>item.id===clean.id);
      if (index >= 0) stored.articles[index] = clean; else stored.articles.unshift(clean);
      await writeData(stored.articles, stored.sha);
      return reply(200,{ok:true,article:clean});
    }
    if (body.action === "delete") {
      if (typeof body.id !== "string" || !body.id) return reply(400,{ok:false,error:"ID do artigo inválido."});
      const updated = stored.articles.filter(item=>item.id!==body.id);
      if (updated.length === stored.articles.length) return reply(404,{ok:false,error:"Artigo não encontrado."});
      await writeData(updated, stored.sha);
      return reply(200,{ok:true});
    }
    return reply(400,{ok:false,error:"Ação desconhecida."});
  } catch(e) {
    return reply(500,{ok:false,error:e.message || "Erro interno."});
  }
};
