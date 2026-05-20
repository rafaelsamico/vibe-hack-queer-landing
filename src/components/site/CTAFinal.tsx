import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden className="absolute inset-0 mesh-bg opacity-70" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink">
              // run hack()
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1] md:text-6xl">
              <span className="text-glow-pink">Bora codar</span>
              <br />
              <span className="text-glow-cyan">no seu ritmo?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground/80">
              Vagas limitadas. Inscrições abertas até 31 de outubro.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-neon-pink px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground animate-pulse-glow hover:scale-[1.03] transition"
            >
              Inscrever <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
