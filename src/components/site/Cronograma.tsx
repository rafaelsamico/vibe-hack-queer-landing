const days = [
  {
    day: "DIA 01",
    date: "Sexta · 14 Nov",
    items: [
      ["18:00", "Credenciamento + welcome drink"],
      ["19:30", "Cerimônia de abertura"],
      ["20:30", "Formação de equipes e kickoff"],
    ],
  },
  {
    day: "DIA 02",
    date: "Sábado · 15 Nov",
    items: [
      ["09:00", "Mentorias rotativas"],
      ["14:00", "Oficinas: vibe coding na prática"],
      ["22:00", "Vibe break · DJ set"],
    ],
  },
  {
    day: "DIA 03",
    date: "Domingo · 16 Nov",
    items: [
      ["12:00", "Code freeze"],
      ["14:00", "Pitches"],
      ["18:00", "Premiação e encerramento"],
    ],
  },
];

export function Cronograma() {
  return (
    <section id="cronograma" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-mint">
            // cronograma
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Três dias em loop infinito.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {days.map((d) => (
            <div key={d.day} className="glass rounded-2xl p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold text-neon-pink">{d.day}</h3>
                <span className="font-mono text-xs text-foreground/60">{d.date}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {d.items.map(([time, label]) => (
                  <li key={label} className="flex gap-4 border-l-2 border-neon-cyan/40 pl-4">
                    <span className="font-mono text-xs text-neon-cyan w-12 shrink-0 pt-0.5">{time}</span>
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
