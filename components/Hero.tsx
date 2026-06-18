export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative border-b border-[#1A1A1A]/10 bg-[#F9F8F6]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#B8860B]">
            Consultora Profesional
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            K&amp;C Asesorías y Servicios
          </h1>
          <div className="my-8 h-px w-24 bg-[#000080]" />
          <p className="max-w-xl text-lg leading-relaxed text-[#1A1A1A]/80 sm:text-xl">
            Excelencia, compromiso y confianza en cada solución.
          </p>
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-block border border-[#000080] bg-[#000080] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#F9F8F6] transition-colors hover:bg-[#000066] hover:border-[#000066]"
            >
              Cotiza con nosotros
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden h-full w-1/3 border-l border-[#1A1A1A]/5 bg-[#000080]/[0.03] lg:block" />
    </section>
  );
}
