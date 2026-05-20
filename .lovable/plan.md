# Landing Page — Vibe Hack Queer

Landing page de evento (1 página, SSR-friendly) alinhada visualmente aos sites de referência (`vibehack.cin.ufpe.br` e `/hackgrrrl`), adaptada para a comunidade LGBTQIAPN+.

## Direção visual

- **Modo escuro permanente**: fundo `#0a0a0f` com grid sutil de linhas (1px, opacity 5%).
- **Paleta neon queer**: rosa magenta `#ff1f8f` (primário, igual à referência), ciano `#00e5ff`, e acentos secundários inspirados no orgulho — violeta `#a855f7`, verde menta `#22ffaa`, amarelo `#ffd400`. Usados com intenção (não arco-íris decorativo).
- **Mesh gradients**: blobs radiais difusos (magenta + ciano + violeta) com `blur(120px)` ao fundo, em posições fixas, animação suave de flutuação.
- **Glassmorphism**: cartões com `backdrop-blur-xl`, fundo `white/[0.03]`, borda `white/10`, sombras internas suaves.
- **Neon glow**: títulos do hero com `text-shadow` em camadas (magenta + ciano), botões primários com glow externo magenta.
- **Tipografia**: display em **Space Grotesk** (peso 700, tracking apertado) + UI/parágrafo em **Inter** + mono em **JetBrains Mono** para "code tags" decorativas (`const vibe = true;`, `{ pride: ∞ }`, `<HackQueer />`).
- **CTA principal "Inscrever"**: pílula rosa neon com glow, presente no header, hero e CTA final.

## Estrutura (uma rota, `/`)

```text
src/routes/index.tsx        — página única
src/components/site/
  Nav.tsx                   — logo + links âncora + CTA Inscrever
  Hero.tsx                  — code tags flutuantes + título glow + CTA + countdown/data
  MeshBackdrop.tsx          — blobs gradientes fixos
  Sobre.tsx                 — o que é o evento (glass cards)
  VibeCoding.tsx            — explicação de vibe coding
  Cronograma.tsx            — agenda em timeline glass
  Trilhas.tsx               — 3 trilhas com chips neon
  FAQ.tsx                   — accordion (shadcn) com estética glass
  CTAFinal.tsx              — bloco final com botão "Inscrever"
  Footer.tsx                — créditos, redes sociais
```

Navegação por âncoras dentro da página única (#sobre, #cronograma, #faq) — adequado para landing page de evento. Header é sticky com blur.

## Conteúdo das seções

1. **Hero**: badge "primeira edição queer", título "VIBE HACK QUEER" em duas linhas com glow magenta/ciano, subtítulo curto, dois CTAs ("Inscrever" primário + "Saiba mais" outline ciano), card glass com data + local + countdown.
2. **Sobre**: 3 cards glass com pilares (Espaço seguro · Estética como código · Comunidade em primeiro lugar).
3. **Vibe Coding**: bloco editorial 2 colunas — texto + visual mesh.
4. **Trilhas**: 3 cards (Sistemas de Cuidado · Estética Radical · Arquivos Vivos) com letras A/B/C em chips neon.
5. **Cronograma**: timeline vertical glass, 3 dias placeholder.
6. **FAQ**: 4–6 perguntas em accordion.
7. **CTA Final**: título grande + botão "Inscrever" com glow forte.
8. **Footer**: logo, copyright, redes.

Copy 100% em português (PT-BR). Datas e local como placeholders editáveis.

## Detalhes técnicos

- Tokens definidos em `src/styles.css` (`@theme inline` + `:root` em OKLCH): `--background`, `--foreground`, `--neon-pink`, `--neon-cyan`, `--neon-violet`, `--neon-mint`, `--glass`, `--glass-border`, mais utilitários `--shadow-glow-pink`, `--shadow-glow-cyan`, `--gradient-mesh`.
- Sem `.dark` class — site é dark-only; sobrescrever `:root` direto.
- Fontes carregadas via `<link>` no `head()` do `__root.tsx`.
- SEO no `index.tsx`: `head()` com title "Vibe Hack Queer — Hackathon de Vibe Coding LGBTQIAPN+", description, og:title, og:description, og:type=website, JSON-LD `Event`.
- Acessibilidade: contraste AA em todos os textos sobre fundo escuro (parágrafos em `oklch(0.85 ...)`, nunca neon sobre escuro para texto longo); foco visível em CTAs; `prefers-reduced-motion` desativa flutuação dos blobs.
- Componentes shadcn já presentes: `Button` (nova variante `neon`), `Accordion` para FAQ.
- Animações leves com CSS (`@keyframes float`, `pulse-glow`); sem libs adicionais.
- Substituir `PlaceholderIndex` em `src/routes/index.tsx`.

## Fora de escopo

- Backend / formulário de inscrição real (CTA aponta para `#` ou link externo placeholder).
- Internacionalização.
- Páginas separadas (about/contact/etc.) — landing single-page é o padrão para evento deste tipo.
