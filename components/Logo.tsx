type LogoSize = "sm" | "md" | "lg" | "xl";
type LogoVariant = "default" | "light";

interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  showSubtitle?: boolean;
  className?: string;
}

const sizeStyles: Record<
  LogoSize,
  { mark: string; amp: string; subtitle: string; divider: string }
> = {
  sm: {
    mark: "text-[1.75rem]",
    amp: "text-[1.55rem]",
    subtitle: "text-[0.58rem] tracking-[0.32em]",
    divider: "my-1.5 w-24",
  },
  md: {
    mark: "text-[2.35rem]",
    amp: "text-[2.05rem]",
    subtitle: "text-[0.65rem] tracking-[0.36em]",
    divider: "my-2 w-28",
  },
  lg: {
    mark: "text-[3.75rem] sm:text-[4.25rem]",
    amp: "text-[3.2rem] sm:text-[3.6rem]",
    subtitle: "text-[0.72rem] tracking-[0.4em] sm:text-xs",
    divider: "my-3 w-36",
  },
  xl: {
    mark: "text-[4.5rem] sm:text-[5.5rem]",
    amp: "text-[3.85rem] sm:text-[4.6rem]",
    subtitle: "text-xs tracking-[0.42em] sm:text-sm sm:tracking-[0.45em]",
    divider: "my-4 w-44",
  },
};

export default function Logo({
  size = "md",
  variant = "default",
  showSubtitle = true,
  className = "",
}: LogoProps) {
  const styles = sizeStyles[size];
  const navy = variant === "light" ? "text-white" : "text-[#0B2D5B]";
  const gold = variant === "light" ? "text-[#D4B06A]" : "text-[#B8956A]";
  const dividerTone = variant === "light" ? "bg-[#D4B06A]" : "bg-[#C5A059]";

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div
        className={`flex items-baseline pt-1 leading-none ${styles.mark}`}
        aria-label="K&C Asesorías"
      >
        <span className={`font-serif font-bold ${navy}`}>K</span>
        <span
          className={`logo-amp relative -mx-[0.02em] -mb-[0.04em] inline-block ${styles.amp} ${gold}`}
          aria-hidden="true"
        >
          &amp;
        </span>
        <span className={`font-serif font-bold ${navy}`}>C</span>
      </div>

      {showSubtitle && (
        <>
          <div className={`relative h-px ${styles.divider}`}>
            <div className={`absolute inset-0 ${dividerTone}`} />
            <div
              className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 ${dividerTone}`}
            />
          </div>
          <p className={`font-sans font-medium uppercase ${styles.subtitle} ${navy}`}>
            Asesorías
          </p>
        </>
      )}
    </div>
  );
}
