import { Code2 } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trilhas", label: "Trilhas" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-pink/15 text-neon-pink ring-1 ring-neon-pink/40 group-hover:bg-neon-pink/25 transition">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-bold leading-tight">
              VIBE HACK
              <span className="block text-[10px] tracking-[0.3em] text-neon-pink">QUEER</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/75">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#inscrever"
            className="inline-flex items-center justify-center rounded-full bg-neon-pink px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground animate-pulse-glow hover:scale-[1.03] transition"
          >
            Inscrever
          </a>
        </nav>
      </div>
    </header>
  );
}
