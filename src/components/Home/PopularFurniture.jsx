"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getProductsByCollection } from "@/data/products";

export default function PopularFurniture() {
  const products = getProductsByCollection("Popular");

  if (!products?.length) return null;

  const featured = products[0];
  const supporting = products.slice(1, 5);

  return (
    <section
      id="popular"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ivory)] py-10 sm:py-15 lg:py-20"
    >
      {" "}
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
        SECTION HEADER
    ===================================================== */}

        <Reveal className="mb-10 text-center sm:mb-16 lg:mb-20">
          <h2
            className="
          serif
          mx-auto
          max-w-4xl
          text-center
          text-4xl
          leading-[0.95]
          tracking-tight
          text-[var(--deep-brown)]
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[5.5rem]
        "
          >
            Pieces people
            <br />
            <em className="font-normal text-[var(--brass)]">
              keep coming back to.
            </em>
          </h2>
        </Reveal>

        {/* =====================================================
        EDITORIAL PRODUCT LAYOUT
    ===================================================== */}

        <div className="grid gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-7">
          {/* =================================================
          FEATURED PRODUCT
      ================================================= */}

          <Reveal variant="clip" delay={0} className="lg:col-span-7">
            <article className="group">
              <div className="image-wrap relative aspect-[1.08] overflow-hidden bg-[var(--surface)] sm:aspect-[1.2] lg:aspect-[1.12]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Collection Label */}

                <div className="absolute left-4 top-4 sm:left-7 sm:top-7">
                  <span className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-[0.62rem]">
                    Popular
                  </span>
                </div>

                {/* Arrow */}

                <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7 sm:h-10 sm:w-10">
                  ↗
                </div>

                {/* Product information */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
                  <div className="max-w-xl translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
                    <p className="mb-2 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[0.58rem]">
                      {featured.category}
                    </p>

                    <h3 className="serif text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
                      {featured.name}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* =================================================
          SUPPORTING PRODUCTS
      ================================================= */}

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:col-span-5 lg:gap-x-6 lg:gap-y-9">
            {supporting.map((product, index) => (
              <Reveal key={product.id} delay={100 + index * 80}>
                <article className="group cursor-pointer">
                  {/* Product image */}

                  <div className="image-wrap relative aspect-[0.9] overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 24vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Hover overlay */}

                    <div className="absolute inset-0 bg-[var(--deep-brown)]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Arrow */}

                    <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border-[var(--ivory)]/40 bg-[var(--deep-brown)]/10 text-xs text-[var(--ivory)] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4">
                      ↗
                    </span>
                  </div>

                  {/* Product information */}

                  <div className="mt-3 sm:mt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="serif text-base leading-tight text-[var(--deep-brown)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-lg">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.15em] text-[var(--brown)] sm:text-[0.55rem]">
                          {product.category}
                        </p>
                      </div>

                      <span className="mt-1 shrink-0 text-sm text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

        <Reveal delay={450} className="mt-12 sm:mt-16">
          <div className="flex justify-center border-t border-[var(--line)] pt-6 sm:pt-7">
            <Button href="/products">View All Pieces</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
