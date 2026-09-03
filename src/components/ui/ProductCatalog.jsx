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
    <div className="grid gap-8 sm:gap-10 lg:grid-cols-[230px_1fr] lg:gap-16">
      {/* CATEGORY SIDEBAR */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-4 sm:mb-5">Browse by room</p>

        <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:block lg:space-y-2">
          {/* ALL PIECES */}
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`group flex shrink-0 items-center justify-between border px-4 py-3.5 text-left text-[10px] font-medium uppercase tracking-[0.12em] transition-all duration-300 sm:text-xs lg:w-full ${
              selectedCategory === "all"
                ? "border-[var(--deep-brown)] bg-[var(--deep-brown)] text-white"
                : "border-[var(--line)] bg-white/40 text-[var(--brown)] hover:border-[var(--brass)] hover:bg-white hover:text-[var(--deep-brown)]"
            }`}
          >
            <span>All pieces</span>

            <span
              className={`ml-4 text-[10px] transition-transform duration-300 ${
                selectedCategory === "all"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              →
            </span>
          </button>

          {/* CATEGORIES */}
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={isActive}
                className={`group flex shrink-0 items-center justify-between border px-4 py-3.5 text-left text-[10px] font-medium uppercase tracking-[0.12em] transition-all duration-300 sm:text-xs lg:w-full ${
                  isActive
                    ? "border-[var(--brass)] bg-[var(--brass)] text-[var(--deep-brown)]"
                    : "border-[var(--line)] bg-white/40 text-[var(--brown)] hover:border-[var(--brass)] hover:bg-white hover:text-[var(--deep-brown)]"
                }`}
              >
                <span>{category.name}</span>

                <span
                  className={`ml-4 text-[10px] transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* PRODUCTS */}
      <div>
        <div className="mb-7 flex flex-col items-start gap-3 border-b border-[var(--line)] pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.16em] text-[var(--brown)] sm:text-xs">
              {visibleProducts.length} pieces
            </p>

            <h2 className="serif mt-2 text-2xl text-[var(--deep-brown)] sm:text-3xl lg:text-4xl">
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
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-y-12 xl:grid-cols-3">
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
