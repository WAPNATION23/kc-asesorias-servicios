import { Briefcase, Shield, Handshake, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

const values: Value[] = [
  {
    title: "Profesionalismo",
    description:
      "Actuamos con rigor, ética y conocimiento especializado en cada proyecto que emprendemos.",
    icon: Briefcase,
  },
  {
    title: "Seguridad",
    description:
      "Priorizamos la protección de las personas y el cumplimiento de los más altos estándares.",
    icon: Shield,
  },
  {
    title: "Compromiso",
    description:
      "Asumimos cada desafío con responsabilidad y dedicación hacia nuestros clientes.",
    icon: Handshake,
  },
  {
    title: "Soluciones eficientes",
    description:
      "Entregamos resultados oportunos, adaptados y orientados al valor real del negocio.",
    icon: Zap,
  },
];

export default function Values() {
  return (
    <section id="valores" className="border-b border-[#1A1A1A]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B8860B]">
            Nuestros Pilares
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Valores
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#000080]" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="border-t-2 border-[#000080] bg-[#F9F8F6] px-6 py-8 text-center"
              >
                <div className="mx-auto mb-5 inline-flex border border-[#B8860B]/30 p-3">
                  <Icon className="h-7 w-7 text-[#B8860B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/75">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
