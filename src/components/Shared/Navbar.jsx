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

  const mainLinks = [
    ["Products", "#products"],
    ["About", "#about"],
    ["Collections", "#collections"],
    ["Bespoke", "#bespoke"],
    ["Showroom", "#showroom"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-[var(--ivory)] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--charcoal)]/95 shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
          scrolled ? "py-4" : "py-6"
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#top" className="leading-none flex-shrink-0">
          <p className="serif block text-xl sm:text-2xl font-extrabold tracking-wide">
            Heaven
          </p>
          <span className="text-[0.5rem] sm:text-[0.54rem] font-bold uppercase tracking-[0.28em] text-[var(--brass)]">
            Furniture Mart
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {mainLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:text-[var(--brass)] line-link"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Icon */}
          <button
            type="button"
            aria-label="Search"
            className="p-2 transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="w-5 h-5"
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

          {/* Cart Icon */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="p-2 transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="w-5 h-5"
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
          <div className="w-px h-5 bg-white/15 mx-2"></div>

          {/* CTA Button */}
          <Button href="#contact">Contact</Button>
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
              className="w-6 h-6"
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
              className="w-6 h-6"
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
        className={`overflow-hidden border-t border-white/15 bg-[var(--charcoal)] px-5 transition-all duration-500 md:hidden ${
          open
            ? "max-h-screen py-6 opacity-100"
            : "max-h-0 border-t-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-1 mb-6">
          {mainLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)] rounded"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="space-y-3 border-t border-white/15 pt-6">
          <button
            type="button"
            aria-label="Search"
            className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="w-5 h-5"
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

          <button
            type="button"
            aria-label="Shopping cart"
            className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors hover:text-[var(--brass)]"
          >
            <svg
              className="w-5 h-5"
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

          <Button href="#contact" className="w-full justify-center">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
