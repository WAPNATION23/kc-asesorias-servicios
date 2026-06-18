import SectionHeading from "./SectionHeading";

const paragraphs = [
  "En K&C Asesorías y Servicios nos dedicamos a brindar soluciones integrales de asesoría y servicios, orientadas a satisfacer las necesidades de empresas y clientes que buscan respaldo profesional, eficiencia operativa y altos estándares de calidad.",
  "Nuestra organización nace con el propósito de entregar un servicio confiable, serio y comprometido, basado en la excelencia, la responsabilidad y la mejora continua. Trabajamos con una visión enfocada en generar relaciones sólidas y duraderas con nuestros clientes, aportando soluciones adaptadas a cada requerimiento y contribuyendo al desarrollo eficiente de sus operaciones.",
  "Contamos con un equipo orientado al cumplimiento, la seguridad y la optimización de procesos, manteniendo siempre una atención cercana y personalizada. Cada proyecto representa para nosotros una oportunidad de demostrar nuestro compromiso con la calidad, la confianza y el profesionalismo que distinguen a nuestra empresa.",
  "En K&C Asesorías y Servicios, entendemos que la confianza se construye con resultados, por ello enfocamos nuestro trabajo en ofrecer soluciones eficientes, oportunas y alineadas con las necesidades del mercado actual.",
];

export default function About() {
  return (
    <section id="quienes-somos" className="section-shell section-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:pt-2">
            <SectionHeading label="Nuestra Empresa" title="Quiénes Somos" />
          </div>

          <div className="lg:col-span-8">
            <div className="border-l border-[#0B2D5B]/15 pl-8 sm:pl-10">
              <div className="editorial-columns space-y-6 text-base leading-[1.95] text-[#1A1A1A]/82 sm:text-[1.05rem]">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <p className="mt-10 border-t border-[#0B2D5B]/10 pt-8 font-serif text-xl text-[#0B2D5B]">
              K&amp;C Asesorías y Servicios — Excelencia, compromiso y confianza en
              cada solución.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
