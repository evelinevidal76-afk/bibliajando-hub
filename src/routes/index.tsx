import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { YouTube } from "@/components/sections/YouTube";
import { MoreContent } from "@/components/sections/MoreContent";
import { Club } from "@/components/sections/Club";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bibliajando — A Bíblia do jeito que você sempre quis entender" },
      {
        name: "description",
        content:
          "Conteúdo bíblico moderno para crianças, adolescentes e famílias — sem enrolação, sem chatice. Produtos, animações e o Clube Bibliajando.",
      },
      { property: "og:title", content: "Bibliajando — A Bíblia do seu jeito" },
      {
        property: "og:description",
        content:
          "Canal cristão brasileiro com longa-metragem na SBB, materiais de EBD, livro para adolescentes e Clube exclusivo.",
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
        <About />
        <Products />
        <YouTube />
        <MoreContent />
        <Club />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
