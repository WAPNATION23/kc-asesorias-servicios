export default function GeometricAccent({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <div className="absolute right-0 top-0 h-full w-px bg-[#0B2D5B]/10" />
      <div className="absolute right-12 top-16 h-32 w-px bg-[#C5A059]/30" />
    </div>
  );
}
