import Image from "next/image";
import GeometricAccent from "./GeometricAccent";
import { withBasePath } from "@/lib/paths";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden border-b border-[#0B2D5B]/10 bg-white">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="relative flex items-center justify-center bg-white px-6 py-16 lg:px-12 lg:py-24">
          <Image
            src={withBasePath("/logo-kc.png")}
            alt="K&C Asesorías"
            width={360}
            height={180}
            className="relative z-10 h-auto w-full max-w-xs object-contain"
          />
          <GeometricAccent className="absolute inset-0 opacity-40" />
        </div>

        <div className="relative bg-[#3B7DC4] px-6 py-16 text-white lg:px-12 lg:py-24">
          <GeometricAccent className="absolute inset-0 opacity-30" />

          <div className="relative space-y-10">
            <article>
              <h3 className="font-serif text-2xl font-bold">Misión</h3>
              <div className="my-4 h-px w-12 bg-[#C5A059]" />
              <p className="text-base leading-[1.85] text-white/95">
                En K&amp;C Asesorías y Servicios nuestra misión es brindar soluciones
                integrales de asesoría y servicios con altos estándares de calidad,
                seguridad y eficiencia, orientadas a satisfacer las necesidades de
                nuestros clientes mediante un trabajo responsable, profesional y
                comprometido con excelencia operativa y mejora continua.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-2xl font-bold">Visión</h3>
              <div className="my-4 h-px w-12 bg-[#C5A059]" />
              <p className="text-base leading-[1.85] text-white/95">
                Ser una empresa reconocida a nivel nacional por la calidad de nuestros
                servicios, confianza entregada a nuestros clientes y nuestro compromiso
                con la innovación, el cumplimiento y el desarrollo de soluciones
                eficientes que aporten valor y crecimiento sostenible a cada proyecto.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
