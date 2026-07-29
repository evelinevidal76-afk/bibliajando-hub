import { Reveal } from "../Reveal";
import imgPais from "@/assets/product-pais.webp";
import imgEbd from "@/assets/product-ebd.webp";
import imgCoracao from "@/assets/product-coracao.webp";
import imgJonas from "@/assets/product-jonas.jpg";
import imgMaiorCaso from "@/assets/product-maior-caso.jpg";

type Product = {
  tag: string;
  tagClass: string;
  title: string;
  audience: string;
  description: string;
  href?: string;
  image: string;
  accent: string;
  emBreve?: boolean;
};

const products: Product[] = [
  {
    tag: "Para Pais e Filhos",
    tagClass: "bg-brand-blue/10 text-brand-blue border-brand-blue/30",
    title: "Como Tudo Começou",
    audience: "Crianças de 4 a 12 anos",
    description:
      "Uma jornada animada pelo livro de Gênesis. Aprenda junto com seus filhos como tudo começou, de um jeito leve, visual e cheio de emoção.",
    href: "https://app.bibliajando.com.br/?produto=bibliajando-pais",
    image: imgPais,
    accent: "var(--brand-blue)",
  },
  {
    tag: "Para Igrejas",
    tagClass: "bg-brand-green/15 text-brand-green border-brand-green/40",
    title: "Currículo Gênesis EBD",
    audience: "Professores de EBD",
    description:
      "30 domingos percorrendo todo o livro de Gênesis com crianças. Material lúdico e envolvente que transforma a Escola Bíblica Dominical.",
    href: "https://app.bibliajando.com.br/?produto=bibliajando-ebd",
    image: imgEbd,
    accent: "var(--brand-green)",
  },
  {
    tag: "Para Jovens",
    tagClass: "bg-brand-orange/15 text-brand-orange border-brand-orange/40",
    title: "Coração de Adolescente",
    audience: "Adolescentes e líderes",
    description:
      "FlipBook + Bônus. Fé sem chatice. Emoção sem moralismo. Um livro que fala de Deus do jeito que os jovens entendem, com O Show de Nossa Vida como trilha de fundo.",
    href: "https://app.bibliajando.com.br/?produto=coracao-adolescente",
    image: imgCoracao,
    accent: "var(--brand-orange)",
  },
  {
    tag: "Para Pais e Filhos",
    tagClass: "bg-brand-blue/10 text-brand-blue border-brand-blue/30",
    title: "Jonas",
    audience: "Crianças de 4 a 12 anos",
    description:
      "A viagem de quem fugiu de Deus. Sete episódios pela história de Jonas: tempestade, grande peixe, segunda chance e um Deus que não desiste.",
    image: imgJonas,
    accent: "var(--brand-blue)",
    emBreve: true,
  },
  {
    tag: "Discipulado",
    tagClass: "bg-brand-pink/15 text-brand-pink border-brand-pink/40",
    title: "O Maior Caso da História",
    audience: "Discípulos e discipuladores",
    description:
      "A investigação que começa no Éden e termina no Veredito Final. Um discipulado vivido como o maior caso já aberto, com Cristo no centro.",
    image: imgMaiorCaso,
    accent: "var(--brand-pink)",
    emBreve: true,
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
              Jornadas
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink">
              Um aplicativo, várias jornadas
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Experimente grátis antes de decidir. Comprou, é seu pra sempre,
              sem mensalidade. E o aplicativo continua ganhando jornadas
              novas.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article
                className="group h-full flex flex-col rounded-3xl bg-card border border-border overflow-hidden hover:-translate-y-2 hover:shadow-pop transition-all duration-300"
                style={{ "--accent": p.accent } as React.CSSProperties}
              >
                <div className="relative h-64 overflow-hidden bg-ink/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.emBreve && (
                    <span className="absolute top-4 left-4 text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-ink text-white">
                      Em breve
                    </span>
                  )}
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className={`self-start text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${p.tagClass}`}>
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/55 font-medium">
                    {p.audience}
                  </p>
                  <p className="mt-4 text-[15px] text-foreground/75 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  {p.emBreve ? (
                    <span className="mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-ink/60 bg-ink/5 border border-border cursor-default select-none">
                      Disponível em breve
                    </span>
                  ) : (
                    <a
                      href={p.href}
                      className="mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-white transition-transform hover:scale-[1.02] shadow-soft"
                      style={{ background: p.accent }}
                    >
                      Experimentar grátis →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
