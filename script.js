// ============================
// Blog Data (posts estáticos)
// ============================
const posts = [
    {
        id: 'bem-vindo-ao-blog',
        title: 'Bem-vindo ao meu blog!',
        date: '2026-03-18',
        tags: ['pessoal', 'intro'],
        summary: 'Primeiro post do blog — sobre o que esperar por aqui e por que resolvi criar esse espaço.',
        content: `
          <h2>Olá, mundo! 👋</h2>
          <p>Esse é o meu espaço pessoal na internet. Aqui vou compartilhar ideias, aprendizados e experiências sobre desenvolvimento de software, tecnologia e tudo mais que me interessar.</p>
          <p>A ideia é simples: escrever sobre o que aprendo, documentar projetos e trocar conhecimento com a comunidade.</p>
          <h2>O que esperar?</h2>
          <ul>
            <li>Posts sobre desenvolvimento web e mobile</li>
            <li>Tutoriais e dicas práticas</li>
            <li>Reflexões sobre carreira em tech</li>
            <li>Projetos pessoais e open source</li>
          </ul>
          <p>Fique à vontade para explorar e, se quiser trocar uma ideia, me encontra no GitHub!</p>
        `
    },
    {
        id: 'por-que-blog-estatico',
        title: 'Por que escolhi um blog estático?',
        date: '2026-03-18',
        tags: ['tech', 'web'],
        summary: 'Entenda por que optei por HTML puro, JavaScript e Tailwind CSS ao invés de frameworks pesados.',
        content: `
          <h2>Simplicidade acima de tudo</h2>
          <p>Existem dezenas de opções para criar blogs: WordPress, Next.js, Gatsby, Hugo… Mas eu queria algo <strong>simples, rápido e sem dependências</strong>.</p>
          <p>Com HTML, JavaScript vanilla e Tailwind CSS via CDN, consigo ter um blog funcional hospedado gratuitamente no GitHub Pages, sem build steps, sem servidor, sem banco de dados.</p>
          <h2>Vantagens dessa abordagem</h2>
          <ul>
            <li><strong>Performance:</strong> carregamento quase instantâneo</li>
            <li><strong>Custo zero:</strong> GitHub Pages é gratuito</li>
            <li><strong>Controle total:</strong> cada pixel é meu</li>
            <li><strong>Sem dependências:</strong> nada para quebrar com atualizações</li>
          </ul>
          <p>Para adicionar um novo post, basta editar o array de posts no JavaScript. Sem CMS, sem complicação.</p>
          <pre><code>const posts = [
  {
    id: 'meu-novo-post',
    title: 'Título do post',
    date: '2026-03-20',
    tags: ['tag1', 'tag2'],
    summary: 'Resumo do post...',
    content: \`&lt;p&gt;Conteúdo HTML do post&lt;/p&gt;\`
  }
];</code></pre>
          <p>Simples assim! 🚀</p>
        `
    }
];

// ============================
// Solutions Data (soluções desenvolvidas)
// ============================
const solutions = [
    {
        id: 'listou-comprou',
        name: 'Listou Comprou',
        tagline: 'Lista de compras inteligente e simples.',
        icon: '🛒',
        tags: ['app', 'produtividade', 'mobile'],
        summary: 'App de lista de compras prático e intuitivo para organizar suas compras do dia a dia.',
        content: `
          <h2>O que é o Listou Comprou?</h2>
          <p>O <strong>Listou Comprou</strong> é um app de lista de compras pensado para ser simples e eficiente. A ideia surgiu da frustração com apps de lista que são complicados demais para algo que deveria ser rápido: anotar o que precisa comprar e riscar quando comprou.</p>

          <h2>Como funciona?</h2>
          <ul>
            <li><strong>Crie listas</strong> — Organize suas compras por mercado, feira, ou como preferir</li>
            <li><strong>Adicione itens rapidamente</strong> — Interface pensada para agilidade</li>
            <li><strong>Marque como comprado</strong> — Um toque e pronto, item riscado</li>
            <li><strong>Compartilhe</strong> — Envie a lista para quem vai fazer as compras</li>
          </ul>

          <h2>Tecnologias</h2>
          <ul>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>AsyncStorage para persistência local</li>
          </ul>

          <h2>Status</h2>
          <p>Em desenvolvimento ativo. Fique ligado para novidades!</p>
        `
    }
];

// ============================
// About page
// ============================
const aboutPage = `
      <div class="fade-in">
        <h1 class="text-3xl font-bold mb-6">Sobre mim</h1>
        <div class="prose text-dark-text">
          <p>Oi! Eu sou o <strong>Rique Santos</strong>, desenvolvedor apaixonado por tecnologia e código.</p>
          <p>Esse blog é meu cantinho na web para compartilhar o que aprendo, documentar minha jornada e trocar ideias com outros devs.</p>
          <p>Quando não estou codando, provavelmente estou explorando novas tecnologias, lendo sobre produtividade ou tomando um café.</p>
          <p>Me encontre por aí:</p>
          <ul>
            <li><a href="https://github.com/riquesantos" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">GitHub</a></li>
            <li><a href="https://riquesantos.dev" class="text-primary hover:underline">riquesantos.dev</a></li>
          </ul>
        </div>
      </div>
    `;

// ============================
// Rendering
// ============================
const app = document.getElementById('app');

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function showHome() {
    window.location.hash = '';
    renderHome();
}

function showPage(page) {
    window.location.hash = page;
    if (page === 'about') {
        app.innerHTML = aboutPage;
    } else if (page === 'solutions') {
        renderSolutions();
    }
}

function showPost(id) {
    window.location.hash = 'post/' + id;
    renderPost(id);
}

function showSolution(id) {
    window.location.hash = 'solution/' + id;
    renderSolution(id);
}

function renderHome() {
    const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    app.innerHTML = `
        <div class="fade-in">
          <div class="mb-10">
            <h1 class="text-4xl font-bold mb-3">Blog do Rique Santos</h1>
            <p class="text-dark-muted text-lg">Desenvolvimento, tecnologia e experiências.</p>
          </div>
          <div class="space-y-6">
            ${sorted.map(post => `
              <article class="bg-dark-card rounded-xl p-6 hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer" onclick="showPost('${post.id}')">
                <div class="flex items-center gap-3 mb-3">
                  <time class="text-dark-muted text-sm">${formatDate(post.date)}</time>
                  <div class="flex gap-2">
                    ${post.tags.map(t => `<span class="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">${t}</span>`).join('')}
                  </div>
                </div>
                <h2 class="text-xl font-semibold text-white mb-2">${post.title}</h2>
                <p class="text-dark-muted">${post.summary}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `;
}

function renderPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) {
        app.innerHTML = `<div class="fade-in text-center py-20"><h1 class="text-2xl font-bold mb-4">Post não encontrado</h1><a href="#" onclick="showHome()" class="text-primary hover:underline">Voltar ao início</a></div>`;
        return;
    }
    app.innerHTML = `
        <article class="fade-in">
          <a href="#" onclick="showHome()" class="text-dark-muted hover:text-primary text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Voltar
          </a>
          <div class="mt-4 mb-8">
            <h1 class="text-3xl font-bold mb-3">${post.title}</h1>
            <div class="flex items-center gap-3">
              <time class="text-dark-muted text-sm">${formatDate(post.date)}</time>
              <div class="flex gap-2">
                ${post.tags.map(t => `<span class="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">${t}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="prose text-dark-text">
            ${post.content}
          </div>
        </article>
      `;
}

// ============================
// Solutions rendering
// ============================
function renderSolutions() {
    app.innerHTML = `
        <div class="fade-in">
          <div class="mb-10">
            <h1 class="text-4xl font-bold mb-3">Soluções</h1>
            <p class="text-dark-muted text-lg">Projetos e apps que desenvolvi para resolver problemas reais.</p>
          </div>
          <div class="grid gap-6 sm:grid-cols-2">
            ${solutions.map(s => `
              <article class="bg-dark-card rounded-xl p-6 hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer" onclick="showSolution('${s.id}')">
                <div class="text-4xl mb-4">${s.icon}</div>
                <h2 class="text-xl font-semibold text-white mb-2">${s.name}</h2>
                <p class="text-primary text-sm font-medium mb-3">${s.tagline}</p>
                <p class="text-dark-muted text-sm mb-4">${s.summary}</p>
                <div class="flex flex-wrap gap-2">
                  ${s.tags.map(t => `<span class="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">${t}</span>`).join('')}
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      `;
}

function renderSolution(id) {
    const solution = solutions.find(s => s.id === id);
    if (!solution) {
        app.innerHTML = `<div class="fade-in text-center py-20"><h1 class="text-2xl font-bold mb-4">Solução não encontrada</h1><a href="#" onclick="showPage('solutions')" class="text-primary hover:underline">Ver todas as soluções</a></div>`;
        return;
    }
    app.innerHTML = `
        <article class="fade-in">
          <a href="#" onclick="showPage('solutions')" class="text-dark-muted hover:text-primary text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Soluções
          </a>
          <div class="mt-4 mb-8">
            <div class="flex items-center gap-4 mb-3">
              <span class="text-5xl">${solution.icon}</span>
              <div>
                <h1 class="text-3xl font-bold">${solution.name}</h1>
                <p class="text-primary font-medium">${solution.tagline}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              ${solution.tags.map(t => `<span class="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">${t}</span>`).join('')}
            </div>
          </div>
          <div class="prose text-dark-text">
            ${solution.content}
          </div>
        </article>
      `;
}

// ============================
// Router (hash-based)
// ============================
function route() {
    const hash = window.location.hash.slice(1);
    if (hash === 'about') {
        app.innerHTML = aboutPage;
    } else if (hash === 'solutions') {
        renderSolutions();
    } else if (hash.startsWith('solution/')) {
        renderSolution(hash.replace('solution/', ''));
    } else if (hash.startsWith('post/')) {
        renderPost(hash.replace('post/', ''));
    } else {
        renderHome();
    }
}

window.addEventListener('hashchange', route);

// Init
document.getElementById('year').textContent = new Date().getFullYear();
route();
