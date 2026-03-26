---
applyTo: "**"
---

# Blog Pessoal - Rique Santos

## Sobre o Projeto

Blog pessoal estático hospedado no GitHub Pages em **riquesantos.dev**.
Stack: HTML, JavaScript vanilla e Tailwind CSS (CDN).

## Estrutura

- `site/index.html` — Estrutura HTML do blog (somente markup semântico, sem classes utilitárias)
- `site/styles.css` — Toda a estilização do blog (layout, cores, tipografia, animações, prose)
- `script.js` — Lógica do blog (posts, roteamento, renderização)
- `CNAME` — Configuração de domínio customizado para GitHub Pages
- Usa roteamento baseado em hash (`#post/id`, `#solution/id`, `#solutions`, `#about`)

## Convenções

- **Idioma**: Interface e conteúdo em português brasileiro (pt-BR)
- **Tema**: Light mode (fundo branco, texto escuro)
- **Cor primária**: `#6366f1` (Indigo 500)
- **Separação de concerns**: HTML, CSS e JS em arquivos separados (`site/index.html`, `site/styles.css`, `script.js`)
- **HTML semântico**: Usar classes com significado (`.logo`, `.highlight`, `.container`, `.github`) em vez de classes utilitárias do Tailwind no HTML
- **Estilização no CSS**: Toda estilização fica em `styles.css`, não no HTML
- **Posts**: Definidos como objetos JS no array `posts` dentro do `script.js`
- **Soluções**: Definidas como objetos JS no array `solutions` dentro do `script.js`
- **Sem build step**: Tudo é servido diretamente pelo navegador
- **Sem dependências locais**: Tailwind carregado via CDN (usado apenas pelo conteúdo dinâmico do JS)
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
- HTML semântico com classes descritivas (não utilitárias)
- CSS customizado em `styles.css` para layout e estilização do HTML estático
- Tailwind CSS (via CDN) apenas para conteúdo dinâmico gerado pelo JS
- Funções simples e diretas, sem over-engineering
- Conteúdo dos posts em HTML inline (strings template)
- CSS e JS sempre em arquivos separados, nunca inline no HTML

## Deploy

Push para a branch principal → GitHub Pages serve automaticamente.
Domínio: `riquesantos.dev` (configurado via CNAME).


## Atualização das Instruções do Copilot
- Manter as instruções atualizadas conforme o projeto evolui
- Refletir mudanças na estrutura, convenções ou estilo de código
- Garantir que as instruções sejam claras e úteis para o Copilot gerar código consistente com o projeto
