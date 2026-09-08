"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mainLinks = [
    ["Products", "/products"],
    ["About", "/about"],
    ["Bespoke", "/#bespoke"],
    ["Showroom", "/showroom"],
    ["Delivery", "/delivery"],
  ];

  const transparentHome = isHomePage && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparentHome
          ? "bg-transparent text-[var(--ivory)]"
          : "border-b border-[var(--deep-brown)]/10 bg-[var(--ivory)]/95 text-[var(--deep-brown)] shadow-[0_8px_30px_rgba(48,41,35,.08)] backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
          scrolled ? "py-4" : "py-6"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={() => {
            setOpen(false);

            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }, 100);
          }}
          className="group flex-shrink-0 leading-none"
        >
          <span
            className={`serif block text-4xl font-bold leading-none tracking-wide transition-colors duration-300 ${
              transparentHome
                ? "text-[var(--ivory)]"
                : "text-[var(--deep-brown)]"
            } group-hover:text-[var(--brass)]`}
          >
            HE<span className="text-[var(--brass)]">A</span>VEN
          </span>
          <span className="text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[var(--brass)] sm:text-[0.54rem]">
            Furniture Mart
          </span>
        </Link>
        <div className="hidden items-center gap-12 lg:flex">
          {mainLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
        line-link
        text-[0.78rem]
        font-semibold
        uppercase
        tracking-[0.16em]
        transition-all
        duration-300
        hover:-translate-y-[1px]
        hover:text-[var(--brass)]
      "
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button
            href="/contact"
            className="
      border
      border-[var(--brass)]
      bg-[var(--brass)]
      px-6
      py-3
      text-sm
      font-semibold
      uppercase
      tracking-[0.12em]
      text-white
      shadow-[0_4px_15px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-transparent
      hover:text-[var(--brass)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
    "
          >
            Contact
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-[var(--deep-brown)] px-5 text-[var(--ivory)] transition-all duration-500 md:hidden ${
          open
            ? "max-h-screen border-t border-white/10 py-6 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <div className="mb-6 space-y-1">
          {mainLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-[var(--brass)]"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="space-y-3 border-t border-white/15 pt-6">
          <Button href="/contact" className="w-full justify-center">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
