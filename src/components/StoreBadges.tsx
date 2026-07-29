/**
 * Selos das lojas (Google Play e App Store) no estilo dos botões
 * oficiais. Enquanto os aplicativos não são publicados, aparecem como
 * "Em breve" e não são clicáveis (mesmo padrão da página de obrigado).
 */
export function StoreBadges({ dark = false }: { dark?: boolean }) {
  const base = dark
    ? "bg-white/10 border border-white/25 text-white"
    : "bg-ink text-white";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 opacity-80 cursor-default select-none ${base}`}>
        <span className="text-xl">▶</span>
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider opacity-75">Em breve na</span>
          <span className="block text-sm font-bold">Google Play</span>
        </span>
      </div>
      <div className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 opacity-80 cursor-default select-none ${base}`}>
        <span className="text-xl">🍎</span>
        <span className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider opacity-75">Em breve na</span>
          <span className="block text-sm font-bold">App Store</span>
        </span>
      </div>
    </div>
  );
}
