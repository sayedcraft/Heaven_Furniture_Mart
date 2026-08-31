"use client";

import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    const closeTimer = setTimeout(() => {
      setAnimate(false);
    }, 2800);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--deep-brown)] px-6 transition-opacity duration-700 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center text-white">
        {/* Brand */}
        <div
          className={`transition-all duration-1000 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="text-[var(--brass)]">Heaven Furniture Mart</span>
          </div>
        </div>

        {/* Gold line */}
        <div
          className={`mx-auto my-8 h-px bg-[var(--brass)] transition-all duration-1000 delay-300 ${
            animate ? "w-16 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Tagline */}
        <p
          className={`text-[9px] uppercase tracking-[0.35em] text-white/60 transition-all duration-1000 delay-500 sm:text-[10px] ${
            animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Designed · Crafted · Customized
        </p>
      </div>
    </div>
  );
}
