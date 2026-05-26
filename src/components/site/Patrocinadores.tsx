export function Patrocinadores() {
  return (
    <section id="patrocinadores" className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="font-mono text-md uppercase tracking-[0.3em] text-white">
            // PATROCINADORES
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a href="https://www.cesar.org.br/" target="_blank" rel="noopener noreferrer">
              <img
                src="/cesar-logo.png"
                alt="CESAR"
                className="h-28 w-auto md:h-36"
                loading="lazy"
              />
            </a>
            <a href="https://www.cesar.school/" target="_blank" rel="noopener noreferrer">
              <img
                src="/cesar-school-logo.png"
                alt="CESAR School"
                className="h-28 w-auto md:h-36"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
