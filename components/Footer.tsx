import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { withBasePath } from "@/lib/paths";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-[#0B2D5B] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src={withBasePath("/logo-kc.png")}
              alt="K&C Asesorías"
              width={200}
              height={100}
              className="mb-8 h-auto w-full max-w-[180px] brightness-0 invert"
            />

            <h2 className="font-serif text-2xl font-bold uppercase tracking-widest">
              Cotiza con nosotros
            </h2>
            <div className="my-6 h-px w-16 bg-[#C5A059]" />

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" strokeWidth={1.5} />
                <div>
                  <a
                    href="tel:+56978750692"
                    className="block text-lg transition-colors hover:text-[#C5A059]"
                  >
                    +56 9 78750692
                  </a>
                  <a
                    href="tel:+56975844185"
                    className="mt-1 block text-lg transition-colors hover:text-[#C5A059]"
                  >
                    +56 9 75844185
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" strokeWidth={1.5} />
                <a
                  href="mailto:kccapacitaciones@gmail.com"
                  className="text-lg transition-colors hover:text-[#C5A059]"
                >
                  kccapacitaciones@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="flex h-40 w-40 items-center justify-center border-2 border-dashed border-white/30 bg-white/5 text-center">
              <span className="px-4 text-sm font-medium uppercase tracking-wider text-white/60">
                Código QR WhatsApp
              </span>
            </div>
            <p className="mt-4 max-w-[10rem] text-center text-xs text-white/50 lg:text-right">
              Espacio reservado para imagen QR
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} K&amp;C Asesorías y Servicios. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
