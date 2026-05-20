export function MeshBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-neon-pink/40 blur-[140px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full bg-neon-cyan/30 blur-[150px] animate-float-x" />
      <div className="absolute bottom-[-200px] left-1/4 h-[600px] w-[600px] rounded-full bg-neon-violet/35 blur-[160px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-mint/15 blur-[120px]" />
    </div>
  );
}
