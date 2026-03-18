---
applyTo: "**"
---

# Blog Pessoal - Rique Santos

## Sobre o Projeto

Blog pessoal estático hospedado no GitHub Pages em **riquesantos.dev**.
Stack: HTML, JavaScript vanilla e Tailwind CSS (CDN).

## Estrutura

- `index.html` — Estrutura HTML do blog (somente markup)
- `styles.css` — Estilos customizados (fontes, animações, prose)
- `script.js` — Lógica do blog (posts, roteamento, renderização)
- `CNAME` — Configuração de domínio customizado para GitHub Pages
- Usa roteamento baseado em hash (`#post/id`, `#solution/id`, `#solutions`, `#about`)

## Convenções

- **Idioma**: Interface e conteúdo em português brasileiro (pt-BR)
- **Tema**: Dark mode com paleta baseada em Slate/Indigo do Tailwind
- **Cor primária**: `#6366f1` (Indigo 500)
- **Separação de concerns**: HTML, CSS e JS em arquivos separados (`index.html`, `styles.css`, `script.js`)
- **Posts**: Definidos como objetos JS no array `posts` dentro do `script.js`
- **Soluções**: Definidas como objetos JS no array `solutions` dentro do `script.js`
- **Sem build step**: Tudo é servido diretamente pelo navegador
- **Sem dependências locais**: Tailwind carregado via CDN
- **Nunca misturar**: Não colocar CSS ou JS inline no HTML (exceto config do Tailwind)

## Como adicionar um novo post

Adicionar um novo objeto ao array `posts` no `script.js`:

```js
{
  id: 'slug-do-post',        // URL amigável (sem espaços, lowercase)
  title: 'Título do Post',
  date: 'YYYY-MM-DD',
  tags: ['tag1', 'tag2'],
  summary: 'Resumo curto para o card na home.',
  content: `<h2>Subtítulo</h2><p>Conteúdo HTML do post.</p>`
}
```

## Como adicionar uma nova solução

Adicionar um novo objeto ao array `solutions` no `script.js`:

```js
{
  id: 'slug-da-solucao',       // URL amigável (sem espaços, lowercase)
  name: 'Nome da Solução',
  tagline: 'Frase curta descritiva.',
  icon: '🎯',                  // Emoji representativo
  tags: ['tag1', 'tag2'],
  summary: 'Resumo curto para o card na listagem.',
  content: `<h2>Subtítulo</h2><p>Conteúdo HTML da solução.</p>`
}
```

## Estilo de código

- JavaScript vanilla (sem frameworks)
- HTML semântico
- Classes utilitárias do Tailwind CSS
- Funções simples e diretas, sem over-engineering
- Conteúdo dos posts em HTML inline (strings template)
- CSS e JS sempre em arquivos separados, nunca inline no HTML

## Deploy

Push para a branch principal → GitHub Pages serve automaticamente.
Domínio: `riquesantos.dev` (configurado via CNAME).
