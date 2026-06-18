import SectionHeading from "./SectionHeading";

export default function MissionVision() {
  return (
    <section className="section-shell section-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading label="Propósito" title="Misión y Visión" align="center" />

        <div className="grid gap-8 md:grid-cols-2">
          <article className="border border-[#0B2D5B]/10 bg-[#FDFCF9] p-8 sm:p-10">
            <div className="mb-6 h-px w-full bg-[#C5A059]" />
            <h3 className="font-serif text-2xl font-bold text-[#0B2D5B]">Misión</h3>
            <p className="mt-5 text-base leading-[1.9] text-[#1A1A1A]/80">
              En K&amp;C Asesorías y Servicios nuestra misión es brindar soluciones
              integrales de asesoría y servicios con altos estándares de calidad,
              seguridad y eficiencia, orientadas a satisfacer las necesidades de
              nuestros clientes mediante un trabajo responsable, profesional y
              comprometido con excelencia operativa y mejora continua.
            </p>
          </article>

          <article className="border border-[#0B2D5B]/10 bg-[#FDFCF9] p-8 sm:p-10">
            <div className="mb-6 h-px w-full bg-[#C5A059]" />
            <h3 className="font-serif text-2xl font-bold text-[#0B2D5B]">Visión</h3>
            <p className="mt-5 text-base leading-[1.9] text-[#1A1A1A]/80">
              Ser una empresa reconocida a nivel nacional por la calidad de nuestros
              servicios, confianza entregada a nuestros clientes y nuestro compromiso
              con la innovación, el cumplimiento y el desarrollo de soluciones
              eficientes que aporten valor y crecimiento sostenible a cada proyecto.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
