import { Reveal } from "../Reveal";

export function Community() {
  return (
    <section id="comunidade" className="py-20 md:py-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
            Comunidade
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl text-ink">
            Caminhe com a gente
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Avisos de novidades, bastidores das animações e conteúdo
            gratuito, direto no seu celular.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/KnHvdxzr5AUIDNRzq0t3tP?s=cl&p=i&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 text-ink font-semibold px-7 py-3.5 hover:scale-105 transition-transform"
            >
              💬 Grupo no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/channel/Abbf5jOxCkOBOM7t/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-pink/40 bg-brand-pink/10 text-ink font-semibold px-7 py-3.5 hover:scale-105 transition-transform"
            >
              📣 Canal no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
