import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Floating code tags */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute top-32 left-8 glass rounded-lg px-3 py-1.5 font-mono text-xs text-neon-cyan">
            const vibe = queer;
          </div>
          <div className="absolute top-44 right-10 glass rounded-lg px-3 py-1.5 font-mono text-xs text-neon-pink">
            {"{ pride: ∞ }"}
          </div>
          <div className="absolute bottom-24 left-12 glass rounded-lg px-3 py-1.5 font-mono text-xs text-neon-mint">
            function hack() →
          </div>
          <div className="absolute bottom-32 right-16 glass rounded-lg px-3 py-1.5 font-mono text-xs text-foreground/80">
            {"<HackQueer />"}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-neon-pink ring-1 ring-neon-pink/40">
            <Sparkles className="h-3.5 w-3.5" />
            Primeira edição queer de vibe coding
          </div>

          <h1 className="mt-8 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            <span className="text-glow-pink block">VIBE HACK</span>
            <span className="text-glow-cyan block mt-2">QUEER</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base text-foreground/75 md:text-lg">
            Codifique no seu próprio ritmo. Quebre normas. Construa o futuro
            com a comunidade LGBTQIAPN+ e pessoas aliadas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              id="inscrever"
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-neon-pink px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground animate-pulse-glow hover:scale-[1.03] transition"
            >
              Inscrever <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-neon-cyan hover:bg-neon-cyan/15 transition"
            >
              Saiba mais
            </a>
          </div>

          {/* Event card */}
          <div className="mt-16 glass w-full max-w-2xl rounded-2xl p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2 text-sm text-foreground/85">
                  <Calendar className="h-4 w-4 text-neon-cyan" />
                  <span className="font-mono">14 — 16 de Novembro de 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/85">
                  <MapPin className="h-4 w-4 text-neon-pink" />
                  <span className="font-mono">CIn UFPE · Recife — PE</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {[
                  ["48", "DIAS"],
                  ["12", "HRS"],
                  ["30", "MIN"],
                  ["00", "SEG"],
                ].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display text-2xl font-bold text-neon-pink md:text-3xl">{n}</div>
                    <div className="mt-1 font-mono text-[10px] tracking-widest text-foreground/60">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
