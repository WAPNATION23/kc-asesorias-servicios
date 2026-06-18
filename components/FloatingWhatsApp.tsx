import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56978750692";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border border-[#1A1A1A]/10 bg-[#25D366] text-white transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
