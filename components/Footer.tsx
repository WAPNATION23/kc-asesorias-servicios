import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#000080] text-[#F9F8F6]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold">Contacto</h2>
            <div className="my-6 h-px w-16 bg-[#B8860B]" />

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#F9F8F6]/60">
                    Teléfonos
                  </p>
                  <a
                    href="tel:+56978750692"
                    className="mt-1 block text-base transition-colors hover:text-[#B8860B]"
                  >
                    +56 9 78750692
                  </a>
                  <a
                    href="tel:+56975844185"
                    className="mt-1 block text-base transition-colors hover:text-[#B8860B]"
                  >
                    +56 9 75844185
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#F9F8F6]/60">
                    Correo
                  </p>
                  <a
                    href="mailto:kccapacitaciones@gmail.com"
                    className="mt-1 block text-base transition-colors hover:text-[#B8860B]"
                  >
                    kccapacitaciones@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-10 font-serif text-lg text-[#F9F8F6]/90">
              K&amp;C Asesorías y Servicios
            </p>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="flex h-40 w-40 items-center justify-center border-2 border-dashed border-[#F9F8F6]/30 bg-[#F9F8F6]/5 text-center">
              <span className="px-4 text-sm font-medium uppercase tracking-wider text-[#F9F8F6]/60">
                Código QR WhatsApp
              </span>
            </div>
            <p className="mt-4 max-w-[10rem] text-center text-xs text-[#F9F8F6]/50 lg:text-right">
              Espacio reservado para imagen QR
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#F9F8F6]/10 pt-8 text-center text-sm text-[#F9F8F6]/50">
          <p>
            &copy; {new Date().getFullYear()} K&amp;C Asesorías y Servicios. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
