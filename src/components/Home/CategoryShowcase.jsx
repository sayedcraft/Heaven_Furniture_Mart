import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/categories";

// 4 showcase categories (Sofa, Bed, Dining Table, Chair)
const showcaseCategories = categories.slice(0, 4);

function ShowcaseCard({ category, index }) {
  return (
    <Reveal delay={index * 80} className="stagger-card">
      <Link
        href={`/products?category=${category.slug}`}
        className="cat-card group relative block h-full overflow-hidden"
        aria-label={`Explore ${category.name} collection`}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#d6cabb] sm:aspect-[2/3] lg:aspect-[3/4]">
          <Image
            src={category.image}
            alt={`${category.name} furniture collection`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.07]"
          />

          {/* Permanent gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Hover atmosphere overlay */}
          <div className="cat-card-overlay absolute inset-0 bg-[var(--charcoal)]/20" />

          {/* Top corner index */}
          

          {/* Explore arrow — appears on hover */}
          <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5 sm:top-5">
            ↗
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
            <div className="cat-card-label">
              {/* Category name */}
              <h3 className="serif text-2xl leading-none text-white sm:text-3xl">
                {category.name}
              </h3>

              {/* CTA */}
              <div className="cat-card-cta mt-3 flex items-center gap-2">
                <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[var(--brass)]">
                  Explore
                </span>
                <span className="h-px w-6 bg-[var(--brass)] transition-all duration-300 group-hover:w-10" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function CategoryShowcase() {
  return (
    <section
      id="category-showcase"
      className="border-t border-[var(--line)] bg-[var(--charcoal)] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Label row */}
        <Reveal className="mb-8 flex items-center justify-between sm:mb-10">
          <div className="flex items-center gap-4">
            <span className="text-[1.5rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
              Shop by category
            </span>
          </div>

          <Link
            href="/products"
            className="group flex items-center gap-2 text-[0.9rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-[var(--brass)]"
          >
            View all
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* 4-card horizontal grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {showcaseCategories.map((category, index) => (
            <ShowcaseCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom editorial line */}
        <Reveal delay={360} className="mt-8 sm:mt-10">
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
