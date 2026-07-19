import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosDeUso,
  head: () => ({
    meta: [{ title: "Termos de Uso · Bibliajando" }],
  }),
});

function TermosDeUso() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foreground/85 leading-relaxed">
      <Link to="/" className="text-primary font-semibold">
        ← Voltar ao início
      </Link>
      <h1 className="mt-6 font-display text-4xl text-ink">Termos de Uso</h1>
      <p className="mt-2 text-sm text-foreground/55">Última atualização: 19 de julho de 2026</p>

      <section className="mt-8 space-y-4">
        <h2 className="font-display text-2xl text-ink pt-4">O serviço</h2>
        <p>
          O <strong>Bibliajando</strong> oferece conteúdos cristãos educativos (aulas, vídeos,
          músicas, livros digitais e atividades) pelo site bibliajando.com.br e pelo aplicativo
          Bibliajando. Parte do conteúdo é gratuita, para conhecer; o acesso completo de cada
          produto é liberado mediante compra.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Compras e acesso</h2>
        <p>
          As compras são processadas pela plataforma Hotmart, com as condições (preço, garantia e
          reembolso) exibidas no momento da compra. O acesso é pessoal e vinculado ao e-mail usado
          na compra. A garantia de reembolso segue a política informada na página de cada produto e
          o Código de Defesa do Consumidor.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Uso permitido</h2>
        <p>
          O conteúdo é protegido por direitos autorais. Você pode usá-lo para estudo pessoal, em
          família ou na sua turma de escola bíblica. Não é permitido revender, redistribuir,
          publicar ou compartilhar o acesso ou os materiais fora desses contextos.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Conta e responsabilidade</h2>
        <p>
          A conta pertence ao adulto responsável pela compra. O uso por crianças e adolescentes deve
          acontecer com mediação de um adulto. Mantenha o acesso ao seu e-mail seguro: é por ele que
          o app confirma a sua identidade.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Alterações</h2>
        <p>
          Podemos atualizar estes termos e os conteúdos oferecidos. Mudanças relevantes serão
          comunicadas no site ou no aplicativo.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Contato</h2>
        <p>
          Dúvidas:{" "}
          <a className="text-primary font-semibold" href="mailto:bibliajando@bibliajando.com.br">
            bibliajando@bibliajando.com.br
          </a>
          .
        </p>
      </section>
    </main>
  );
}
