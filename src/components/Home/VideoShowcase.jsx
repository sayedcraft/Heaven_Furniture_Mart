"use client";

import Reveal from "@/components/ui/Reveal";
import { useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="video-showcase"
      className="video-section relative overflow-hidden bg-[var(--charcoal)]"
      aria-label="Brand experience video"
    >
      {/* Cinematic video container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/image/Livingroom.jpg"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/brand.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Architectural border frame */}
        <div className="pointer-events-none absolute inset-5 border border-white/10 sm:inset-8 lg:inset-10" />

        {/* Main editorial content */}
        <Reveal
          delay={180}
          className="absolute bottom-8 left-6 z-10 text-white sm:bottom-14 sm:left-12 sm:max-w-xl lg:bottom-20 lg:left-16"
        >
          {/* Desktop / Tablet only */}
          <span className="eyebrow mb-5 hidden text-white/70 sm:block">
            Brand experience
          </span>

          {/* Visible on mobile + desktop */}
          <h2 className="serif text-4xl leading-[0.9] sm:text-6xl lg:text-7xl">
            Furniture
            <br />
            <em className="font-normal text-[var(--brass)]">
              crafted for life.
            </em>
          </h2>

          {/* Desktop / Tablet only */}
          <p className="mt-6 hidden max-w-md text-sm leading-7 text-white/70 sm:block sm:mt-7">
            Every piece we create is born from the belief that furniture
            should fit you — your space, your rhythm, your story. Come
            experience it in person at our Agrabad showroom.
          </p>
        </Reveal>

        {/* Mute / Unmute toggle */}
        <div className="absolute bottom-6 right-6 z-10 sm:bottom-14 sm:right-12 lg:bottom-20 lg:right-16">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="group flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-[var(--brass)]/50 hover:text-[var(--brass)]"
          >
            {/* Speaker icon */}
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {muted ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.536 8.464a5 5 0 010 7.072M12 6v12M9 8.464a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              )}
            </svg>

            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>

        {/* Right side vertical text — desktop only */}
        <Reveal
          delay={300}
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        >
          <div className="flex flex-col items-center gap-5">
            <span className="h-14 w-px bg-white/20" />

            <span
              className="text-[0.5rem] uppercase tracking-[0.3em] text-white/40"
              style={{ writingMode: "vertical-rl" }}
            >
              Crafted in Chattogram
            </span>

            <span className="h-14 w-px bg-[var(--brass)]/50" />
          </div>
        </Reveal>
      </div>

      {/* Below-video editorial strip — desktop/tablet only */}
      <div className="hidden border-t border-white/10 sm:block">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-white/35">
              Since 2020 · Agrabad, Chattogram
            </span>

            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--brass)]/60">
              Designed · Crafted · Customized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}