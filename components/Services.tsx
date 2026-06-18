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
    <section id="servicios" className="border-b border-[#1A1A1A]/10 bg-[#F9F8F6]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B8860B]">
            Lo que ofrecemos
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Nuestros Servicios
          </h2>
          <div className="mt-6 h-px w-16 bg-[#000080]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group border border-[#1A1A1A]/10 bg-white p-6 transition-colors hover:border-[#000080]/30"
              >
                <div className="mb-4 inline-flex border border-[#000080]/20 bg-[#000080]/5 p-3">
                  <Icon className="h-6 w-6 text-[#000080]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug text-[#1A1A1A]">
                  {service.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
