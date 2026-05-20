import { Heart, Palette, Users } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    color: "text-neon-pink",
    ring: "ring-neon-pink/40",
    title: "Espaço seguro",
    body: "Um ambiente onde identidades, corpos e expressões são respeitados — antes, durante e depois do código.",
  },
  {
    icon: Palette,
    color: "text-neon-cyan",
    ring: "ring-neon-cyan/40",
    title: "Estética como código",
    body: "Vibe coding é deixar a sensibilidade guiar a sintaxe. Aqui, beleza e função andam juntas.",
  },
  {
    icon: Users,
    color: "text-neon-mint",
    ring: "ring-neon-mint/40",
    title: "Comunidade primeiro",
    body: "Construímos junto. Mentoria, troca real e redes que continuam depois do hackathon.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            // sobre o evento
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Um hackathon construído <span className="text-glow-pink">por</span> e{" "}
            <span className="text-glow-cyan">para</span> a comunidade LGBTQIAPN+.
          </h2>
          <p className="mt-6 text-foreground/75 md:text-lg">
            Três dias de imersão em vibe coding, com mentorias, oficinas e prêmios.
            Aberto a pessoas de todos os níveis técnicos — do primeiro <code className="font-mono text-neon-mint">commit</code> ao primeiro deploy em produção.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="glass rounded-2xl p-7">
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ${p.ring} ${p.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
