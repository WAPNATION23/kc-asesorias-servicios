import Image from "next/image";
import { Briefcase, Shield, Handshake, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    <section id="valores" className="border-b border-[#0B2D5B]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="hidden justify-center lg:flex">
            <Image
              src="/logo-kc.png"
              alt="K&C Asesorías"
              width={280}
              height={140}
              className="h-auto w-full max-w-[240px] object-contain"
            />
          </div>

          <div>
            <p className="mb-6 text-base leading-[1.85] text-[#1A1A1A]/85 sm:text-lg">
              En K&amp;C Asesorías y Servicios entregamos soluciones integrales con
              compromiso, responsabilidad y excelencia. Nos especializamos en asesorías
              y servicios orientados a brindar confianza, eficiencia y calidad en cada
              proyecto.
            </p>

            <ul className="space-y-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.title} className="flex items-center gap-4">
                    <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#3B7DC4]" />
                    <Icon className="h-5 w-5 text-[#0B2D5B]" strokeWidth={1.5} />
                    <span className="font-serif text-xl font-semibold text-[#0B2D5B]">
                      {value.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 border-t border-[#0B2D5B]/10 pt-8">
              <p className="font-serif text-xl font-bold text-[#0B2D5B]">
                K&amp;C Asesorías y Servicios
              </p>
              <p className="mt-2 text-[#1A1A1A]/75">
                Compromiso y confianza en cada solución.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
