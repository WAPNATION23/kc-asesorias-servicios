export default function GeometricAccent({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden ${className}`}
    >
      <div className="absolute -right-8 top-0 h-64 w-64 rotate-12 bg-[#4A90D9]/20" />
      <div className="absolute right-16 top-20 h-48 w-48 -rotate-6 bg-[#1A4A7A]/25" />
      <div className="absolute right-4 top-40 h-56 w-56 rotate-45 bg-[#6BA3DB]/15" />
      <div className="absolute -right-4 bottom-8 h-40 w-40 -rotate-12 bg-[#0B2D5B]/10" />
    </div>
  );
}
