import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56978750692";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-[#0B2D5B]/15 bg-[#1F7A45] text-white transition-colors hover:bg-[#186338] sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
