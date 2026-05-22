export function Organizacao() {
  return (
    <section id="organizacao" className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="font-mono text-md uppercase tracking-[0.3em] text-white">
            // ORGANIZAÇÃO
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <img
              src="/cin-ufpe-logo.png"
              alt="CIn-UFPE — Centro de Informática da UFPE"
              className="h-28 w-auto md:h-40"
              loading="lazy"
            />
            <img
              src="/ufpe-logo.png"
              alt="UFPE — Universidade Federal de Pernambuco"
              className="h-40 w-auto md:h-56"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
