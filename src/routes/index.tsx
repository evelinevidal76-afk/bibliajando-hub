import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { YouTube } from "@/components/sections/YouTube";
import { MoreContent } from "@/components/sections/MoreContent";
import { Community } from "@/components/sections/Community";
import { Club } from "@/components/sections/Club";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bibliajando · Transforme tempo de tela em tempo com Deus" },
      {
        name: "description",
        content:
          "Um aplicativo de jornadas bíblicas pra crianças, adolescentes e famílias. Episódios animados, músicas autorais, jogos, versículos e oração no mesmo lugar.",
      },
      { property: "og:title", content: "Bibliajando · Transforme tempo de tela em tempo com Deus" },
      {
        property: "og:description",
        content:
          "O aplicativo da família que fez o longa-metragem da SBB: jornadas bíblicas pra pais e filhos, igrejas e adolescentes.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Products />
        <About />
        <YouTube />
        <MoreContent />
        <Community />
        <Club />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
