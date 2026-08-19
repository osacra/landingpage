// Direção visual: Caderno de Sistemas — cada projeto é uma ficha de investigação, não um card genérico.

import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card-topline">
        <span>{project.eyebrow}</span>
        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-evidence"><span className="evidence-dot" />{project.evidence}</div>
      </div>
      <div className="project-detail-grid">
        <div><span className="detail-label">Problema</span><p>{project.problem}</p></div>
        <div><span className="detail-label">Construção</span><p>{project.solution}</p></div>
      </div>
      <footer className="project-card-footer">
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Código <ExternalLink size={14} aria-hidden="true" /></a>
      </footer>
    </article>
  );
}
