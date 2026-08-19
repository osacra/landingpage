// Direção visual: Caderno de Sistemas — dados curtos, verificáveis e organizados como evidência editorial.

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  evidence: string;
  url: string;
  accent: string;
};

export const profile = {
  name: "Arthur Sacramento",
  shortName: "Arthur",
  role: "Desenvolvedor de Software em formação",
  degree: "Análise e Desenvolvimento de Sistemas · IFSP",
  github: "https://github.com/osacra",
  linkedin: "https://www.linkedin.com/in/sacrarthur/",
  resume: "https://docs.google.com/document/d/1iNtAHETcBdT-KcEqbb1QNEu_c4-ae7FoRV1iRF-JgdM/edit?usp=sharing",
  email: "oarthursacra@gmail.com",
  intro:
    "Construo soluções que conectam processos de negócio, bancos relacionais e software mantível — com foco em backend, automação e aplicações internas orientadas a dados.",
  impact:
    "Na DHL Supply Chain, uma automação baseada em Python e validação de dados reduziu aproximadamente 56 horas de trabalho manual por mês em uma operação de liberação de motoristas.",
};

export const projects: Project[] = [
  {
    name: "Liberacao-de-Motoristas",
    eyebrow: "01 · automação operacional",
    description:
      "Automação desktop para monitoramento de Excel, validações, notificações e registros operacionais.",
    problem:
      "Uma rotina 24/7 dependia de acompanhamento manual e validação de informações antes da liberação de motoristas.",
    solution:
      "Um fluxo em Python observa a operação, valida dados, notifica responsáveis e preserva logs para acompanhamento.",
    tags: ["Python", "OpenPyXL", "Automação", "Validação"],
    evidence: "≈ 56 h/mês de esforço manual reduzido",
    url: "https://github.com/osacra/Liberacao-de-Motoristas",
    accent: "orange",
  },
  {
    name: "IncidentBoard",
    eyebrow: "02 · visibilidade operacional",
    description:
      "Dashboard de gestão de incidentes com API, autenticação, regras de SLA e testes automatizados.",
    problem:
      "Incidentes operacionais exigem visibilidade, priorização e acompanhamento de prazos em uma mesma superfície.",
    solution:
      "Uma aplicação React/TypeScript organiza incidentes e conecta regras de negócio a uma API autenticada.",
    tags: ["React", "TypeScript", "Express", "JWT", "SQLite", "Testes"],
    evidence: "Regras de SLA + autenticação + testes",
    url: "https://github.com/osacra/incidentboard",
    accent: "teal",
  },
  {
    name: "IT Asset Manager",
    eyebrow: "03 · governança de ativos",
    description:
      "Sistema de gestão de ativos de TI com autenticação, perfis de acesso, empréstimos, devoluções e histórico.",
    problem:
      "O ciclo de vida de ativos precisa ser rastreável, com permissões claras e histórico de movimentações.",
    solution:
      "Uma aplicação Laravel/PHP com MySQL estrutura ativos, empréstimos e auditoria em torno de papéis e regras de acesso.",
    tags: ["Laravel", "PHP", "MySQL", "RBAC", "Auditoria"],
    evidence: "Acesso por papéis + histórico de auditoria",
    url: "https://github.com/osacra/IT_Asset_Manager",
    accent: "ink",
  },
  {
    name: "FinPilot",
    eyebrow: "04 · persistência e autorização",
    description:
      "MVP financeiro full-stack com organizações, autorização, auditoria, relatórios e fluxos CSV.",
    problem:
      "Fluxos financeiros multi-organização precisam manter separação de dados, rastreabilidade e operações confiáveis.",
    solution:
      "Um MVP em TypeScript combina React, Express, tRPC, Drizzle ORM e SQL para sustentar os fluxos principais.",
    tags: ["TypeScript", "React", "Express", "tRPC", "Drizzle", "SQL"],
    evidence: "Multi-tenant + autorização por organização",
    url: "https://github.com/osacra/finpilot",
    accent: "orange",
  },
];

export const stack = [
  { category: "Backend & APIs", items: ["Python", "Django", "Flask", "PHP", "Laravel", "Node.js", "Express", "REST"] },
  { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "Vite", "Blade", "Bootstrap", "CSS responsivo"] },
  { category: "Dados", items: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Pandas", "OpenPyXL"] },
  { category: "Engenharia", items: ["Git", "GitHub", "Docker", "Autenticação", "RBAC", "Testes", "Documentação"] },
  { category: "Automação & analytics", items: ["Selenium", "Power BI", "Power Automate", "VBA", "n8n"] },
];

export const evolution = [
  { index: "01", title: "Fundamentos", note: "Estruturas, lógica e projetos acadêmicos" },
  { index: "02", title: "Automação", note: "Processos manuais transformados em fluxos verificáveis" },
  { index: "03", title: "Backend", note: "APIs, autenticação e regras de negócio" },
  { index: "04", title: "Dados", note: "Persistência relacional, auditoria e relatórios" },
  { index: "05", title: "Sistemas completos", note: "Aplicações internas que conectam operação e código" },
];
