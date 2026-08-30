"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);

  const stylingPoints = [
    "Thoughtfully curated furniture",
    "Custom-made for your space",
    "Premium materials & craftsmanship",
    "A timeless, refined finish",
  ];

  /* ================================
     UPDATE SLIDER POSITION
  ================================= */

  const updateSliderPosition = useCallback((clientX) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    if (rect.width === 0) return;

    const x = clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setSliderPos(Math.max(0, Math.min(100, percentage)));
  }, []);

  /* ================================
     MOUSE
  ================================= */

  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();

      setIsDragging(true);
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition],
  );

  /* ================================
     TOUCH
  ================================= */

  const handleTouchStart = useCallback(
    (e) => {
      if (!e.touches?.[0]) return;

      setIsDragging(true);

      updateSliderPosition(e.touches[0].clientX);
    },
    [updateSliderPosition],
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !e.touches?.[0]) return;

      updateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, updateSliderPosition],
  );

  /* ================================
     STOP DRAGGING
  ================================= */

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  /* ================================
     GLOBAL EVENTS
  ================================= */

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);

      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);

  return (
    <section
      id="styling"
      className="
        relative
        overflow-hidden
        bg-bone
        py-16
        sm:py-20
        md:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            mb-10
            grid
            gap-8
            md:mb-14
            lg:grid-cols-12
            lg:items-end
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-8">
            

            <h2
             className="serif max-w-3xl text-5xl leading-[0.95] text-[var(--charcoal)] sm:text-6xl lg:text-7xl"
            >
              From empty space to{" "}
              <em className="font-normal text-[var(--brass)]">beautifully lived.</em>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-4 lg:pb-1">
            <div className="flex gap-4">
              <div className="mt-1 h-10 w-px shrink-0 bg-brass/50" />

              <p
                className="max-w-sm text-xl leading-7 text-[var(--brown)]"
              >
                See how thoughtful furniture, refined materials and bespoke
                craftsmanship can completely transform a living space.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            BEFORE / AFTER SLIDER
        ====================================== */}

        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onContextMenu={(e) => e.preventDefault()}
          className={`
            group
            relative
            aspect-[4/3]
            w-full
            select-none
            overflow-hidden
            rounded-sm
            border
            border-ink/10
            bg-sand
            shadow-[0_30px_80px_rgba(0,0,0,0.14)]
            sm:aspect-[16/9]
            lg:aspect-[21/10]
            ${isDragging ? "cursor-ew-resize" : "cursor-ew-resize"}
          `}
          style={{
            touchAction: "none",
          }}
        >
          {/* =====================================
              AFTER IMAGE
          ====================================== */}

          <div className="absolute inset-0">
            <Image
              src="/image/after.png"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              alt="Fully styled luxury living room"
              className="object-cover object-center"
              draggable={false}
            />

            {/* Subtle overlay */}

            <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

            {/* AFTER LABEL */}

            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-4
                z-10
                sm:right-6
                sm:top-6
              "
            >
              <div
                className="
                  border
                  border-bone/20
                  bg-depth/80
                  px-3
                  py-1.5
                  backdrop-blur-md
                  sm:px-4
                  sm:py-2
                "
              >
                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-bone
                    sm:text-[10px]
                  "
                >
                  After
                </span>
              </div>
            </div>
          </div>

          {/* =====================================
              BEFORE IMAGE
          ====================================== */}

          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}
          >
            <Image
              src="/image/before.png"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              alt="Empty living room before styling"
              className="object-cover object-center"
              draggable={false}
            />

            {/* BEFORE LABEL */}

            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                z-10
                sm:left-6
                sm:top-6
              "
            >
              <div
                className="
                  border
                  border-ink/10
                  bg-bone/90
                  px-3
                  py-1.5
                  backdrop-blur-md
                  sm:px-4
                  sm:py-2
                "
              >
                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-ink
                    sm:text-[10px]
                  "
                >
                  Before
                </span>
              </div>
            </div>
          </div>

          {/* =====================================
              SLIDER DIVIDER
          ====================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              top-0
              z-20
              w-px
              bg-bone
              shadow-[0_0_18px_rgba(0,0,0,0.5)]
            "
            style={{
              left: `${sliderPos}%`,
            }}
          >
            {/* =====================================
                SLIDER HANDLE
            ====================================== */}

            <div
              className={`
                absolute
                left-1/2
                top-1/2
                flex
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-brass
                bg-bone
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                transition-transform
                duration-200
                sm:h-14
                sm:w-14
                ${isDragging ? "scale-110" : "group-hover:scale-105"}
              `}
            >
              <ArrowLeftRight
                className="
                  h-4
                  w-4
                  text-bronze
                  sm:h-5
                  sm:w-5
                "
              />
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
