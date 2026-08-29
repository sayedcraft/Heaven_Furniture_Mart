"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { images } from "@/components/data";

const heroImages = [images.hero1, images.hero2, images.hero3];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-[var(--charcoal)] text-[var(--ivory)] sm:min-h-[760px] lg:min-h-[820px]"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 transition-all duration-[1600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
              index === activeIndex
                ? "translate-x-0 scale-100 opacity-100"
                : index < activeIndex
                  ? "-translate-x-[8%] scale-[1.04] opacity-0"
                  : "translate-x-[8%] scale-[1.04] opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="Heaven Furniture Mart premium furniture interior"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Main Dark Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,42,43,.93)_0%,rgba(18,42,43,.72)_32%,rgba(18,42,43,.35)_65%,rgba(18,42,43,.12)_100%)]" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">

          {/* Main Heading */}
          <h1 className="serif max-w-2xl text-[3.7rem] leading-[0.9] tracking-[-0.025em] sm:text-7xl lg:text-[5.5rem]">
            Furniture,
            <br />

            <em className="font-normal text-[var(--brass)]">
              crafted
            </em>{" "}
            around you.
          </h1>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-7 sm:mt-9">
            <Button href="/collections">
              Explore Collection
            </Button>

            <Link
              href="/bespoke"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:text-[var(--brass)]"
            >
              Start a Custom Design

              <span className="ml-3 text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-7 right-5 z-10 flex items-center gap-4 sm:right-8 lg:right-12">
        <div className="flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-[2px] transition-all duration-500 ${
                index === activeIndex
                  ? "w-10 bg-[var(--brass)]"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <span className="hidden text-[0.55rem] uppercase tracking-[0.2em] text-white/50 sm:block">
          0{activeIndex + 1} / 0{heroImages.length}
        </span>
      </div>

      {/* Location */}
      <div className="absolute bottom-7 left-5 z-10 hidden text-[0.55rem] uppercase tracking-[0.2em] text-white/50 sm:block lg:left-12">
        <span className="text-[var(--brass)]">Since 2020</span>

        <span className="mx-2">·</span>

        Chattogram, Bangladesh
      </div>
    </section>
  );
}