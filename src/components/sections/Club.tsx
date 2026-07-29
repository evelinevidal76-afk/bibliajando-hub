import { Reveal } from "../Reveal";
import { StoreBadges } from "../StoreBadges";

const benefits = [
  "Todas as suas jornadas no mesmo aplicativo",
  "Funciona no celular, no tablet, no computador e na TV",
  "O progresso da família fica salvo automaticamente",
  "Acesso vitalício, sem mensalidade e sem assinatura",
];

export function Club() {
  return (
    <section id="clube" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-club p-10 md:p-16 shadow-pop">
            <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand-yellow/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-brand-pink/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center text-white">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow text-ink flex items-center justify-center text-3xl mb-6 shadow-yellow-glow">
                  🔓
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-bold">
                  Já é cliente
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-white">
                  Abra o Bibliajando
                </h2>
                <p className="mt-5 text-lg text-white/85">
                  Tudo o que você comprou vive dentro do aplicativo. Entre
                  com o e-mail da compra e continue de onde parou. Sem senha
                  pra decorar, sem mensalidade.
                </p>
                <a
                  href="https://app.bibliajando.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-brand-yellow text-ink px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-yellow-glow"
                >
                  Acessar minhas jornadas →
                </a>
                <div className="mt-6">
                  <StoreBadges dark />
                </div>
              </div>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-yellow text-ink flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-white font-medium pt-0.5">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
