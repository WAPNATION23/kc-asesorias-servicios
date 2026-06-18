import {
  Award,
  Users,
  Target,
  HardHat,
  Compass,
  ShieldCheck,
  ClipboardCheck,
  MessageSquare,
  Wrench,
  UserPlus,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Service {
  title: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Preparación de personal para certificaciones (CEIM, VIAL, ETC)",
    icon: Award,
  },
  {
    title: "Preparación y seguimiento de líneas de mando",
    icon: Users,
  },
  {
    title: "Soluciones para excelencia operacional",
    icon: Target,
  },
  {
    title: "Supervisores de levante e izaje",
    icon: HardHat,
  },
  {
    title: "Liderazgo en terreno",
    icon: Compass,
  },
  {
    title: "Prevención de riesgos",
    icon: ShieldCheck,
  },
  {
    title: "Evaluación de competencias laborales",
    icon: ClipboardCheck,
  },
  {
    title: "Comunicación efectiva",
    icon: MessageSquare,
  },
  {
    title: "Asesoría con herramientas preventivas BHP",
    icon: Wrench,
  },
  {
    title: "Contratación de personal nuevo",
    icon: UserPlus,
  },
  {
    title: "Adaptación a necesidades de su empresa y más",
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-shell bg-[#0B2D5B] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          label="Lo que ofrecemos"
          title="Asesorías y servicios que realizamos"
          light
        />

        <ul className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="flex items-start gap-4 border-b border-white/10 px-0 py-5 sm:px-4"
              >
                <span className="mt-1 font-serif text-sm text-[#D4B06A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#D4B06A]" strokeWidth={1.5} />
                  <span className="text-base leading-relaxed text-white/92">
                    {service.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
