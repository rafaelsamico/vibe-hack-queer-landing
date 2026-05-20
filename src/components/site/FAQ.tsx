import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso saber programar para participar?",
    a: "Não. Aceitamos pessoas de todos os níveis — incluindo iniciantes. Vibe coding é sobre intenção e criatividade; mentorias técnicas estarão disponíveis o tempo todo.",
  },
  {
    q: "Quem pode se inscrever?",
    a: "Pessoas LGBTQIAPN+ e aliades comprometides com um espaço seguro. Times podem ter de 2 a 5 integrantes — você pode chegar sem time e formar no kickoff.",
  },
  {
    q: "Qual é o custo?",
    a: "Inscrição gratuita. Alimentação durante o evento e kit de boas-vindas inclusos para participantes confirmades.",
  },
  {
    q: "Quais são os prêmios?",
    a: "Premiação em dinheiro para os três primeiros lugares, créditos em nuvem, mentoria pós-evento e oportunidades com empresas parceiras.",
  },
  {
    q: "Posso participar remotamente?",
    a: "O evento principal é presencial em Recife. Teremos transmissões abertas das palestras e da premiação para quem acompanhar de longe.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            // faq
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Dúvidas frequentes.
          </h2>
        </div>

        <div className="glass mt-12 rounded-2xl p-2 md:p-4">
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
