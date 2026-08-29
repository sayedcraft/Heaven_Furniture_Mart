import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getProductsByCollection } from "@/data/products";

export default function ArtisticFurniture() {
  const products = getProductsByCollection("Artistic");

  if (!products?.length) return null;

  const featured = products[0];
  const secondary = products[1];

  return (
    <section
      id="artistic"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[#f4f0e9] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <Reveal className="mb-14 sm:mb-20 lg:mb-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
             
              <h2 className="serif max-w-3xl text-5xl leading-[0.92] text-[var(--charcoal)] sm:text-6xl lg:text-7xl">
                When furniture
                <br />
                becomes
                <br />
                <em className="font-normal text-[var(--brass)]">
                  art.
                </em>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-xl leading-7 text-[var(--brown)]">
                Statement pieces created for those who see furniture as more
                than function — as form, character and expression.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Editorial composition */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Featured artwork */}
          <Reveal
            variant="clip"
            delay={0}
            className="relative lg:col-span-7"
          >
            <article className="group relative">
              <div className="image-wrap relative aspect-[0.92] overflow-hidden bg-[#d6cabb] sm:aspect-[1.05] lg:aspect-[0.98]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="text-[0.58rem] tracking-[0.2em] text-white/80">
                    01 / ARTISTIC
                  </span>
                </div>

                {/* Floating arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7">
                  ↗
                </div>

                {/* Product info */}
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

            {/* Small editorial caption */}
            <div className="mt-5 flex items-start justify-between gap-6">
              <span className="text-[0.58rem] uppercase tracking-[0.18em] text-[var(--brown)]">
                Designed as a statement
              </span>

              <span className="text-[0.58rem] uppercase tracking-[0.18em] text-[var(--brass)]">
                01
              </span>
            </div>
          </Reveal>

          {/* Right editorial column */}
          <div className="flex flex-col lg:col-span-5">

            {/* Intro text */}
            <Reveal delay={120}>
              <div className="max-w-md pb-10 lg:ml-8 lg:pb-14">
                <span className="mb-5 block text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
                  The artistic collection
                </span>

                <p className="serif text-2xl leading-[1.15] text-[var(--charcoal)] sm:text-3xl">
                  Bold forms. Unexpected details. Furniture with a point of
                  view.
                </p>

                <div className="mt-6 h-px w-10 bg-[var(--brass)]" />

                <p className="mt-6 text-sm leading-7 text-[var(--brown)]">
                  We bring together expressive silhouettes and thoughtful
                  craftsmanship to create pieces that become part of the
                  architecture of a room.
                </p>
              </div>
            </Reveal>

            {/* Secondary artwork */}
            {secondary && (
              <Reveal
                variant="clip"
                delay={220}
                className="lg:ml-8"
              >
                <article className="group">
                  <div className="image-wrap relative aspect-[1.15] overflow-hidden bg-[#d6cabb] sm:aspect-[1.35] lg:aspect-[1.28]">
                    <Image
                      src={secondary.image}
                      alt={secondary.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    {/* Product number */}
                    <span className="absolute left-5 top-5 text-[0.58rem] tracking-[0.2em] text-white/80">
                      02
                    </span>

                    {/* Arrow */}
                    <span className="absolute right-5 top-5 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>

                    {/* Product title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                      <p className="mb-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/70">
                        {secondary.category}
                      </p>

                      <h3 className="serif text-2xl text-white sm:text-3xl">
                        {secondary.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[0.58rem] uppercase tracking-[0.18em] text-[var(--brown)]">
                      Statement piece
                    </span>

                    <span className="text-sm text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal delay={350} className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-5 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[var(--brass)]" />

              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--brown)]">
                Crafted beyond convention
              </span>
            </div>

            <Button href="#products">
              View Artistic Collection
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}