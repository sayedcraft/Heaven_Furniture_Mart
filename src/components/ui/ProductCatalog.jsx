"use client";

import { useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const visibleProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-16">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-5">Browse by room</p>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`shrink-0 border-b px-1 py-3 text-left text-sm uppercase tracking-[0.12em] transition-colors lg:block lg:w-full ${
              selectedCategory === "all"
                ? "border-[var(--brass)] text-[var(--deep-brown)]"
                : "border-transparent text-[var(--brown)] hover:border-[var(--brass)] hover:text-[var(--deep-brown)]"
            }`}
          >
            All pieces
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              aria-pressed={selectedCategory === category.id}
              className={`shrink-0 border-b px-1 py-3 text-left text-sm uppercase tracking-[0.12em] transition-colors lg:block lg:w-full ${
                selectedCategory === category.id
                  ? "border-[var(--brass)] text-[var(--deep-brown)]"
                  : "border-transparent text-[var(--brown)] hover:border-[var(--brass)] hover:text-[var(--deep-brown)]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </aside>

      <div>
        <div className="mb-8 flex items-end justify-between border-b border-[var(--line)] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--brown)]">
              {visibleProducts.length} pieces
            </p>
            <h2 className="serif mt-2 text-3xl text-[var(--deep-brown)] sm:text-4xl">
              {selectedCategory === "all"
                ? "The collection"
                : categories.find(
                    (category) => category.id === selectedCategory,
                  )?.name}
            </h2>
          </div>
          <span className="hidden h-px w-12 bg-[var(--brass)] sm:block" />
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <Reveal key={product.id} delay={(index % 3) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="border border-[var(--line)] p-8 text-sm text-[var(--brown)]">
            No pieces are currently listed in this category.
          </p>
        )}
      </div>
    </div>
  );
}
