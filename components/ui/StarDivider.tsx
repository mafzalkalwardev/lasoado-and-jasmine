export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold" />
      <span className="tracking-[0.45em] text-[10px]">★★★★★</span>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
