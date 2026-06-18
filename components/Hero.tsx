import Image from "next/image";
import GeometricAccent from "./GeometricAccent";
import { withBasePath } from "@/lib/paths";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-[#0B2D5B]/10 bg-white">
      <GeometricAccent className="absolute inset-y-0 right-0 w-1/3" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <Image
            src={withBasePath("/logo-kc.png")}
            alt="K&C Asesorías y Servicios"
            width={420}
            height={210}
            className="mb-8 h-auto w-full max-w-sm object-contain"
            priority
          />
          <div className="brand-divider mb-8 max-w-xs" />
          <p className="max-w-lg text-lg leading-relaxed text-[#1A1A1A]/80 sm:text-xl">
            Excelencia, compromiso y confianza en cada solución.
          </p>
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-block bg-[#3B7DC4] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#0B2D5B]"
            >
              Cotiza con nosotros
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="overflow-hidden border border-[#0B2D5B]/10">
            <Image
              src={withBasePath("/hero-contact.jpg")}
              alt="Servicios industriales K&C Asesorías"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
