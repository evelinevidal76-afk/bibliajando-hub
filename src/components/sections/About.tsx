import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="quem-somos" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
            Quem somos
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-ink">
            João Marcos <span className="text-brand-blue/60">&</span> Eveline
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Somos um casal apaixonado pela Bíblia e por comunicar a fé de
            forma relevante. Por trás das animações e dos materiais do
            Bibliajando, existe uma história real de chamado, de família e de
            amor pela próxima geração.
          </p>
          <a
            href="https://www.youtube.com/watch?v=cKL3bgKCTPU&t=11s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-soft"
          >
            Ver nosso testemunho →
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-3 bg-brand-yellow rounded-[2rem] -rotate-2" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-pop">
              <div className="aspect-video w-full bg-ink">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cKL3bgKCTPU?start=15"
                  title="Testemunho João Marcos & Eveline"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-foreground/60 italic">
              💛 Nosso testemunho — a história de Mefibosete e a inclusão pelo nosso filho autista
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
