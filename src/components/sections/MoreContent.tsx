import { Reveal } from "../Reveal";

export function MoreContent() {
  return (
    <section id="longa" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
              Mais do Bibliajando
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink">
              Cinema, música e fé
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Nosso longa-metragem oficial e a trilha sonora pra ouvir onde quiser
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Longa-metragem SBB */}
          <Reveal>
            <div className="h-full flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-pop transition-shadow">
              <div className="aspect-video w-full bg-ink">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/yx6nARYe0Gc?start=132"
                  title="Longa-metragem oficial Bibliajando — SBB"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="self-start text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border bg-brand-blue/10 text-brand-blue border-brand-blue/30">
                  🎬 Longa-metragem
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  Lançado pela Sociedade Bíblica do Brasil
                </h3>
                <p className="mt-3 text-[15px] text-foreground/75 leading-relaxed flex-1">
                  Um longa-metragem animado fruto de parceria com a SBB —
                  contando histórias bíblicas com a estética e o cuidado que a
                  próxima geração merece.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=yx6nARYe0Gc&t=132s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform shadow-soft"
                >
                  Assistir no YouTube →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Spotify Playlist */}
          <Reveal delay={120}>
            <div className="h-full flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-pop transition-shadow">
              <div className="p-5 bg-[#1DB954]/5">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: 12 }}
                  src="https://open.spotify.com/embed/playlist/5zZMOIxvnE6p5OGoeIR0F4?utm_source=generator"
                  width="100%"
                  height={352}
                  frameBorder={0}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Playlist Bibliajando no Spotify"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="self-start text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border bg-[#1DB954]/10 text-[#1DB954] border-[#1DB954]/30">
                  🎧 Playlist oficial
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  Trilha sonora do Bibliajando
                </h3>
                <p className="mt-3 text-[15px] text-foreground/75 leading-relaxed flex-1">
                  Músicas autorais pra acompanhar a leitura, embalar a família
                  e adorar no caminho. O Show de Nossa Vida e muito mais.
                </p>
                <a
                  href="https://open.spotify.com/playlist/5zZMOIxvnE6p5OGoeIR0F4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-[#1DB954] text-white px-5 py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform shadow-soft"
                >
                  Ouvir no Spotify →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
