# Arthur Sacramento — Portfólio

Landing page profissional de Arthur Sacramento, estudante de Análise e Desenvolvimento de Sistemas no IFSP e candidato a estágio em desenvolvimento de software.

## Objetivo

Apresentar, em uma leitura rápida e verificável, a trajetória prática de Arthur em backend, automação de processos, dados e aplicações internas. Os projetos e tecnologias exibidos são baseados no README público do perfil e nos repositórios destacados em [github.com/osacra](https://github.com/osacra).

## Tecnologias

- React 19 e TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Wouter
- CSS responsivo com tokens de design

## Funcionalidades

- Hero com posicionamento profissional e chamadas para ação.
- Narrativa curta conectando formação, experiência e projetos.
- Projetos apresentados como evidência de problema, solução, tecnologias e link para código.
- Stack organizada por domínio, sem porcentagens artificiais.
- Linha de evolução derivada dos projetos públicos.
- Links para GitHub, LinkedIn, currículo e e-mail.
- Navegação por âncoras, menu responsivo, estados de foco e suporte a movimento reduzido.

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
shared/
ideas.md
```

O conteúdo editável do portfólio está centralizado em `client/src/lib/portfolio-data.ts`. Isso mantém projetos, stack, links e etapas de evolução em uma única camada de dados para facilitar atualizações futuras.

## Como executar

```bash
pnpm install
pnpm dev
```

Para verificar tipos e gerar a build de produção:

```bash
pnpm check
pnpm build
```

## Decisões técnicas

A página é uma aplicação frontend estática. Para preservar robustez e velocidade, o conteúdo confirmado do GitHub foi consolidado em uma camada de dados local, em vez de depender de uma chamada de API externa em cada visita. Os links de cada projeto permanecem apontando para os repositórios públicos originais.

A direção visual combina composição editorial, tipografia serifada para títulos e monoespaçada para metadados. O layout utiliza uma estrutura assimétrica em desktop e uma leitura linear em telas menores, com foco em contraste, hierarquia, acessibilidade e ausência de afirmações não verificadas.
