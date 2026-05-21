import type { MouseEvent } from "react";

import logoFull from "@/assets/logo-full.png";

const links = [
  { label: "Canal YT", href: "https://www.youtube.com/@Bibliajandooriginal", forceOpen: true },
  { label: "EBD", href: "https://ebd.bibliajando.com.br/" },
  { label: "Livro", href: "https://livro.bibliajando.com.br/" },
  { label: "Clube", href: "https://clube.bibliajando.com.br/pt-br/club/bibliajando" },
  { label: "Testemunho", href: "https://www.youtube.com/watch?v=cKL3bgKCTPU", forceOpen: true },
];

export function Footer() {
  const openLink = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <a href="#inicio" className="flex items-center">
          <img src={logoFull} alt="Bibliajando" className="h-10 w-auto" />
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={l.forceOpen ? openLink(l.href) : undefined}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-foreground/60">
          © 2025 Bibliajando — A Bíblia do seu jeito. 🙏
        </p>
      </div>
    </footer>
  );
}
