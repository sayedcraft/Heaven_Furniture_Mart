
"use client";

import { useEffect, useState } from "react";

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 3.5 seconds
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3500);

    // Completely remove the welcome screen after 4.2 seconds
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 4200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-depth text-bone transition-all duration-700 ${
        exiting
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/[0.04] blur-[120px]" />
      </div>

      {/* Content */}
      <div
        className={`relative flex flex-col items-center px-6 text-center transition-all duration-1000 ${
          exiting
            ? "translate-y-[-20px] opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* Small line */}
        <div className="mb-7 flex items-center gap-4">
          <span className="h-px w-8 bg-brass/70 sm:w-12" />

          <span className="text-[0.58rem] uppercase tracking-[0.4em] text-brass sm:text-[0.65rem]">
            Est. 2000
          </span>

          <span className="h-px w-8 bg-brass/70 sm:w-12" />
        </div>

        {/* Brand */}
        <h1 className="font-heading text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Heaven<span className="text-brass">.</span>
        </h1>

        {/* Furniture */}
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.42em] text-bone/55 sm:text-xs">
          Furniture Mart
        </p>

        {/* Divider */}
        <div className="my-8 h-px w-12 bg-brass/50" />

        {/* Welcome */}
        <p className="font-heading text-xl font-light italic text-bone/80 sm:text-2xl md:text-3xl">
          Welcome to Heaven Furniture
        </p>

        {/* Location */}
        <p className="mt-4 text-[0.58rem] uppercase tracking-[0.28em] text-bone/35 sm:text-[0.65rem]">
          Chattogram · Bangladesh
        </p>

        {/* Loading indicator */}
        <div className="mt-10 h-px w-24 overflow-hidden bg-bone/10">
          <div className="h-full w-full origin-left animate-[welcomeProgress_3.5s_linear_forwards] bg-brass" />
        </div>
      </div>
    </div>
  );
}

