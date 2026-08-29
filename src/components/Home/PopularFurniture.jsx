"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getProductsByCollection } from "@/data/products";

export default function PopularFurniture() {
  const products = getProductsByCollection("Popular");

  return (
    <section className="bg-white py-28 sm:py-40 lg:py-52 border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-20 sm:mb-28">
          <span className="eyebrow block mb-4">Customer favorites</span>
          <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
            Popular pieces
          </h2>
        </Reveal>

        {/* 4-Column Product Grid with varied heights */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-4 auto-rows-max mb-16">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              delay={index * 80}
              className={index === 0 ? "lg:col-span-1 lg:row-span-2" : ""}
            >
              <div className="group cursor-pointer h-full">
                <div
                  className={`image-wrap relative bg-[#e8e2d8] overflow-hidden ${
                    index === 0 ? "aspect-[0.8]" : "aspect-[0.9]"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="mt-6">
                  <h3 className="serif text-lg sm:text-xl group-hover:text-[var(--brass)] transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--brown)]">
                    {product.category}
                  </p>
                  {product.description && (
                    <p className="mt-3 text-xs leading-6 text-[var(--brown)]">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="flex justify-start">
          <Button href="#products">View All Pieces</Button>
        </Reveal>
      </div>
    </section>
  );
}
