import { Award, BarChart3, Handshake, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GeometricAccent from "./GeometricAccent";

interface AboutBlock {
  icon: LucideIcon;
  text: string;
}

const blocks: AboutBlock[] = [
  {
    icon: Handshake,
    text: "En K&C Asesorías y Servicios nos dedicamos a brindar soluciones integrales de asesoría y servicios, orientadas a satisfacer las necesidades de empresas y clientes que buscan respaldo profesional, eficiencia operativa y altos estándares de calidad.",
  },
  {
    icon: Award,
    text: "Nuestra organización nace con el propósito de entregar un servicio confiable, serio y comprometido, basado en la excelencia, la responsabilidad y la mejora continua. Trabajamos con una visión enfocada en generar relaciones sólidas y duraderas con nuestros clientes, aportando soluciones adaptadas a cada requerimiento y contribuyendo al desarrollo eficiente de sus operaciones.",
  },
  {
    icon: Settings,
    text: "Contamos con un equipo orientado al cumplimiento, la seguridad y la optimización de procesos, manteniendo siempre una atención cercana y personalizada. Cada proyecto representa para nosotros una oportunidad de demostrar nuestro compromiso con la calidad, la confianza y el profesionalismo que distinguen a nuestra empresa.",
  },
  {
    icon: BarChart3,
    text: "En K&C Asesorías y Servicios, entendemos que la confianza se construye con resultados, por ello enfocamos nuestro trabajo en ofrecer soluciones eficientes, oportunas y alineadas con las necesidades del mercado actual.",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="relative overflow-hidden border-b border-[#0B2D5B]/10 bg-[#E8F2FC]/40">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <span className="font-serif text-[12rem] font-bold text-[#0B2D5B]">K&amp;C</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#C5A059]">
            Nuestra Empresa
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#0B2D5B] sm:text-4xl">
            Quiénes Somos
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C5A059]" />
        </div>

        <div className="space-y-5">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.text.slice(0, 40)}
                className="flex gap-5 border border-[#3B7DC4]/20 bg-white/90 p-6 sm:gap-6 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#0B2D5B]/15 bg-[#E8F2FC]">
                  <Icon className="h-7 w-7 text-[#0B2D5B]" strokeWidth={1.5} />
                </div>
                <p className="text-base leading-[1.85] text-[#1A1A1A]/85 sm:text-lg">
                  {block.text}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center font-serif text-xl font-semibold text-[#0B2D5B]">
          K&amp;C Asesorías y Servicios — Excelencia, compromiso y confianza en cada solución.
        </p>
      </div>

      <GeometricAccent className="absolute inset-y-0 right-0 w-48 opacity-60" />
    </section>
  );
}
