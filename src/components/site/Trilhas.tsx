const trilhas = [
  {
    tag: "A",
    color: "text-neon-pink",
    bg: "bg-neon-pink/10",
    ring: "ring-neon-pink/40",
    title: "Sistemas de Cuidado",
    body: "Ferramentas para saúde mental, redes de apoio e segurança comunitária.",
  },
  {
    tag: "B",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    ring: "ring-neon-cyan/40",
    title: "Estética Radical",
    body: "Interfaces, jogos e experiências visuais que celebram a identidade queer.",
  },
  {
    tag: "C",
    color: "text-neon-mint",
    bg: "bg-neon-mint/10",
    ring: "ring-neon-mint/40",
    title: "Arquivos Vivos",
    body: "Memória, história e narrativas LGBTQIAPN+ codificadas em software.",
  },
];

export function Trilhas() {
  return (
    <section id="trilhas" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink">
              // trilhas
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Escolha sua frequência.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Três temas que atravessam tecnologia e identidade. Sua equipe escolhe
            uma trilha no kickoff.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trilhas.map((t) => (
            <article key={t.tag} className="glass group relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl font-bold ring-1 ${t.bg} ${t.color} ${t.ring}`}>
                {t.tag}
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{t.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{t.body}</p>
              <div className={`absolute -bottom-12 -right-12 h-40 w-40 rounded-full ${t.bg} blur-3xl opacity-60 group-hover:opacity-100 transition`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
