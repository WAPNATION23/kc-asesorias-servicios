export default function About() {
  return (
    <section id="quienes-somos" className="border-b border-[#1A1A1A]/10 bg-[#F9F8F6]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B8860B]">
              Nuestra Empresa
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              Quiénes Somos
            </h2>
            <div className="mt-6 h-px w-16 bg-[#000080]" />
          </div>

          <div className="lg:col-span-8">
            <div className="border-l-2 border-[#000080]/20 pl-8">
              <p className="text-base leading-[1.9] text-[#1A1A1A]/85 sm:text-lg">
                En K&amp;C Asesorías y Servicios nos dedicamos a brindar soluciones
                integrales de asesoría y servicios, orientadas a satisfacer las
                necesidades de empresas y clientes que buscan respaldo profesional,
                eficiencia operativa y altos estándares de calidad. Nuestra
                organización nace con el propósito de entregar un servicio confiable,
                serio y comprometido, basado en la excelencia, la responsabilidad y
                la mejora continua.
              </p>
              <p className="mt-6 text-base leading-[1.9] text-[#1A1A1A]/85 sm:text-lg">
                Trabajamos con una visión enfocada en generar relaciones sólidas y
                duraderas con nuestros clientes, aportando soluciones adaptadas a
                cada requerimiento y contribuyendo al desarrollo eficiente de sus
                operaciones. Contamos con un equipo orientado al cumplimiento, la
                seguridad y la optimización de procesos, manteniendo siempre una
                atención cercana y personalizada.
              </p>
              <p className="mt-6 text-base leading-[1.9] text-[#1A1A1A]/85 sm:text-lg">
                Cada proyecto representa para nosotros una oportunidad de demostrar
                nuestro compromiso con la calidad, la confianza y el profesionalismo
                que distinguen a nuestra empresa. Entendemos que la confianza se
                construye con resultados, por ello enfocamos nuestro trabajo en
                ofrecer soluciones eficientes, oportunas y alineadas con las
                necesidades del mercado actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
