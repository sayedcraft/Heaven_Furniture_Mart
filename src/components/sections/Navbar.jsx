"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const links = [
    ["About", "#about"],
    ["Collections", "#collections"],
    ["Bespoke", "#bespoke"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 text-[var(--ivory)] transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-[var(--charcoal)]/90 shadow-[0_8px_30px_rgba(0,0,0,.08)] backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${scrolled ? "py-4" : "py-6"}`}
        aria-label="Main navigation"
      >
        <a href="#top" className="leading-none">
          <p className="serif block text-2xl font-extrabold tracking-wide">
            HE<span className='text-yellow-500'>A</span>VEN
          </p>
          <span className="text-[0.54rem] font-bold uppercase tracking-[0.28em] text-[var(--brass)]">
            Furniture Mart
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs transition-colors hover:text-[var(--brass)]"
            >
              {label}
            </a>
          ))}
          <Button href="#contact">Request a Quote</Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="block h-px w-6 bg-current"></span>
          <span className="mt-2 block h-px w-4 bg-current"></span>
        </button>
      </nav>
      <div
        className={`overflow-hidden border-t border-white/15 bg-[var(--charcoal)] px-5 transition-all duration-500 md:hidden ${open ? "max-h-96 py-5 opacity-100" : "max-h-0 border-t-0 py-0 opacity-0"}`}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="block border-b border-white/10 py-3 text-sm"
          >
            {label}
          </a>
        ))}
        <Button href="#contact" className="mt-5 w-full">
          Request a Quote
        </Button>
      </div>
    </header>
  );
}
