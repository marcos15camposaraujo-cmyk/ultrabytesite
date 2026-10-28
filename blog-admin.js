
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Blog | UltraByte</title>
  <meta name="description" content="Blog UltraByte: artigos, dicas, fotos e vídeos sobre informática, computadores e tecnologia.">
  <link rel="stylesheet" href="style.css">

  <style>
    /* Estilos exclusivos do blog, sem alterar o restante do site */

    .blog-intro {
      padding: 55px 20px;
      text-align: center;
    }

    .blog-intro h1 {
      margin-bottom: 12px;
    }

    .blog-intro p {
      max-width: 700px;
      margin: 0 auto;
    }

    .blog-conteudo {
      width: min(1100px, 92%);
      margin: 0 auto;
      padding-bottom: 50px;
    }

    .blog-secao {
      margin-bottom: 50px;
    }

    .blog-secao > h2 {
      margin-bottom: 20px;
    }

    .blog-grade {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 22px;
    }

    .blog-artigo {
      overflow: hidden;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 12px;
      background: rgba(128, 128, 128, 0.06);
    }

    .blog-artigo img {
      display: block;
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .blog-artigo-conteudo {
      padding: 18px;
    }

    .blog-artigo h3 {
      margin-bottom: 10px;
    }

    .blog-artigo p {
      margin-bottom: 12px;
    }

    .blog-meta {
      font-size: 0.85rem;
      opacity: 0.75;
      margin-bottom: 10px;
    }

    .blog-link {
      display: inline-block;
      color: #1685ff;
      font-weight: bold;
      margin-top: 5px;
    }

    .blog-midia {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 22px;
    }

    .blog-midia article {
      padding: 18px;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 12px;
    }

    .blog-midia img,
    .blog-midia video,
    .blog-midia iframe {
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      margin-bottom: 12px;
    }

    .blog-midia video {
      background: #000;
    }

    .blog-midia audio {
      width: 100%;
      margin: 10px 0;
    }

    .blog-midia h3 {
      margin-bottom: 10px;
    }

    .comentarios {
      padding: 25px;
      border: 1px solid rgba(128, 128, 128, 0.3);
      border-radius: 12px;
    }

    .comentarios form {
      display: grid;
      gap: 12px;
      margin-bottom: 25px;
    }

    .comentarios input,
    .comentarios textarea {
      width: 100%;
      padding: 12px;
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid rgba(128, 128, 128, 0.5);
      border-radius: 7px;
    }

    .comentarios textarea {
      min-height: 110px;
      resize: vertical;
    }

    .comentarios button {
      width: fit-content;
      padding: 11px 18px;
      border: 0;
      border-radius: 7px;
      background: #1685ff;
      color: white;
      font: inherit;
      cursor: pointer;
    }

    .comentario-item {
      padding: 15px 0;
      border-top: 1px solid rgba(128, 128, 128, 0.25);
      overflow-wrap: anywhere;
    }

    .comentario-item strong {
      display: block;
      margin-bottom: 5px;
    }

    .aviso-blog {
      font-size: 0.9rem;
      opacity: 0.75;
      margin-top: 12px;
    }

    @media (max-width: 600px) {
      .blog-intro {
        padding: 40px 15px;
      }

      .comentarios {
        padding: 16px;
      }
    }
  </style>
</head>

<body>

  <!-- CABEÇALHO -->
  <header class="topo">
    <a class="logo" href="index.html">⚡ UltraByte</a>

    <nav aria-label="Menu principal">
      <a href="index.html">Início</a>
      <a href="index.html#servicos">Serviços</a>
      <a href="blog.html" aria-current="page">Blog</a>
      <a href="index.html#sobre">Sobre</a>
      <a href="index.html#contato">Contato</a>
    </nav>
  </header>

  <main>

    <!-- APRESENTAÇÃO DO BLOG -->
    <section class="blog-intro">
      <h1>Blog <span class="destaque">UltraByte</span></h1>

      <p>
        Descubra dicas, tutoriais, curiosidades e novidades sobre
        computadores, componentes e tecnologia.
      </p>
    </section>

    <div class="blog-conteudo">

      <!-- ARTIGOS -->
      <section class="blog-secao" id="artigos">
        <h2>📚 Artigos e dicas</h2>

        <div class="blog-grade">

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
              alt="Computador desktop com componentes de hardware"
              loading="lazy"
            >

            <div class="blog-artigo-conteudo">
              <div class="blog-meta">Hardware · 5 min de leitura</div>
              <h3>Como cuidar melhor do seu computador</h3>

              <p>
                Aprenda hábitos que ajudam a manter o computador
                organizado, limpo e funcionando corretamente.
              </p>

              <a class="blog-link" href="#artigo-cuidados">
                Ler artigo →
              </a>
            </div>
          </article>

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
              alt="Componentes e peças de computador"
              loading="lazy"
            >

            <div class="blog-artigo-conteudo">
              <div class="blog-meta">Componentes · 4 min de leitura</div>
              <h3>SSD ou HD: qual é a diferença?</h3>

              <p>
                Entenda como essas unidades armazenam seus arquivos
                e por que podem oferecer experiências diferentes.
              </p>

              <a class="blog-link" href="#artigo-ssd">
                Ler artigo →
              </a>
            </div>
          </article>

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80"
              alt="Computador para jogos com iluminação"
              loading="lazy"
            >

            <div class="blog-artigo-conteudo">
              <div class="blog-meta">Manutenção · 4 min de leitura</div>
              <h3>Por que meu computador está lento?</h3>

              <p>
                Conheça causas comuns de lentidão e algumas verificações
                iniciais que você pode fazer com segurança.
              </p>

              <a class="blog-link" href="#artigo-lentidao">
                Ler artigo →
              </a>
            </div>
          </article>

        </div>
      </section>

      <!-- TEXTO COMPLETO DOS ARTIGOS -->
      <section class="blog-secao" id="artigo-cuidados">
        <h2>🔧 Como cuidar melhor do seu computador</h2>

        <p>
          Manter o computador em boas condições ajuda a prolongar
          a vida útil dos componentes. Deixe as entradas de ventilação
          livres, evite líquidos perto do equipamento e mantenha os
          programas e o sistema operacional atualizados.
        </p>

        <p>
          Também é importante fazer cópias de segurança dos arquivos
          importantes e utilizar senhas fortes. Para limpeza interna,
          desligue o equipamento e procure orientação técnica se não
          souber manusear os componentes.
        </p>
      </section>

      <section class="blog-secao" id="artigo-ssd">
        <h2>💾 SSD ou HD: qual é a diferença?</h2>

        <p>
          O HD utiliza discos magnéticos para guardar os dados,
          enquanto o SSD utiliza memória flash. Em geral, um SSD
          proporciona inicialização do sistema e abertura de programas
          mais rápidas do que um HD tradicional.
        </p>

        <p>
          Antes de comprar um componente, verifique a compatibilidade
          com seu computador, o tipo de conexão, a capacidade necessária
          e as opções disponíveis para seu equipamento.
        </p>
      </section>

      <section class="blog-secao" id="artigo-lentidao">
        <h2>🐢 Por que meu computador está lento?</h2>

        <p>
          A lentidão pode estar relacionada a muitos programas abertos,
          pouco espaço livre, aplicativos iniciados junto com o sistema,
          atualizações em andamento ou limitações de hardware.
        </p>

        <p>
          Comece verificando o espaço de armazenamento e os aplicativos
          em execução. Faça cópias de segurança antes de mudanças
          importantes e evite instalar programas desconhecidos que
          prometem acelerar o computador.
        </p>
      </section>

      <!-- GALERIA DE FOTOS -->
      <section class="blog-secao" id="fotos">
        <h2>📸 Galeria de fotos</h2>

        <div class="blog-grade">

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80"
              alt="Componentes de um computador"
              loading="lazy"
            >
            <div class="blog-artigo-conteudo">
              <h3>Hardware</h3>
              <p>Conheça as peças que fazem um computador funcionar.</p>
            </div>
          </article>

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80"
              alt="Estação de trabalho com computador"
              loading="lazy"
            >
            <div class="blog-artigo-conteudo">
              <h3>Setup de computador</h3>
              <p>Inspiração para organizar sua estação de trabalho.</p>
            </div>
          </article>

          <article class="blog-artigo">
            <img
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80"
              alt="Computador e equipamentos eletrônicos"
              loading="lazy"
            >
            <div class="blog-artigo-conteudo">
              <h3>Tecnologia</h3>
              <p>Explore o universo da informática.</p>
            </div>
          </article>

        </div>
      </section>

      <!-- VÍDEOS -->
      <section class="blog-secao" id="videos">
        <h2>🎬 Vídeos de tecnologia</h2>

        <div class="blog-midia">

          <article>
            <h3>Aprendendo sobre computadores</h3>

            <p>
              Assista a vídeos educativos sobre hardware, manutenção
              e funcionamento dos computadores.
            </p>

            <!-- Substitua VIDEO_ID pelo ID de um vídeo público do YouTube. -->
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
              title="Vídeo educativo sobre computadores"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <p class="aviso-blog">
              Para exibir o vídeo, substitua VIDEO_ID pelo identificador
              de um vídeo válido.
            </p>
          </article>

          <article>
            <h3>Adicione seus próprios vídeos</h3>

            <p>
              Você também pode colocar um vídeo próprio na pasta
              do site e apontar o elemento abaixo para ele.
            </p>

            <!-- Exemplo: coloque seu arquivo em videos/tutorial.mp4 -->
            <video controls preload="metadata">
              <source src="videos/tutorial.mp4" type="video/mp4">
              Seu navegador não suporta a reprodução de vídeo.
            </video>

            <p class="aviso-blog">
              Exemplo de caminho: videos/tutorial.mp4.
            </p>
          </article>

        </div>
      </section>

      <!-- MÚSICAS / ÁUDIOS -->
      <section class="blog-secao" id="musicas">
        <h2>🎵 Áudios e músicas</h2>

        <div class="blog-midia">
          <article>
            <h3>Áudio do blog</h3>

            <p>
              Use este espaço para publicar uma narração de tutorial,
              um podcast de tecnologia ou uma música que você tenha
              autorização para compartilhar.
            </p>

            <!-- Exemplo: coloque seu áudio em audios/tecnologia.mp3 -->
            <audio controls preload="metadata">
              <source src="audios/tecnologia.mp3" type="audio/mpeg">
              Seu navegador não suporta a reprodução de áudio.
            </audio>

            <p class="aviso-blog">
              Exemplo de caminho: audios/tecnologia.mp3.
              O arquivo precisa existir para tocar.
            </p>
          </article>
        </div>
      </section>

      <!-- COMENTÁRIOS -->
      <section class="blog-secao" id="comentarios">
        <h2>💬 Comentários</h2>

        <div class="comentarios">
          <h3>Deixe seu comentário</h3>

          <p>
            Compartilhe uma dúvida, uma sugestão ou sua opinião
            sobre os artigos da UltraByte.
          </p>

          <form id="formComentario">
            <div>
              <label for="nomeComentario">Seu nome</label>
              <input
                type="text"
                id="nomeComentario"
                name="nome"
                maxlength="60"
                placeholder="Digite seu nome"
                required
              >
            </div>

            <div>
              <label for="textoComentario">Comentário</label>
              <textarea
                id="textoComentario"
                name="comentario"
                maxlength="1000"
                placeholder="Escreva seu comentário..."
                required
              ></textarea>
            </div>

            <button type="submit">Publicar comentário</button>
          </form>

          <div id="listaComentarios" aria-live="polite">
            <p class="aviso-blog">
              Ainda não há comentários nesta sessão.
            </p>
          </div>

          <p class="aviso-blog">
            Observação: neste exemplo, os comentários aparecem somente
            nesta sessão do navegador e não são enviados para um servidor.
            Para comentários públicos permanentes, é necessário conectar
            um sistema de armazenamento e moderação.
          </p>
        </div>
      </section>

    </div>
  </main>

  <!-- RODAPÉ -->
  <footer>
    <p>© <span id="ano"></span> UltraByte</p>
    <a href="index.html">Página inicial</a>
    <a href="index.html#contato">Contato</a>
    <a href="admin.html" style="font-size: 12px; opacity: 0.55;">
      Área administrativa
    </a>
  </footer>

  <script src="script.js"></script>

  <script>
    // Atualiza o ano no rodapé.
    document.getElementById("ano").textContent =
      new Date().getFullYear();

    // Demonstração local de comentários.
    // Os comentários não são enviados nem salvos em um servidor.
    const formComentario = document.getElementById("formComentario");
    const listaComentarios = document.getElementById("listaComentarios");

    formComentario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const nome = document.getElementById("nomeComentario").value.trim();
      const texto = document.getElementById("textoComentario").value.trim();

      if (!nome || !texto) {
        return;
      }

      const aviso = listaComentarios.querySelector(".aviso-blog");
      if (aviso) {
        aviso.remove();
      }

      const item = document.createElement("article");
      item.className = "comentario-item";

      const nomeElemento = document.createElement("strong");
      nomeElemento.textContent = nome;

      const textoElemento = document.createElement("p");
      textoElemento.textContent = texto;

      item.appendChild(nomeElemento);
      item.appendChild(textoElemento);

      listaComentarios.prepend(item);
      formComentario.reset();
    });
  </script>

</body>
</html>
