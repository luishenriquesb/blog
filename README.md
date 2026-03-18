# riquesantos.dev

Blog pessoal do **Rique Santos** — desenvolvimento, tecnologia e experiências.

🌐 **[riquesantos.dev](https://riquesantos.dev)**

## Stack

- HTML semântico
- JavaScript vanilla (sem frameworks)
- [Tailwind CSS](https://tailwindcss.com) via CDN
- GitHub Pages (hospedagem)

## Estrutura

```
index.html    → Estrutura HTML (somente markup)
styles.css    → Estilos customizados (fontes, animações, prose)
script.js     → Lógica do blog (posts, roteamento, renderização)
CNAME         → Domínio customizado (riquesantos.dev)
.github/
  copilot-instructions.md → Instruções do Copilot para o projeto
```

## Features

- 🌙 Dark mode (paleta Slate/Indigo)
- 📱 Design responsivo
- ⚡ Carregamento rápido (sem build step)
- #️⃣ Roteamento por hash (`#post/slug`, `#about`)
- 🏷️ Tags por post
- 🎨 Animações suaves

## Como adicionar um post

Edite o array `posts` no `script.js`:

```js
{
  id: 'slug-do-post',
  title: 'Título do Post',
  date: 'YYYY-MM-DD',
  tags: ['tag1', 'tag2'],
  summary: 'Resumo curto para o card na home.',
  content: `<h2>Subtítulo</h2><p>Conteúdo HTML do post.</p>`
}
```

## Deploy

Push para a branch principal → GitHub Pages serve automaticamente.
