import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#082447] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Logo size="md" variant="light" className="mb-10" />

            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.12em]">
              Cotiza con nosotros
            </h2>
            <div className="my-6 h-px w-14 bg-[#D4B06A]" />

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#D4B06A]" strokeWidth={1.5} />
                <div>
                  <a
                    href="tel:+56978750692"
                    className="block text-lg transition-colors hover:text-[#D4B06A]"
                  >
                    +56 9 78750692
                  </a>
                  <a
                    href="tel:+56975844185"
                    className="mt-1 block text-lg transition-colors hover:text-[#D4B06A]"
                  >
                    +56 9 75844185
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#D4B06A]" strokeWidth={1.5} />
                <a
                  href="mailto:kccapacitaciones@gmail.com"
                  className="text-lg transition-colors hover:text-[#D4B06A]"
                >
                  kccapacitaciones@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="flex h-40 w-40 items-center justify-center border border-dashed border-white/25 bg-white/5 text-center">
              <span className="px-4 text-sm font-medium uppercase tracking-wider text-white/55">
                Código QR WhatsApp
              </span>
            </div>
            <p className="mt-4 max-w-[10rem] text-center text-xs text-white/45 lg:text-right">
              Espacio reservado para imagen QR
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/45">
          <p>
            &copy; {new Date().getFullYear()} K&amp;C Asesorías y Servicios. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
