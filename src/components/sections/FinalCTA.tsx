import { Reveal } from "../Reveal";

const paths = [
  {
    label: "Sou pai/mãe",
    sub: "Quero ensinar meus filhos",
    href: "https://pais.bibliajando.com.br/",
    emoji: "👨‍👩‍👧",
    color: "var(--brand-blue)",
  },
  {
    label: "Sou professor de EBD",
    sub: "Quero transformar minha turma",
    href: "https://ebd.bibliajando.com.br/",
    emoji: "📚",
    color: "var(--brand-green)",
  },
  {
    label: "Sou adolescente ou líder",
    sub: "Quero fé sem chatice",
    href: "https://livro.bibliajando.com.br/",
    emoji: "🔥",
    color: "var(--brand-orange)",
  },
];

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-cream">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
            Próximo passo
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight text-ink">
            Qual é o próximo passo <span className="text-gradient-warm">pra você?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid sm:grid-cols-3 gap-5">
            {paths.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-2 rounded-3xl bg-card border-2 border-border hover:border-transparent hover:-translate-y-2 px-6 py-8 transition-all duration-300 shadow-soft hover:shadow-pop overflow-hidden"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1.5 transition-all group-hover:h-2"
                  style={{ background: p.color }}
                />
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {p.emoji}
                </span>
                <span className="font-display text-xl text-ink mt-2">{p.label}</span>
                <span className="text-sm text-foreground/60">{p.sub}</span>
                <span
                  className="mt-3 text-sm font-bold inline-flex items-center gap-1"
                  style={{ color: p.color }}
                >
                  Acessar →
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
