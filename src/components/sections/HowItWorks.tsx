import { Reveal } from "../Reveal";

const passos = [
  {
    emoji: "🧭",
    titulo: "Escolha a jornada",
    texto:
      "Cada fase tem a sua: crianças de 4 a 12 anos com os pais, a turma da EBD ou os adolescentes. Todas começam com uma aula gratuita.",
  },
  {
    emoji: "📖",
    titulo: "Vivam o encontro",
    texto:
      "Episódio animado, descobertas, versículo pra decorar, música com karaokê, jogo e oração, em passos guiados que a família segue junta.",
  },
  {
    emoji: "🌱",
    titulo: "Acompanhe o crescimento",
    texto:
      "O aplicativo salva onde vocês pararam, registra a sequência de dias e celebra cada conquista com figurinhas no álbum da família.",
  },
];

export function HowItWorks() {
  return (
    <section id="aplicativo" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
              Como funciona
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink">
              Um encontro completo em cada abertura do aplicativo
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {passos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120}>
              <article className="h-full rounded-3xl bg-card border border-border p-8 shadow-soft">
                <div className="w-14 h-14 rounded-2xl bg-ink text-2xl flex items-center justify-center">
                  <span>{p.emoji}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {i + 1}. {p.titulo}
                </h3>
                <p className="mt-3 text-[15px] text-foreground/75 leading-relaxed">
                  {p.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["📱 Celular", "🖥️ Computador", "📲 Tablet", "📺 TV"].map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 font-semibold text-ink text-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
