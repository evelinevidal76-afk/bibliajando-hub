import { Reveal } from "../Reveal";

const socials = [
  {
    name: "Instagram",
    handle: "@bibliajando",
    href: "https://www.instagram.com/bibliajando/",
    gradient: "from-[#feda75] via-[#fa7e1e] to-[#d62976]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@Bibliajandooriginal",
    href: "https://www.youtube.com/@Bibliajandooriginal",
    gradient: "from-[#ff4d4d] to-[#cc0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 4 12 4 12 4s-4.9 0-8 .2c-.4.1-1.3.1-2.1 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.2 7.7.2s4.9 0 8-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 15V8.6l6.3 3.2-6.3 3.2z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@bibliajando",
    href: "https://www.tiktok.com/@bibliajando",
    gradient: "from-[#25F4EE] via-[#1a1a1a] to-[#FE2C55]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.6 6.8a5.4 5.4 0 01-3.2-1V15a5.5 5.5 0 11-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 102 2.7V3h2.6a5.4 5.4 0 003.2 3.8v2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "/bibliajando",
    href: "https://www.facebook.com/bibliajando/",
    gradient: "from-[#4267B2] to-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.4V21h3.1z" />
      </svg>
    ),
  },
];

export function YouTube() {
  return (
    <section id="redes" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
              Redes sociais
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink">
              Conteúdo gratuito toda semana
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Músicas autorais, animações e ensinamentos — siga a gente onde
              você passa o tempo
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-3xl overflow-hidden bg-gradient-to-br ${s.gradient} p-6 h-44 text-white shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="font-display text-2xl">{s.name}</div>
                  <div className="text-sm text-white/85 mt-0.5">{s.handle}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
