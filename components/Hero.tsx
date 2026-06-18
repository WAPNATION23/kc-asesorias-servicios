import Logo from "./Logo";
import GeometricAccent from "./GeometricAccent";

const highlights = [
  "Certificaciones y líneas de mando",
  "Excelencia operacional en terreno",
  "Prevención de riesgos y BHP",
];

export default function Hero() {
  return (
    <section id="inicio" className="section-shell relative overflow-hidden section-paper">
      <GeometricAccent className="absolute inset-y-0 right-0 hidden w-24 lg:block" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="mb-8 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[#B8956A]">
            Consultora profesional
          </p>

          <Logo size="xl" />

          <p className="mt-10 font-serif text-2xl leading-snug text-[#0B2D5B] sm:text-[1.65rem]">
            Excelencia, compromiso y confianza en cada solución.
          </p>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#1A1A1A]/70">
            Asesoría y servicios orientados a la seguridad, el cumplimiento y la
            eficiencia operacional de su empresa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-block border border-[#0B2D5B] bg-[#0B2D5B] px-8 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#082447]"
            >
              Cotiza con nosotros
            </a>
            <a
              href="#servicios"
              className="inline-block border border-[#0B2D5B]/25 px-8 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#0B2D5B] transition-colors hover:border-[#0B2D5B]"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="border-t border-[#0B2D5B]/10 pt-10 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#1A1A1A]/45">
            Áreas de especialización
          </p>
          <ul className="space-y-0">
            {highlights.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-[#0B2D5B]/8 py-5 first:pt-0 last:border-b-0"
              >
                <span className="mt-1 font-serif text-sm text-[#B8956A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg leading-snug text-[#0B2D5B]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
