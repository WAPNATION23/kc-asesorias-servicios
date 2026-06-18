import Image from "next/image";
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
import GeometricAccent from "./GeometricAccent";
import { withBasePath } from "@/lib/paths";

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
    <section id="servicios" className="relative overflow-hidden border-b border-[#0B2D5B]/10">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-5">
        <div className="relative hidden items-center justify-center bg-white px-8 lg:col-span-2 lg:flex">
          <Image
            src={withBasePath("/logo-kc.png")}
            alt="K&C Asesorías"
            width={280}
            height={140}
            className="relative z-10 h-auto w-full max-w-[220px] object-contain"
          />
          <GeometricAccent className="absolute inset-0 opacity-30" />
        </div>

        <div className="relative bg-[#3B7DC4] px-6 py-16 lg:col-span-3 lg:px-10 lg:py-20">
          <GeometricAccent className="absolute inset-0 opacity-20" />

          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Asesorías y servicios que realizamos
            </h2>
            <div className="my-6 h-px w-16 bg-[#C5A059]" />

            <ul className="space-y-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.title} className="flex items-start gap-3 text-white/95">
                    <span className="mt-2 h-0 w-0 shrink-0 border-y-[5px] border-l-0 border-r-[8px] border-y-transparent border-r-[#C5A059]" />
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" strokeWidth={1.5} />
                      <span className="text-base leading-relaxed">{service.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
