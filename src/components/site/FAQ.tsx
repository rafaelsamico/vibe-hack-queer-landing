import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso saber programar ?",
    a: "Não. Aceitamos pessoas de todos os níveis, incluindo iniciantes. Vibe coding é sobre intenção e criatividade; auxílio técnico estará disponível o tempo todo.",
  },
  {
    q: "Quem pode se inscrever?",
    a: "Pessoas LGBTQIAPN+ e aliadas comprometidas com a causa da diversidade e inclusão, dispostas a trabalhar juntas para propor soluções para a comunidade.",
  },
  {
    q: "Qual é o custo?",
    a: "Inscrição gratuita.",
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-md uppercase tracking-[0.3em] text-white">
            // FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Dúvidas <br /> frequentes
          </h2>
        </div>

        <div className="glass mx-auto mt-12 max-w-2xl rounded-2xl p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/5 last:border-0"
              >
                <AccordionTrigger className="px-4 text-left font-display text-base md:text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-foreground/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
