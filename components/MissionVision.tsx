export default function MissionVision() {
  return (
    <section className="border-b border-[#1A1A1A]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B8860B]">
            Propósito
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Misión y Visión
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#000080]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="border border-[#1A1A1A]/10 bg-[#F9F8F6] p-8 sm:p-10">
            <h3 className="font-serif text-2xl font-bold text-[#000080]">Misión</h3>
            <div className="my-4 h-px w-12 bg-[#B8860B]" />
            <p className="text-base leading-[1.85] text-[#1A1A1A]/85">
              Brindar soluciones integrales de asesoría y servicios con altos
              estándares de calidad, seguridad y eficiencia, orientadas a satisfacer
              las necesidades de nuestros clientes mediante un trabajo responsable,
              profesional y comprometido con la excelencia operativa y la mejora
              continua.
            </p>
          </article>

          <article className="border border-[#1A1A1A]/10 bg-[#F9F8F6] p-8 sm:p-10">
            <h3 className="font-serif text-2xl font-bold text-[#000080]">Visión</h3>
            <div className="my-4 h-px w-12 bg-[#B8860B]" />
            <p className="text-base leading-[1.85] text-[#1A1A1A]/85">
              Ser una empresa reconocida a nivel nacional por la calidad de nuestros
              servicios, la confianza entregada a nuestros clientes y nuestro
              compromiso con la innovación, el cumplimiento y el desarrollo de
              soluciones eficientes que aporten valor y crecimiento sostenible a
              cada proyecto.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
