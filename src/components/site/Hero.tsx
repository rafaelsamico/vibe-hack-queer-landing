import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { ContadorSlot } from "@/components/site/ContadorSlot";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-neon-pink ring-1 ring-neon-pink/40">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-white text-glow-pink">Pessoas LGBTQIAPN+ e aliadas</span>
          </div>

          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            <span className="text-glow-cyan block">VIBE HACK</span>
            <span className="text-glow-pink block mt-2">QUEER</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-foreground/75 md:text-lg">
            Dois sábados de <br /> treinamento e competição <br /> para celebrar o Mês do Orgulho
          </p>

          {/* Event card */}
          <div className="mt-8 glass max-w-2xl rounded-2xl p-5 md:p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-white">
                <Calendar className="h-4 w-4 text-neon-cyan" />
                <span className="font-mono">20/06/26 e 27/06/26</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <MapPin className="h-4 w-4 text-neon-pink" />
                <span className="font-mono">CIn-UFPE</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ContadorSlot />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              id="inscrever"
              type="button"
              disabled
              aria-disabled="true"
              title="Inscrições em breve"
              className="inline-flex items-center gap-2 rounded-full bg-neon-pink/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/60 cursor-not-allowed"
            >
              Inscrever <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-neon-cyan/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-neon-cyan hover:bg-neon-cyan/15 transition"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
