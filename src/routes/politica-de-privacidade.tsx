import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaDePrivacidade,
  head: () => ({
    meta: [{ title: "Política de Privacidade · Bibliajando" }],
  }),
});

function PoliticaDePrivacidade() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foreground/85 leading-relaxed">
      <Link to="/" className="text-primary font-semibold">
        ← Voltar ao início
      </Link>
      <h1 className="mt-6 font-display text-4xl text-ink">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-foreground/55">Última atualização: 19 de julho de 2026</p>

      <section className="mt-8 space-y-4">
        <p>
          Esta política descreve como o <strong>Bibliajando</strong> (site bibliajando.com.br e o
          aplicativo Bibliajando para Android, iOS e web) coleta, usa e protege as suas
          informações.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Quais dados coletamos</h2>
        <p>
          <strong>E-mail:</strong> usado exclusivamente para identificar a sua conta e liberar o
          acesso aos conteúdos adquiridos. O login é feito por código de confirmação enviado ao seu
          e-mail; não armazenamos senhas.
        </p>
        <p>
          <strong>Progresso de uso:</strong> aulas concluídas, páginas lidas, preferências e
          anotações pessoais ficam armazenadas no seu próprio aparelho. Dados de turmas e presenças
          (uso por professores) são armazenados de forma segura em nossos servidores.
        </p>
        <p>
          <strong>Dados de compra:</strong> as compras são processadas pela plataforma Hotmart, que
          nos informa apenas o e-mail do comprador e o produto adquirido, para liberação do acesso.
          Não temos acesso a dados de cartão ou pagamento.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">O que não fazemos</h2>
        <p>
          Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Não
          exibimos anúncios de terceiros no aplicativo. Não coletamos localização, contatos ou
          qualquer dado do aparelho além do necessário para o funcionamento descrito acima.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Crianças</h2>
        <p>
          Os conteúdos do Bibliajando são pensados para serem vivenciados por crianças e
          adolescentes <strong>com a mediação de um adulto</strong> (pais ou professores). A conta e
          o login pertencem sempre ao adulto responsável.
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Seus direitos</h2>
        <p>
          Você pode pedir a exclusão dos seus dados a qualquer momento pelo e-mail{" "}
          <a className="text-primary font-semibold" href="mailto:bibliajando@bibliajando.com.br">
            bibliajando@bibliajando.com.br
          </a>
          . Atendemos às solicitações previstas na Lei Geral de Proteção de Dados (LGPD, Lei
          13.709/2018).
        </p>

        <h2 className="font-display text-2xl text-ink pt-4">Contato</h2>
        <p>
          Dúvidas sobre esta política: escreva para{" "}
          <a className="text-primary font-semibold" href="mailto:bibliajando@bibliajando.com.br">
            bibliajando@bibliajando.com.br
          </a>
          .
        </p>
      </section>
    </main>
  );
}
