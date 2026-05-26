import { useEffect, useRef, useState } from "react";

const FINAL_DATE = new Date(2026, 5, 1, 23, 59, 59);
const CYCLES = 8;

interface TimeUnits {
  dias: number;
  horas: number;
  minutos: number;
}

function getTimeLeft(): TimeUnits {
  const diff = FINAL_DATE.getTime() - Date.now();
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0 };
  return {
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor((diff % 86_400_000) / 3_600_000),
    minutos: Math.floor((diff % 3_600_000) / 60_000),
  };
}

function SlotReel({ digit }: { digit: number }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(digit);
  const firstRun = useRef(true);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    // First commit: snap to the initial digit with no animation.
    if (firstRun.current) {
      firstRun.current = false;
      el.style.transition = "none";
      el.style.transform = `translateY(calc(var(--reel-h) * ${-digit}))`;
      void el.offsetHeight; // force reflow so the next change can transition
      el.style.transition = "";
      posRef.current = digit;
      return;
    }

    let cur = posRef.current;
    const forward = (digit - (cur % 10) + 10) % 10;

    // Reset toward the start of the strip when we'd run past its end. The
    // snapped index shows the same visible digit, so the swap is invisible.
    if (cur + forward + 10 >= CYCLES * 10) {
      const snapped = cur % 10;
      el.style.transition = "none";
      el.style.transform = `translateY(calc(var(--reel-h) * ${-snapped}))`;
      void el.offsetHeight;
      el.style.transition = "";
      cur = snapped;
    }

    // Always roll forward, plus one full turn for the slot-machine feel.
    const target = cur + forward + 10;
    el.style.transform = `translateY(calc(var(--reel-h) * ${-target}))`;
    posRef.current = target;
  }, [digit]);

  return (
    <div className="slot-reel" aria-hidden>
      <div ref={stripRef} className="slot-reel-strip">
        {Array.from({ length: CYCLES * 10 }, (_, i) => (
          <div key={i} className="slot-digit font-display text-2xl md:text-4xl">
            {i % 10}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReelGroup({ value, label }: { value: number; label: string }) {
  const tens = Math.floor(value / 10) % 10;
  const ones = value % 10;

  return (
    <div className="flex flex-col items-center gap-2 md:gap-3">
      <div className="flex gap-1.5 md:gap-2">
        <SlotReel digit={tens} />
        <SlotReel digit={ones} />
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-neon-cyan">
        {label}
      </span>
    </div>
  );
}

export function ContadorSlot() {
  const [time, setTime] = useState<TimeUnits>({ dias: 0, horas: 0, minutos: 0 });

  useEffect(() => {
    const tick = () =>
      setTime((prev) => {
        const next = getTimeLeft();
        if (
          next.dias === prev.dias &&
          next.horas === prev.horas &&
          next.minutos === prev.minutos
        ) {
          return prev; // keep the same reference to skip a re-render
        }
        return next;
      });

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const finished =
    time.dias === 0 && time.horas === 0 && time.minutos === 0;

  const srText = (
    <p className="sr-only" aria-live="polite">
      {finished
        ? "O evento começou."
        : `Faltam ${time.dias} dias, ${time.horas} horas e ${time.minutos} minutos.`}
    </p>
  );

  const reels = (
    <div className="flex items-start justify-center gap-2 md:gap-5">
      <ReelGroup value={time.dias} label="Dias" />
      <span className="mt-3 font-display text-2xl font-bold text-neon-pink/50 md:mt-4 md:text-4xl">
        :
      </span>
      <ReelGroup value={time.horas} label="Horas" />
      <span className="mt-3 font-display text-2xl font-bold text-neon-pink/50 md:mt-4 md:text-4xl">
        :
      </span>
      <ReelGroup value={time.minutos} label="Minutos" />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3">
      {srText}
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
        {finished ? "Inscrições abertas" : "Contagem regressiva para inscrições"}
      </p>
      <div className="glass rounded-2xl px-4 py-4 md:px-8 md:py-5">{reels}</div>
    </div>
  );
}
