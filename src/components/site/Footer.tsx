import { Code2, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-pink/15 text-neon-pink ring-1 ring-neon-pink/40">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-bold leading-tight">
              VIBE HACK
              <span className="block text-[10px] tracking-[0.3em] text-neon-pink">QUEER</span>
            </span>
          </div>

          <p className="font-mono text-xs text-foreground/55">
            © 2026 Vibe Hack Queer · Feito com orgulho em Recife
          </p>

          <div className="flex items-center gap-4 text-foreground/60">
            <a href="#" aria-label="Instagram" className="hover:text-neon-pink transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-neon-cyan transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-neon-mint transition"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
