import { Code2 } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-pink/15 text-neon-pink ring-2 ring-neon-cyan/40">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-md font-bold leading-tight text-neon-cyan">
              VIBE HACK
              <span className="block text-md text-neon-pink">QUEER</span>
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

          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Inscrições em breve"
            className="inline-flex items-center justify-center rounded-full bg-neon-pink/30 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60 cursor-not-allowed"
          >
            Inscrever
          </button>
        </nav>
      </div>
    </header>
  );
}
