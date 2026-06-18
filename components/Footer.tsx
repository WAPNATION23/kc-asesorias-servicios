import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { withBasePath } from "@/lib/paths";
import {
  EMAIL,
  PHONE_SECONDARY,
  PHONE_SECONDARY_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

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
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg transition-colors hover:text-[#D4B06A]"
                  >
                    {WHATSAPP_DISPLAY}
                    <span className="mt-1 block text-sm text-white/55">WhatsApp principal</span>
                  </a>
                  <a
                    href={`tel:${PHONE_SECONDARY_TEL}`}
                    className="mt-3 block text-lg transition-colors hover:text-[#D4B06A]"
                  >
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#D4B06A]" strokeWidth={1.5} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-lg transition-colors hover:text-[#D4B06A]"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-[#D4B06A]/40 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-[#D4B06A] hover:text-[#D4B06A]"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp de K&C Asesorías"
              className="border border-white/20 bg-white p-3 transition-colors hover:border-[#D4B06A]/50"
            >
              <Image
                src={withBasePath("/whatsapp-qr.png")}
                alt="Código QR WhatsApp K&C Asesorías"
                width={176}
                height={176}
                className="h-44 w-44 object-contain"
              />
            </a>
            <p className="mt-4 max-w-[12rem] text-center text-sm text-white/70 lg:text-right">
              Escanea el código para contactarnos por WhatsApp
            </p>
            <p className="mt-1 text-center text-xs text-white/45 lg:text-right">
              {WHATSAPP_DISPLAY}
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
