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
      className="relative overflow-hidden border-t border-[var(--line)] bg-white py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <Reveal className="mb-14 sm:mb-20 lg:mb-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5 block">
                Customer favorites
              </span>

              <h2 className="serif max-w-3xl text-5xl leading-[0.92] text-[var(--charcoal)] sm:text-6xl lg:text-7xl">
                Pieces people
                <br />
                <em className="font-normal text-[var(--brass)]">
                  keep coming back to.
                </em>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-sm leading-7 text-[var(--brown)]">
                Discover the furniture our customers love most —
                thoughtfully designed for comfort, character and everyday
                living.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Editorial product layout */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">

          {/* Featured product */}
          <Reveal
            variant="clip"
            delay={0}
            className="lg:col-span-7"
          >
            <article className="group">
              <div className="image-wrap relative aspect-[1.08] overflow-hidden bg-[#e8e2d8] sm:aspect-[1.2] lg:aspect-[1.12]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Product number */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="text-[0.6rem] tracking-[0.2em] text-white/80">
                    01 / POPULAR
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7">
                  ↗
                </div>

                {/* Product information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9">
                  <div className="max-w-xl translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
                    <p className="mb-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/70">
                      {featured.category}
                    </p>

                    <h3 className="serif text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
                      {featured.name}
                    </h3>

                    {featured.description && (
                      <p className="mt-4 max-w-md text-xs leading-6 text-white/75 sm:text-sm">
                        {featured.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Supporting products */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:col-span-5 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-10">
            {supporting.map((product, index) => (
              <Reveal
                key={product.id}
                delay={100 + index * 80}
              >
                <article className="group cursor-pointer">

                  <div className="image-wrap relative aspect-[0.9] overflow-hidden bg-[#e8e2d8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 24vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <span className="absolute left-4 top-4 text-[0.55rem] font-medium tracking-[0.18em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      0{index + 2}
                    </span>

                    {/* Arrow */}
                    <span className="absolute right-4 top-4 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-xs text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  {/* Product info */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="serif text-lg leading-tight text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-xl">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[var(--brown)]">
                          {product.category}
                        </p>
                      </div>

                      <span className="mt-1 text-sm text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={450} className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-5 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[var(--brass)]" />

              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--brown)]">
                Most loved pieces
              </span>
            </div>

            <Button href="/products">
              View All Pieces
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}