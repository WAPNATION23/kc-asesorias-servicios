export default function SectionHeading({
  label,
  title,
  align = "left",
  light = false,
}: {
  label: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-12 flex flex-col ${alignClass}`}>
      <p
        className={`mb-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] ${
          light ? "text-[#D4B06A]" : "text-[#B8956A]"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-[#0B2D5B]"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 h-px w-14 ${light ? "bg-[#D4B06A]" : "bg-[#C5A059]"}`} />
    </div>
  );
}
