// Direção visual: Caderno de Sistemas — uma leitura vertical, assimétrica e editorial sobre evidências de construção.

import { ArrowDown, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MoveRight } from "lucide-react";
import { useState } from "react";
import PortfolioNav from "@/components/PortfolioNav";
import ProjectCard from "@/components/ProjectCard";
import { evolution, profile, projects, stack } from "@/lib/portfolio-data";

function SectionMarker({ number, label }: { number: string; label: string }) {
  return <div className="section-marker"><span>{number}</span><strong>{label}</strong></div>;
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div id="top" className="portfolio-shell">
      <PortfolioNav />
      <aside className="report-index" aria-label="Índice do relatório"><span className="report-index-label">Navegar</span><i /><a href="#sobre"><b>02</b><span>Contexto</span></a><a href="#projetos"><b>03</b><span>Projetos</span></a><a href="#stack"><b>04</b><span>Stack</span></a><a href="#evolucao"><b>05</b><span>Evolução</span></a><a href="#contato"><b>06</b><span>Contato</span></a></aside>
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-texture" aria-hidden="true" />
          <div className="page-frame hero-grid">
            <div className="hero-copy">
              <p className="overline"><span className="live-dot" /> Aberto a estágio em desenvolvimento</p>
              <h1 id="hero-title">Arthur<br /><em>constrói</em><br />sistemas úteis.</h1>
              <p className="hero-lede">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Ver projetos <ArrowDown size={16} aria-hidden="true" /></a>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-evidence"><img className="hero-collage" src="/manus-storage/arthur-evidence-collage_9ae61dc8.png" alt="Composição editorial de caderno técnico e elementos de engenharia" />
              <div className="hero-index"><span>01 / 05</span><span>São Paulo, BR</span></div>
              <div className="hero-note">
                <span className="note-label">Nota de campo</span>
                <p>“O início da carreira pode ser medido pelo que já foi colocado em operação.”</p>
                <span className="note-rule" />
                <small>backend · automação · dados</small>
              </div>
              <div className="hero-stamp"><span>AS</span><small>software<br />em formação</small></div>
            </div>
          </div>
          <div className="hero-bottom page-frame"><span>Role para explorar</span><span className="scroll-line" /></div>
        </section>

        <section id="sobre" className="section section-about page-frame">
          <SectionMarker number="02" label="Contexto" />
          <div className="about-layout">
            <div className="about-title"><p className="kicker">Uma trajetória em construção</p><h2>Do processo<br /><em>ao produto.</em></h2></div>
            <div className="about-copy">
              <p className="lead-copy">Estudante de Análise e Desenvolvimento de Sistemas no IFSP, Arthur está construindo uma base prática em backend, automação de processos e aplicações internas orientadas a dados.</p>
              <p>{profile.impact}</p>
              <p>Os projetos públicos mostram uma evolução que vai de rotinas automatizadas a sistemas com autenticação, persistência relacional, regras de negócio e auditoria. O código é a prova; a página é apenas o índice.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Perfil no LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="projetos" className="section section-projects">
          <div className="page-frame">
            <SectionMarker number="03" label="Projetos em evidência" />
            <div className="section-heading-row"><div><p className="kicker">Problema → construção → prova</p><h2>Veja como eu<br /><em>construo.</em></h2></div><p className="section-aside">Poucos projetos, escolhidos pelo que revelam sobre raciocínio, organização e capacidade de transformar uma necessidade em software.</p></div>
            <div className="projects-list">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
          </div>
        </section>

        <section id="stack" className="section section-stack page-frame">
          <SectionMarker number="04" label="Ferramentas de construção" />
          <div className="stack-layout"><div><p className="kicker">Stack real, sem porcentagens</p><h2>O que aparece<br /><em>no código.</em></h2></div><div className="stack-list">{stack.map((group) => <div className="stack-row" key={group.category}><span className="stack-category">{group.category}</span><div className="stack-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section id="evolucao" className="section section-evolution">
          <div className="page-frame"><SectionMarker number="05" label="Leitura da evolução" /><div className="section-heading-row"><div><p className="kicker">O GitHub como trajetória</p><h2>Aprender é<br /><em>conectar pontos.</em></h2></div><p className="section-aside">Uma leitura dos projetos públicos: da compreensão dos fundamentos até a construção de sistemas que lidam com operação, dados e acesso.</p></div><img className="evolution-image" src="/manus-storage/arthur-process-diagram_e7e3ce7f.png" alt="Diagrama editorial abstrato representando a evolução de processos para sistemas" /><div className="evolution-track">{evolution.map((step, index) => <div className="evolution-step" key={step.index}><div className="evolution-node"><span>{step.index}</span>{index < evolution.length - 1 && <i />}</div><h3>{step.title}</h3><p>{step.note}</p></div>)}</div></div>
        </section>

        <section className="github-cta page-frame" aria-labelledby="github-title">
          <div className="github-graphic" aria-hidden="true"><Github size={38} strokeWidth={1.2} /><span>código<br />público</span></div>
          <div><p className="kicker">A prova está aberta</p><h2 id="github-title">O próximo capítulo<br /><em>está no GitHub.</em></h2><p>Explore os repositórios, leia os README e acompanhe a evolução diretamente na fonte.</p></div>
          <a className="button button-dark" href={profile.github} target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>

        <section id="contato" className="section section-contact page-frame">
          <SectionMarker number="06" label="Contato" /><div className="contact-layout"><div><p className="kicker">Próxima conversa</p><h2>Vamos falar sobre<br /><em>o que vem depois.</em></h2></div><div className="contact-copy"><p>Arthur está aberto a oportunidades de estágio e início de carreira em desenvolvimento backend, automação de processos e aplicações internas.</p><button className="email-copy" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "E-mail copiado" : profile.email}</button><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={profile.resume} target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Currículo</a><a href={`mailto:${profile.email}`}><Mail size={16} /> E-mail</a></div></div></div>
        </section>
      </main>
      <footer className="site-footer page-frame"><span>Arthur Sacramento · Desenvolvedor de Software em formação</span><span>Construído com clareza e código.</span></footer>
    </div>
  );
}
