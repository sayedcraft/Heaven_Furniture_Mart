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
    const update = () => {
      setScrolled(window.scrollY > 36);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  const mainLinks = [
    ["Products", "/products"],
    ["About", "/about"],
    ["Bespoke", isHomePage ? "#bespoke" : "/"],
    ["Showroom", "/showroom"],
  ];

  const transparentHome = isHomePage && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
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
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {mainLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="line-link text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:text-[var(--brass)]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="p-2 transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="p-2 transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>

          {/* Divider */}
          <div
            className={`mx-2 h-5 w-px ${
              transparentHome
                ? "bg-[var(--ivory)]/15"
                : "bg-[var(--deep-brown)]/10"
            }`}
          />

          {/* Contact */}
          <Button href="/contact">Contact</Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden px-5 transition-all duration-500 md:hidden ${
          open
            ? "max-h-screen border-t border-white/10 py-6 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        } bg-[var(--deep-brown)] text-[var(--ivory)]`}
      >
        <div className="mb-6 space-y-1">
          {mainLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="space-y-3 border-t border-white/15 pt-6">
          {/* Search */}
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>

          {/* Cart */}
          <button
            type="button"
            className="flex w-full items-center gap-3 px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Cart
          </button>

          {/* Contact */}
          <Button className="w-full justify-center">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
