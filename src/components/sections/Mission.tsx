import { Reveal } from "../Reveal";

export function Mission() {
  return (
    <section id="missao" className="py-20 md:py-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
            Ao que viemos
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 font-display text-3xl md:text-5xl text-ink leading-tight">
            Todo dia, alguma coisa ensina o seu filho pelo celular.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Um vídeo, um jogo, um influenciador, um algoritmo. A questão
            nunca foi tirar a tela das crianças: é decidir o que ela ensina.
            O Bibliajando existe pra transformar parte desse tempo em
            discipulado. A família assiste, canta, brinca, memoriza
            versículos e ora, tudo dentro de um ambiente escolhido por você.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
