import { Code2, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-pink/15 text-neon-pink ring-2 ring-neon-cyan/40">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-md font-bold leading-tight text-neon-cyan">
              VIBE HACK
              <span className="block text-md text-neon-pink">QUEER</span>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-center font-mono text-xs text-foreground/55">
              © 2026 Vibe Hack Queer
            </p>
            <p className="font-mono text-xs text-white">
              Feito com orgulho no CIn-UFPE
            </p>
          </div>
          

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
