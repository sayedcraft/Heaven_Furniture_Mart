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
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-[var(--deep-brown)]
        px-6
        transition-opacity duration-700 ease-in-out
        ${animate ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-full max-w-4xl text-center text-white">
        {/* Brand */}
        <div
          className={`
            transition-all duration-1000 ease-out
            ${animate
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
            }
          `}
        >
          <div
            className="
              serif
              text-5xl
              font-normal
              leading-[1.05]
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Welcome to{" "}
            <span
              className="
                text-[var(--brass)]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]
              "
            >
              Heaven Furniture Mart
            </span>
          </div>
        </div>

        {/* Gold Line */}
        <div
          className={`
            mx-auto my-8 h-[2px] bg-[var(--brass)]
            transition-all duration-1000 delay-300 ease-out
            ${animate
              ? "w-24 opacity-100"
              : "w-0 opacity-0"
            }
          `}
        />

        {/* Tagline */}
        <p
          className={`
            text-[11px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-white/85
            transition-all duration-1000 delay-500 ease-out
            sm:text-xs
            ${animate
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
            }
          `}
        >
          Designed · Crafted · Customized
        </p>
      </div>
    </div>
  );
}