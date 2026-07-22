import { createFileRoute } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";

type ProdutoId = "bibliajando-pais" | "bibliajando-ebd" | "coracao-adolescente";

const PRODUTOS: Record<
  ProdutoId,
  { nome: string; tag: string; tagClass: string; accent: string }
> = {
  "bibliajando-pais": {
    nome: "Como Tudo Começou",
    tag: "Para Pais e Filhos",
    tagClass: "bg-brand-blue/10 text-brand-blue border-brand-blue/30",
    accent: "var(--brand-blue)",
  },
  "bibliajando-ebd": {
    nome: "Currículo Gênesis EBD",
    tag: "Para Igrejas",
    tagClass: "bg-brand-green/15 text-brand-green border-brand-green/40",
    accent: "var(--brand-green)",
  },
  "coracao-adolescente": {
    nome: "Coração de Adolescente",
    tag: "Para Jovens",
    tagClass: "bg-brand-orange/15 text-brand-orange border-brand-orange/40",
    accent: "var(--brand-orange)",
  },
};

function ehProdutoValido(valor: unknown): valor is ProdutoId {
  return typeof valor === "string" && valor in PRODUTOS;
}

export const Route = createFileRoute("/obrigado")({
  component: Obrigado,
  validateSearch: (search: Record<string, unknown>): { produto?: string } => ({
    produto: typeof search.produto === "string" ? search.produto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Compra confirmada · Bibliajando" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Obrigado() {
  const { produto } = Route.useSearch();
  const info = ehProdutoValido(produto) ? PRODUTOS[produto] : null;
  const linkApp = `https://app.bibliajando.com.br/${info ? `?produto=${produto}` : ""}`;

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full bg-card rounded-[2.5rem] shadow-pop border border-border p-10 md:p-14 text-center">
        <a href="https://bibliajando.com.br" className="inline-flex items-center justify-center mb-8">
          <img src={logoFull} alt="Bibliajando" className="h-10 w-auto" />
        </a>

        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold mb-6"
          style={{ background: info ? info.accent : "var(--brand-blue)", color: "white" }}
        >
          ✓
        </div>

        {info && (
          <span
            className={`inline-block text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border mb-4 ${info.tagClass}`}
          >
            {info.tag}
          </span>
        )}

        <h1 className="mt-2 font-display text-3xl md:text-4xl text-ink leading-tight">
          {info ? `Seu acesso a ${info.nome} está liberado` : "Sua compra foi confirmada"}
        </h1>

        <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
          {info
            ? `Abra o Bibliajando e entre com o e-mail que você usou na compra. ${info.nome} já está esperando por você.`
            : "Abra o Bibliajando e entre com o e-mail que você usou na compra para acessar seu conteúdo."}
        </p>

        <a
          href={linkApp}
          className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-yellow text-ink px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-yellow-glow"
        >
          Abrir o Bibliajando →
        </a>

        <p className="mt-4 text-xs text-foreground/55">
          Use o mesmo e-mail da compra para entrar. Acesso vitalício, sem mensalidade.
        </p>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-foreground/60">
            Não encontrou seu acesso?{" "}
            <a
              href="mailto:bibliajando@bibliajando.com.br"
              className="text-primary font-semibold"
            >
              Fale com a gente
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
