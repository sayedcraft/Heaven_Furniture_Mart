"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getProductsByCollection } from "@/data/products";

export default function MostSelling() {
  const products = getProductsByCollection("Popular");

  if (!products?.length) return null;

  return (
    <section
      id="most-selling"
      className="
        relative
        overflow-hidden
        border-t border-[var(--line)]
        bg-[var(--ivory)]
        py-10
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <Reveal
          className="
            mb-8
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          <div className="flex items-end justify-between gap-5">
            <h2
              className="
                  serif
                  text-[2.4rem]
                  leading-[0.9]
                  tracking-tight
                  text-[var(--deep-brown)]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
            >
              Most Selling
            </h2>
          </div>
        </Reveal>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-8

            sm:grid-cols-3
            sm:gap-x-5
            sm:gap-y-10

            lg:grid-cols-4
            lg:gap-x-6
            lg:gap-y-12
          "
        >
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              delay={Math.min(index * 70, 500)}
              className="min-w-0"
            >
              <article className="group cursor-pointer">
                {/* =============================================
                    PRODUCT IMAGE
                ============================================== */}

                <div
                  className="
                    image-wrap
                    relative
                    aspect-[0.82]
                    w-full
                    overflow-hidden
                    bg-[var(--surface)]

                    sm:aspect-[0.82]

                    lg:aspect-[0.82]
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 33vw,
                      25vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1000ms]
                      ease-out
                      group-hover:scale-[1.055]
                    "
                  />

                  {/* Subtle overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[var(--deep-brown)]/10
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* =========================================
                      MOST SELLING LABEL
                  ========================================== */}

                  {index < 3 && (
                    <div
                      className="
                        absolute
                        left-2.5
                        top-2.5

                        sm:left-4
                        sm:top-4
                      "
                    >
                      <span
                        className="
                          inline-flex
                          items-center
                          bg-[var(--ivory)]/90
                          px-2
                          py-1
                          text-[0.38rem]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[var(--deep-brown)]
                          backdrop-blur-sm

                          sm:px-2.5
                          sm:py-1.5
                          sm:text-[0.45rem]
                          sm:tracking-[0.16em]
                        "
                      >
                        Best Seller
                      </span>
                    </div>
                  )}

                  {/* =========================================
                      ARROW
                  ========================================== */}

                  <span
                    className="
                      absolute
                      right-2.5
                      top-2.5
                      flex
                      h-7
                      w-7
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-[var(--deep-brown)]/15
                      text-xs
                      text-white
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-500

                      group-hover:translate-y-0
                      group-hover:opacity-100

                      sm:right-4
                      sm:top-4
                      sm:h-9
                      sm:w-9
                      sm:text-sm
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* =============================================
                    PRODUCT INFORMATION
                ============================================== */}

                <div className="mt-3 sm:mt-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3
                        className="
                          serif
                          truncate
                          text-[0.95rem]
                          leading-tight
                          text-[var(--deep-brown)]
                          transition-colors
                          duration-300

                          group-hover:text-[var(--brass)]

                          sm:text-lg
                          md:text-xl
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          truncate
                          text-[0.42rem]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[var(--brown)]/70

                          sm:text-[0.5rem]
                          sm:tracking-[0.17em]
                        "
                      >
                        {product.category}
                      </p>
                    </div>

                    {/* Desktop hover arrow */}

                    <span
                      className="
                        mt-0.5
                        hidden
                        shrink-0
                        text-sm
                        text-[var(--brass)]
                        opacity-0
                        transition-all
                        duration-300

                        sm:block

                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <Reveal
          delay={350}
          className="
            mt-10
            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              flex
              justify-center
              border-t
              border-[var(--line)]
              pt-6

              sm:pt-7
            "
          >
            <Button href="/products">View All Pieces</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
