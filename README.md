# Landing page de Arthur Sacramento

Landing page profissional de Arthur Sacramento, estudante de Análise e Desenvolvimento de Sistemas no IFSP e candidato a estágio em desenvolvimento de software. A aplicação apresenta formação, experiência prática, projetos públicos e canais de contato em uma interface responsiva.

## Objetivo

Apresentar, em uma leitura rápida e verificável, a trajetória prática de Arthur em backend, automação de processos, dados e aplicações internas. Os projetos e tecnologias exibidos são mantidos em uma camada de dados local e apontam para os repositórios públicos correspondentes no [GitHub](https://github.com/osacra).

## Tecnologias

| Área | Tecnologias |
|---|---|
| Interface | React 19, TypeScript, Vite e Tailwind CSS 4 |
| Componentes | Lucide React, Radix UI e utilitários de interface |
| Navegação | Wouter e navegação por âncoras |
| Servidor | Node.js, Express e esbuild para servir a build de produção |
| Qualidade | TypeScript e Prettier |

## Funcionalidades

- Hero com posicionamento profissional e chamadas para ação.
- Narrativa curta conectando formação, experiência e projetos.
- Projetos apresentados como evidência de problema, solução, tecnologias e link para código.
- Stack organizada por domínio, sem porcentagens artificiais.
- Linha de evolução derivada dos projetos públicos.
- Links para GitHub, LinkedIn, currículo e e-mail.
- Navegação por âncoras, menu responsivo, estados de foco e suporte a movimento reduzido.

## Pré-requisitos

Para executar o projeto localmente, instale **Node.js 20 ou superior**, `pnpm` 10 ou superior e Git. Não há banco de dados nem API externa obrigatórios para o funcionamento da página.

## Instalação e desenvolvimento

```bash
git clone https://github.com/osacra/landingpage.git
cd landingpage
pnpm install
pnpm dev
```

O Vite inicia o ambiente de desenvolvimento e informa a URL no terminal. A porta padrão é `5173`; caso ela esteja ocupada, use a porta exibida pelo processo.

O conteúdo editável do portfólio está centralizado em `client/src/lib/portfolio-data.ts`. Isso mantém projetos, stack, links e etapas de evolução em uma única camada de dados para facilitar atualizações futuras.

## Validação e build

Para verificar tipos e gerar a build de produção:

```bash
pnpm check
pnpm build
```

O comando `pnpm build` gera os arquivos estáticos do frontend e empacota o servidor Node em `dist/index.js`. Para visualizar apenas a build do Vite localmente, use:

```bash
pnpm preview
```

Para executar a build completa por meio do servidor Node:

```bash
pnpm start
```

O servidor escuta a porta `3000` por padrão. Defina `PORT` se precisar usar outra porta:

```bash
PORT=4000 pnpm start
```

No Windows PowerShell, use `$env:PORT=4000; pnpm start`.

## Estrutura

```text
client/
  src/
    components/
      PortfolioNav.tsx
      ProjectCard.tsx
    lib/
      portfolio-data.ts
    pages/
      Home.tsx
    App.tsx
    index.css
  index.html
server/
  index.ts                         # servidor Express da build de produção
shared/
ideas.md
```

## Decisões técnicas

A aplicação não consulta a API do GitHub em cada visita. O conteúdo confirmado dos projetos foi consolidado em uma camada de dados local para preservar previsibilidade, velocidade e funcionamento sem dependência de serviços externos em runtime. Os links de cada projeto permanecem apontando para os repositórios públicos originais.

A direção visual combina composição editorial, tipografia serifada para títulos e monoespaçada para metadados. O layout utiliza uma estrutura assimétrica em desktop e uma leitura linear em telas menores, com foco em contraste, hierarquia, acessibilidade e ausência de afirmações não verificadas.
