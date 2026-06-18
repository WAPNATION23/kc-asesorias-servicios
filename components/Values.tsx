import { Briefcase, Shield, Handshake, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "./Logo";
import SectionHeading from "./SectionHeading";

interface Value {
  title: string;
  icon: LucideIcon;
}

const values: Value[] = [
  { title: "Profesionalismo", icon: Briefcase },
  { title: "Seguridad", icon: Shield },
  { title: "Compromiso", icon: Handshake },
  { title: "Soluciones eficientes", icon: Zap },
];

export default function Values() {
  return (
    <section id="valores" className="section-shell section-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <Logo size="lg" className="mb-10 hidden lg:flex" />
            <SectionHeading label="Nuestros pilares" title="Valores" />
            <p className="max-w-md text-base leading-[1.9] text-[#1A1A1A]/78">
              En K&amp;C Asesorías y Servicios entregamos soluciones integrales con
              compromiso, responsabilidad y excelencia. Nos especializamos en asesorías
              y servicios orientados a brindar confianza, eficiencia y calidad en cada
              proyecto.
            </p>
          </div>

          <div>
            <ul className="divide-y divide-[#0B2D5B]/10 border-y border-[#0B2D5B]/10">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.title} className="flex items-center gap-4 py-5">
                    <Icon className="h-5 w-5 shrink-0 text-[#B8956A]" strokeWidth={1.5} />
                    <span className="font-serif text-xl text-[#0B2D5B]">
                      {value.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 border-l-2 border-[#C5A059] pl-6">
              <p className="font-serif text-xl font-bold text-[#0B2D5B]">
                K&amp;C Asesorías y Servicios
              </p>
              <p className="mt-2 text-[#1A1A1A]/70">
                Compromiso y confianza en cada solución.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
