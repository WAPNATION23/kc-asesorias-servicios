import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "K&C Asesorías y Servicios | Excelencia y Compromiso",
  description:
    "Asesoría y servicios con foco en seguridad, certificaciones, excelencia operacional y prevención de riesgos. Cotiza por WhatsApp.",
  openGraph: {
    title: "K&C Asesorías y Servicios",
    description:
      "Excelencia, compromiso y confianza en cada solución. Contáctanos por WhatsApp.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
