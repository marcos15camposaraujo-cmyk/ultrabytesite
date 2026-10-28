const CHAVE = "ultrabyte_artigos_v1";
const CHAVE_COMENTARIOS = "ultrabyte_comentarios_v1";
let artigoAtualId = null;
const exemplos = [
  {id:"exemplo-1",titulo:"Como deixar seu computador mais rápido",categoria:"Manutenção",resumo:"Dicas para melhorar o desempenho do seu PC.",conteudo:"Comece verificando os programas que iniciam com o sistema. Libere espaço no armazenamento, mantenha o sistema atualizado e verifique se há programas desnecessários. Um SSD também pode melhorar bastante a velocidade de computadores que utilizam HD."},
  {id:"exemplo-2",titulo:"Como cuidar do seu computador",categoria:"Tutoriais",resumo:"Cuidados básicos para preservar seu equipamento.",conteudo:"Mantenha o computador em um local ventilado e livre as entradas de ar. Desligue o equipamento antes de fazer a limpeza externa. A limpeza interna exige cuidado para evitar danos aos componentes."},
  {id:"exemplo-3",titulo:"SSD ou HD: qual escolher?",categoria:"Hardware",resumo:"Conheça as diferenças entre tipos de armazenamento.",conteudo:"O SSD costuma ser muito mais rápido para abrir programas e iniciar o sistema. O HD geralmente oferece bastante espaço por um custo menor. Confira a compatibilidade antes de comprar e faça cópias de segurança dos arquivos importantes."}
];
function carregarArtigos(){
  try{const dados=localStorage.getItem(CHAVE);if(dados===null){localStorage.setItem(CHAVE,JSON.stringify(exemplos));return [...exemplos];}const artigos=JSON.parse(dados);return Array.isArray(artigos)?artigos:[];}catch(e){return [];}
}
function salvarArtigos(artigos){
  try{localStorage.setItem(CHAVE,JSON.stringify(artigos));return true;}
  catch(e){alert("Não foi possível salvar. Verifique o armazenamento do navegador.");return false;}
}
function el(tag,classe,texto){const node=document.createElement(tag);if(classe)node.className=classe;if(texto!==undefined)node.textContent=texto;return node;}
function mostrarBlog(){
  const lista=document.getElementById("listaArtigos");if(!lista)return;lista.replaceChildren();
  const artigos=carregarArtigos();
  if(!artigos.length){lista.appendChild(el("p","","Ainda não há artigos publicados."));return;}
  artigos.forEach(artigo=>{
    const card=el("article","card");card.append(el("p","categoria",artigo.categoria),el("h3","",artigo.titulo),el("p","",artigo.resumo));
    const btn=el("button","botao","Ler artigo");btn.type="button";btn.addEventListener("click",()=>abrirLeitura(artigo.id));card.appendChild(btn);lista.appendChild(card);
  });
}
function abrirLeitura(id){
  const artigo=carregarArtigos().find(item=>item.id===id);if(!artigo)return;
  document.getElementById("tituloLeitura").textContent=artigo.titulo;
  document.getElementById("categoriaLeitura").textContent=artigo.categoria;
  document.getElementById("textoLeitura").textContent=artigo.conteudo;
  artigoAtualId = artigo.id;
  mostrarComentarios();
  const formComentario=document.getElementById("formComentario");
  if(formComentario)formComentario.reset();
  const mensagemComentario=document.getElementById("mensagemComentario");
  if(mensagemComentario)mensagemComentario.textContent="";
  document.getElementById("leitura").hidden=false;document.getElementById("listaArtigos").hidden=true;
  document.getElementById("leitura").scrollIntoView({behavior:"smooth"});
}
function mostrarLista(){
  const leitura=document.getElementById("leitura"),lista=document.getElementById("listaArtigos");if(!leitura||!lista)return;
  leitura.hidden=true;lista.hidden=false;
}

function carregarComentarios(){
  try{
    const dados=JSON.parse(localStorage.getItem(CHAVE_COMENTARIOS)||"{}");
    return dados && typeof dados==="object" && !Array.isArray(dados) ? dados : {};
  }catch(e){return {};}
}
function salvarComentarios(comentarios){
  try{localStorage.setItem(CHAVE_COMENTARIOS,JSON.stringify(comentarios));return true;}
  catch(e){return false;}
}
function mostrarComentarios(){
  const lista=document.getElementById("listaComentarios");
  if(!lista||!artigoAtualId)return;
  lista.replaceChildren();
  const comentarios=carregarComentarios()[artigoAtualId]||[];
  if(!comentarios.length){lista.appendChild(el("p","sem-comentarios","Ainda não há comentários. Seja a primeira pessoa a comentar!"));return;}
  comentarios.slice().reverse().forEach(comentario=>{
    const item=el("article","comentario-item");
    const topo=el("div","comentario-topo");
    topo.append(el("strong","",comentario.nome),el("time","data-comentario",comentario.data||""));
    item.append(topo,el("p","",comentario.texto));
    lista.appendChild(item);
  });
}
function inicializarComentarios(){
  const form=document.getElementById("formComentario");
  if(!form)return;
  form.addEventListener("submit",evento=>{
    evento.preventDefault();
    const nome=document.getElementById("nomeComentario").value.trim();
    const texto=document.getElementById("textoComentario").value.trim();
    const mensagem=document.getElementById("mensagemComentario");
    if(!artigoAtualId){mensagem.textContent="Abra um artigo antes de comentar.";return;}
    if(!nome||!texto){mensagem.textContent="Preencha seu nome e comentário.";return;}
    const todos=carregarComentarios();
    if(!Array.isArray(todos[artigoAtualId]))todos[artigoAtualId]=[];
    todos[artigoAtualId].push({nome:nome.slice(0,50),texto:texto.slice(0,1000),data:new Date().toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})});
    if(salvarComentarios(todos)){
      form.reset();mensagem.textContent="Comentário publicado!";mostrarComentarios();
    }else{
      mensagem.textContent="Não foi possível salvar o comentário neste navegador.";
    }
  });
}

function inicializarAdmin(){
  const form=document.getElementById("formArtigo"),lista=document.getElementById("listaAdmin");if(!form||!lista)return;
  const titulo=document.getElementById("titulo"),categoria=document.getElementById("categoria"),resumo=document.getElementById("resumo"),conteudo=document.getElementById("conteudo"),idInput=document.getElementById("artigoId"),mensagem=document.getElementById("mensagem"),botaoSalvar=document.getElementById("salvarArtigo"),botaoCancelar=document.getElementById("cancelarEdicao");
  function renderizar(){
    lista.replaceChildren();
    carregarArtigos().forEach(artigo=>{
      const item=el("article","item-admin");item.append(el("h3","",artigo.titulo),el("p","categoria",artigo.categoria),el("p","",artigo.resumo));
      const editar=el("button","botao secundario","Editar");editar.type="button";editar.addEventListener("click",()=>{idInput.value=artigo.id;titulo.value=artigo.titulo;categoria.value=artigo.categoria;resumo.value=artigo.resumo;conteudo.value=artigo.conteudo;botaoSalvar.textContent="Salvar alterações";botaoCancelar.hidden=false;form.scrollIntoView({behavior:"smooth"});});
      const excluir=el("button","botao","Excluir");excluir.type="button";excluir.addEventListener("click",()=>{if(!confirm("Deseja realmente excluir este artigo?"))return;const atualizados=carregarArtigos().filter(a=>a.id!==artigo.id);if(salvarArtigos(atualizados)){renderizar();mensagem.textContent="Artigo excluído.";}});item.append(editar,excluir);lista.appendChild(item);
    });
  }
  function limpar(){form.reset();idInput.value="";botaoSalvar.textContent="Publicar artigo";botaoCancelar.hidden=true;}
  botaoCancelar.addEventListener("click",limpar);
  form.addEventListener("submit",evento=>{
    evento.preventDefault();
    const artigos=carregarArtigos(),id=idInput.value||((window.crypto&&typeof window.crypto.randomUUID==="function")?window.crypto.randomUUID():String(Date.now())+"-"+Math.random().toString(36).slice(2));
    const novo={id,titulo:titulo.value.trim(),categoria:categoria.value,resumo:resumo.value.trim(),conteudo:conteudo.value.trim()};
    if(!novo.titulo||!novo.resumo||!novo.conteudo){mensagem.textContent="Preencha todos os campos.";return;}
    const existe=artigos.some(a=>a.id===id);
    const atualizados=existe?artigos.map(a=>a.id===id?novo:a):[novo,...artigos];
    if(salvarArtigos(atualizados)){limpar();renderizar();mensagem.textContent=existe?"Artigo atualizado!":"Artigo publicado!";}
  });
  renderizar();
}
document.addEventListener("DOMContentLoaded",()=>{
  const ano=document.getElementById("ano");if(ano)ano.textContent=new Date().getFullYear();
  mostrarBlog();inicializarAdmin();inicializarComentarios();
  const voltar=document.getElementById("voltarArtigos");if(voltar)voltar.addEventListener("click",mostrarLista);
});
