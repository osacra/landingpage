// Direção visual: Caderno de Sistemas — navegação como índice de relatório, com linhas, números e contraste editorial.

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#evolucao", label: "Evolução" },
];

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <span className="brand-mark" aria-hidden="true"><img src="/manus-storage/arthur-as-mark_2a6b2dc5.png" alt="" /></span>
          <span className="brand-copy"><strong>AS</strong><small>portfólio / 2026</small></span>
        </a>

        <button className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <span className="nav-caption">Índice</span>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
          <a className="nav-external" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
