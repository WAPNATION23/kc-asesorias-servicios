"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { withBasePath } from "@/lib/paths";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Valores", href: "#valores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#0B2D5B]/10 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <Image
            src={withBasePath("/logo-kc.png")}
            alt="K&C Asesorías y Servicios"
            width={140}
            height={70}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-[#1A1A1A]/75 transition-colors hover:text-[#0B2D5B]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-[#0B2D5B]/20 p-2 text-[#0B2D5B] md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#0B2D5B]/10 bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-[#0B2D5B]/5 py-3 text-sm font-medium uppercase tracking-widest text-[#1A1A1A]/75 transition-colors hover:text-[#0B2D5B]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
