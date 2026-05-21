import { Reveal } from "../Reveal";
import logoMark from "@/assets/logo-mark.webp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero grain"
    >
      {/* Floating decorative logo mark */}
      <img
        src={logoMark}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute -top-10 -right-20 w-[420px] opacity-20 animate-spin-slow pointer-events-none"
      />
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary">
            🎬 Longa-metragem lançado pela SBB
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
            A Bíblia do jeito que <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-gradient-warm">você sempre quis</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 9 Q 75 2, 150 6 T 298 4"
                  stroke="oklch(0.88 0.18 92)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            entender.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-7 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Conteúdo bíblico moderno para crianças, adolescentes e famílias —
            sem enrolação, sem chatice.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-pop"
            >
              Ver nossos produtos →
            </a>
            <a
              href="#quem-somos"
              className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary/40 px-7 py-4 rounded-full font-semibold text-foreground transition-colors shadow-soft"
            >
              <span className="w-7 h-7 rounded-full bg-brand-yellow text-ink flex items-center justify-center">
                ↓
              </span>
              Conheça nossa história
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <Stat value="+100k" label="seguidores" />
            <span className="hidden sm:inline-block w-px h-10 bg-border" />
            <Stat value="3" label="produtos" />
            <span className="hidden sm:inline-block w-px h-10 bg-border" />
            <Stat value="🎬" label="Longa na SBB" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl md:text-4xl text-primary">{value}</span>
      <span className="text-sm text-foreground/60 mt-1">{label}</span>
    </div>
  );
}
