"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Réservation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/privatisation", label: "Privatisation" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-heading text-xl font-semibold text-accent">
          Sakura
        </Link>
        <button
          type="button"
          className="md:hidden text-accent p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <div className={`absolute md:static top-16 left-0 right-0 bg-primary md:bg-transparent ${open ? "block" : "hidden md:flex"} md:flex gap-1`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block md:inline px-4 py-3 md:py-2 text-sm font-medium rounded md:rounded-lg transition-colors ${pathname === href ? "text-secondary bg-white/10" : "text-accent/90 hover:text-accent hover:bg-white/5"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
