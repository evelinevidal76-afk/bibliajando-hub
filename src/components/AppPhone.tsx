import { useEffect, useState } from "react";
import appHome from "@/assets/app/app-01-home.jpg";
import appUnidades from "@/assets/app/app-02-unidades.jpg";
import appVideo from "@/assets/app/app-03-video.jpg";
import appMusica from "@/assets/app/app-04-musica.jpg";
import appJogo from "@/assets/app/app-05-jogo.jpg";

const telas = [
  { src: appUnidades, alt: "Tela do aplicativo com as unidades da jornada Como Tudo Começou" },
  { src: appVideo, alt: "Tela do aplicativo com o episódio animado do dia" },
  { src: appMusica, alt: "Tela do aplicativo com a música e o modo karaokê" },
  { src: appJogo, alt: "Tela do aplicativo com o jogo da lição" },
  { src: appHome, alt: "Tela inicial do aplicativo Bibliajando" },
];

/**
 * Celular com prints reais do aplicativo passando automaticamente,
 * no mesmo padrão do mockup da página de vendas do produto Pais.
 */
export function AppPhone() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual((n) => (n + 1) % telas.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[250px] sm:w-[270px] bg-ink rounded-[26px] p-3 shadow-pop">
        <div className="absolute top-2 -right-1 w-2.5 h-2.5 rounded-full bg-ink border-2 border-foreground/30" />
        <div className="relative rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: "460 / 995" }}>
          {telas.map((tela, i) => (
            <img
              key={tela.src}
              src={tela.src}
              alt={tela.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === atual ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-2.5 justify-center">
        {telas.map((tela, i) => (
          <button
            key={tela.src}
            type="button"
            aria-label={`Ver tela ${i + 1}`}
            onClick={() => setAtual(i)}
            className={`relative h-2 rounded-full transition-all before:absolute before:-inset-2.5 before:content-[''] ${
              i === atual ? "w-6 bg-primary" : "w-2 bg-primary/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
