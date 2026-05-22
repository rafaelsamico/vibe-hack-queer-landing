const days = [
  {
    day: "BOOTCAMP",
    date: "Sábado · 27/06/26",
    items: [
      ["Aulão: Design de Produto"],
      ["Aulão: Vibe Coding"],
      ["Formação de equipes"],
    ],
  },
  {
    day: "HACKATHON",
    date: "Sábado · 04/07/26",
    items: [
      ["Lançamento do desafio"],
      ["Construção de soluções"],
      ["Apresentações e premiações"]
    ],
  },
];

export function Cronograma() {
  return (
    <section id="cronograma" className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-md uppercase tracking-[0.3em] text-white">
            // CRONOGRAMA
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            <span className="text-glow-cyan">Dois dias</span> de celebração do <br /> <span className="text-glow-pink">Mês do Orgulho</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl grid gap-6 md:grid-cols-2">
          {days.map((d) => (
            <div key={d.day} className="glass rounded-2xl p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold text-neon-pink">{d.day}</h3>
                <span className="font-mono text-xs text-neon-cyan">{d.date}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {d.items.map(([label]) => (
                  <li key={label} className="flex gap-4 border-l-2 border-neon-cyan/40 pl-4">
                    <span className="text-sm text-foreground/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
