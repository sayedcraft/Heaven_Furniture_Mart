"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { featuredPieces } from "@/components/data";

export default function FeaturedPieces() {
  const [expanded, setExpanded] = useState(false);
  const visiblePieces = expanded ? featuredPieces : featuredPieces.slice(0, 4);
  return (
    <section id="collections" className="bg-[var(--surface)] py-24 sm:py-32">
      <Container>
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow">Selected pieces</span>
            <h2 className="serif mt-4 text-5xl leading-none sm:text-7xl">
              Pieces worth living with.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-6 text-[var(--brown)] sm:block">
            A few expressions of what we make. Your piece can begin anywhere.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-12 lg:gap-y-16">
          {visiblePieces.map((piece, index) => (
            <Reveal
              key={piece.title}
              delay={(index % 4) * 80}
              className={`piece-card ${index % 4 === 1 ? "lg:col-span-3 lg:mt-20" : index % 4 === 2 ? "lg:col-span-3 lg:mt-6" : index % 4 === 3 ? "lg:col-span-2 lg:mt-32" : "lg:col-span-4"}`}
            >
              <article>
                <div
                  className={`image-wrap relative bg-[var(--wood-tan)] ${index % 4 === 0 ? "aspect-[1.03]" : index % 4 === 1 ? "aspect-[.78]" : "aspect-[.9]"}`}
                >
                  <Image
                    src={piece.image}
                    alt={`${piece.title}, ${piece.category} furniture`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="piece-caption border-b border-[var(--line)] py-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="serif text-2xl sm:text-3xl">
                      {piece.title}
                    </h3>
                    <span className="piece-arrow text-[var(--brass)]">↗</span>
                  </div>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--brown)]">
                    {piece.category}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[var(--brown)]">
                    {piece.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="line-link text-xs font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)]"
          >
            {expanded ? "Show Less" : "Show More"}
            <span className="ml-3 text-[var(--brass)]">
              {expanded ? "↥" : "↘"}
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
