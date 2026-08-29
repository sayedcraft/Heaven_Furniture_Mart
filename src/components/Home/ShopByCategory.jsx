import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/categories";

function CategoryCard({
  category,
  className = "",
  featured = false,
  compact = false,
}) {
  return (
    <a
      href={`#${category.slug}`}
      className={`group relative block h-full overflow-hidden ${className}`}
    >
      <div
        className={`image-wrap relative h-full min-h-[220px] overflow-hidden bg-[#d6cabb] ${
          featured
            ? "aspect-[0.95] sm:aspect-[1.05] lg:aspect-auto"
            : compact
              ? "aspect-[1.15] lg:aspect-auto"
              : "aspect-[1]"
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 42vw"
              : "(max-width: 1024px) 50vw, 28vw"
          }
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />

        {/* Permanent subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {/* Hover atmosphere */}
        <div className="absolute inset-0 bg-[var(--charcoal)]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Explore indicator */}
        <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          ↗
        </div>

        {/* Content over image */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">

            <h3
              className={`serif text-white ${
                featured
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-2xl sm:text-3xl"
              }`}
            >
              {category.name}
            </h3>

            {category.description && (
              <p className="mt-2 max-w-sm text-xs leading-5 text-white/75 sm:text-sm">
                {category.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ShopByCategory() {
  return (
    <section
      id="categories"
      className="border-t border-[var(--line)] bg-[#f4f0e9] py-24 sm:py-32 lg:py-44"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <Reveal className="mb-14 sm:mb-20 lg:mb-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">

              <h2 className="serif max-w-3xl text-5xl leading-[0.95] text-[var(--charcoal)] sm:text-6xl lg:text-7xl">
                Pieces for every
                <br />
                <em className="font-normal text-[var(--brass)]">
                  kind of living.
                </em>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-xl leading-7 text-[var(--brown)]">
                Discover furniture designed around the way you live —
                from everyday comfort to distinctive statement pieces.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Desktop editorial grid */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-[260px_260px] gap-5 xl:gap-7">
          {/* Large featured sofa */}
          <Reveal
            delay={0}
            className="col-span-5 row-span-2"
          >
            <CategoryCard
              category={categories[0]}
              featured
              className="h-full"
            />
          </Reveal>

          {/* Bed */}
          <Reveal
            delay={80}
            className="col-span-3"
          >
            <CategoryCard
              category={categories[1]}
              compact
              className="h-full"
            />
          </Reveal>

          {/* Dining */}
          <Reveal
            delay={140}
            className="col-span-4"
          >
            <CategoryCard
              category={categories[2]}
              compact
              className="h-full"
            />
          </Reveal>

          {/* Chair */}
          <Reveal
            delay={200}
            className="col-span-3"
          >
            <CategoryCard
              category={categories[3]}
              compact
              className="h-full"
            />
          </Reveal>

          {/* Mirror */}
          <Reveal
            delay={240}
            className="col-span-2"
          >
            <CategoryCard
              category={categories[4]}
              compact
              className="h-full"
            />
          </Reveal>

          {/* Other - wider editorial card */}
          <Reveal
            delay={280}
            className="col-span-2"
          >
            <CategoryCard
              category={categories[5]}
              compact
              className="h-full"
            />
          </Reveal>
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-5 lg:hidden">
          {categories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 60}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <CategoryCard
                category={category}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {categories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 50}
              className={index === 0 ? "col-span-2" : ""}
            >
              <CategoryCard
                category={category}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>

        {/* Bottom editorial line */}
        <Reveal delay={300} className="mt-10 sm:mt-14">
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-5">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--brown)]">
              Six collections
            </span>

            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--brass)]">
              Designed · Crafted · Customized
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}