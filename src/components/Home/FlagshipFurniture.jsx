"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";

export default function FlagshipFurniture() {
  const products = getFeaturedProducts();
  const featured = products[0];
  const supporting = products.slice(1, 5);

  return (
    <section className="bg-[#f4f0e9] py-28 sm:py-40 lg:py-52">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-16 sm:mb-24">
          <span className="eyebrow block mb-4">Heritage collection</span>
          <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
            Flagship furniture
          </h2>
        </Reveal>

        {/* Large Featured + Supporting Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-12 lg:auto-rows-[300px] mb-16">
          {/* Large featured image - 2/3 width */}
          <Reveal
            variant="clip"
            delay={0}
            className="lg:col-span-8 lg:row-span-2 group"
          >
            {featured && (
              <div className="image-wrap relative bg-[#d6cabb] h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
          </Reveal>

          {/* Info panel - right side top */}
          <Reveal delay={120} className="lg:col-span-4 lg:row-span-1">
            <div className="bg-white p-6 sm:p-8 h-full flex flex-col justify-center border border-[var(--line)]">
              {featured && (
                <>
                  <h3 className="serif text-3xl sm:text-4xl leading-[1.1] text-[var(--charcoal)] mb-4">
                    {featured.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--brass)] font-bold mb-4">
                    {featured.category}
                  </p>
                  <p className="text-sm leading-7 text-[var(--brown)]">
                    {featured.description}
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Supporting products grid - right side bottom */}
          <Reveal delay={240} className="lg:col-span-4 lg:row-span-1">
            <div className="grid grid-cols-2 gap-4 h-full">
              {supporting.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="image-wrap relative bg-[#d6cabb] overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Bottom row - 4 smaller cards */}
          {supporting.map((product, idx) => (
            <Reveal
              key={product.id}
              delay={360 + idx * 60}
              className="lg:col-span-3 lg:row-span-1"
            >
              <div className="h-full flex flex-col">
                <div className="image-wrap relative bg-[#d6cabb] flex-grow overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <h4 className="serif text-base sm:text-lg leading-tight text-[var(--charcoal)]">
                  {product.name}
                </h4>
                <p className="mt-1 text-xs text-[var(--brass)] uppercase tracking-[0.08em]">
                  {product.category}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} className="flex justify-start">
          <Button href="#products">Explore Collection</Button>
        </Reveal>
      </div>
    </section>
  );
}
