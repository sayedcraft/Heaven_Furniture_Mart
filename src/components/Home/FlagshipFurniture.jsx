"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";

export default function FlagshipCollection() {
  const products = getFeaturedProducts();

  if (!products?.length) return null;

  return (
    <section
      id="flagship-collection"
      className="relative overflow-hidden bg-[var(--ivory)] py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <Reveal className="mb-9 sm:mb-11 md:mb-13">
          <div className="max-w-2xl">
            <h2 className="serif text-3xl leading-[0.95] tracking-[-0.025em] text-[var(--deep-brown)] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
              Flagship Collection.
            </h2>
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {products.slice(0, 8).map((product, index) => {
            const formattedPrice =
              typeof product.price === "number"
                ? `৳${product.price.toLocaleString("en-BD")}`
                : product.priceLabel || "";

            return (
              <Reveal
                key={product.id}
                delay={index * 60}
                className="min-w-0"
              >
                <Link
                  href="/products"
                  className="group block cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="image-wrap relative aspect-[0.82] w-full overflow-hidden bg-[var(--wood-tan)]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="
                        (max-width: 640px) 50vw,
                        (max-width: 1024px) 33vw,
                        25vw
                      "
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[var(--deep-brown)]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Arrow */}
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
                        bg-[var(--deep-brown)]/10
                        text-xs
                        text-[var(--ivory)]
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        sm:right-4
                        sm:top-4
                        sm:h-8
                        sm:w-8
                        sm:text-sm
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3 sm:mt-4">
                    {/* Category */}
                    <p className="mb-1 text-[0.42rem] font-bold uppercase tracking-[0.14em] text-[var(--brass)] sm:text-[0.52rem] sm:tracking-[0.16em]">
                      {product.category.replace("-", " ")}
                    </p>

                    {/* Name + Arrow */}
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className="
                          serif
                          min-w-0
                          text-[0.85rem]
                          leading-tight
                          text-[var(--deep-brown)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--brass)]
                          sm:text-base
                          md:text-[1.05rem]
                          lg:text-[1.1rem]
                        "
                      >
                        {product.name}
                      </h3>

                      {/* Desktop Arrow */}
                      <span
                        className="
                          mt-0.5
                          hidden
                          shrink-0
                          text-xs
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

                    {/* Price */}
                    {formattedPrice && (
                      <div className="mt-2 flex items-center justify-between border-t border-[var(--line)] pt-2.5 sm:mt-3 sm:pt-3">
                        <span className="serif text-sm font-medium text-[var(--deep-brown)] sm:text-base md:text-[1.05rem]">
                          {formattedPrice}
                        </span>

                        <span className="text-[0.42rem] uppercase tracking-[0.12em] text-[var(--brown)] sm:text-[0.48rem]">
                          View piece
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={400} className="mt-10 sm:mt-14 lg:mt-16">
          <div className="flex justify-start border-t border-[var(--line)] pt-6 sm:pt-7">
            <Button href="/products">Explore Flagship Collection</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

