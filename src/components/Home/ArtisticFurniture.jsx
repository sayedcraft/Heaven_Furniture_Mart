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
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ivory)] py-10 sm:py-14 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <Reveal className="mb-10 text-center sm:mb-14 lg:mb-16">
          <h2
            className="
              serif
              mx-auto
              max-w-4xl
              text-center
              text-3xl
              leading-[0.95]
              tracking-[-0.025em]
              text-[var(--deep-brown)]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.8rem]
            "
          >
            When furniture
            <br />
            becomes
            <br />
            <em className="font-normal text-[var(--brass)]">art.</em>
          </h2>
        </Reveal>

        {/* EDITORIAL COMPOSITION */}
        <div className="grid gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-7">
          {/* FEATURED ARTWORK */}
          <Reveal variant="clip" delay={0} className="relative lg:col-span-7">
            <article className="group relative">
              <div className="image-wrap relative aspect-[0.92] overflow-hidden bg-[var(--wood-tan)] sm:aspect-[1.05] lg:aspect-[0.98]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                {/* Collection label */}
                <div className="absolute left-4 top-4 sm:left-7 sm:top-7">
                  <span className="text-[0.5rem] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-[0.55rem]">
                    Artistic
                  </span>
                </div>

                {/* Floating arrow */}
                <div className="absolute right-4 top-4 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7 sm:h-9 sm:w-9 sm:text-sm">
                  ↗
                </div>

                {/* Product info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
                  <div className="max-w-xl translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
                    <p className="mb-2 text-[0.5rem] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[0.55rem]">
                      {featured.category}
                    </p>

                    <h3 className="serif text-2xl leading-none text-white sm:text-3xl lg:text-[2.1rem]">
                      {featured.name}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* RIGHT EDITORIAL COLUMN */}
          <div className="flex flex-col lg:col-span-5">
            {/* Intro text */}
            <Reveal delay={120}>
              <div className="max-w-md pb-8 lg:ml-8 lg:pb-10">
                <span className="mb-4 block text-[0.5rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)] sm:mb-5 sm:text-[0.55rem]">
                  The Artistic Collection
                </span>

                <p className="serif text-xl leading-[1.15] text-[var(--deep-brown)] sm:text-2xl lg:text-[1.65rem]">
                  Bold forms. Unexpected details. Furniture with a point of
                  view.
                </p>

                <div className="mt-5 h-px w-10 bg-[var(--brass)] sm:mt-6" />

                <p className="mt-5 text-[0.8rem] leading-6 text-[var(--brown)] sm:mt-6 sm:text-[0.85rem] sm:leading-7">
                  We bring together expressive silhouettes and thoughtful
                  craftsmanship to create pieces that become part of the
                  architecture of a room.
                </p>
              </div>
            </Reveal>

            {/* SECONDARY ARTWORK */}
            {secondary && (
              <Reveal variant="clip" delay={220} className="lg:ml-8">
                <article className="group">
                  <div className="image-wrap relative aspect-[1.15] overflow-hidden bg-[var(--wood-tan)] sm:aspect-[1.35] lg:aspect-[1.28]">
                    <Image
                      src={secondary.image}
                      alt={secondary.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    {/* Arrow */}
                    <span className="absolute right-4 top-4 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5 sm:top-5 sm:h-9 sm:w-9 sm:text-sm">
                      ↗
                    </span>

                    {/* Product title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                      <p className="mb-1 text-[0.5rem] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-[0.55rem]">
                        {secondary.category}
                      </p>

                      <h3 className="serif text-xl text-white sm:text-2xl lg:text-[1.55rem]">
                        {secondary.name}
                      </h3>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-3 flex items-center justify-between sm:mt-4">
                    <span className="text-[0.5rem] uppercase tracking-[0.18em] text-[var(--brown)] sm:text-[0.55rem]">
                      Statement Piece
                    </span>

                    <span className="text-xs text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1 sm:text-sm">
                      ↗
                    </span>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={350} className="mt-12 sm:mt-16">
          <div className="flex justify-center border-t border-[var(--line)] pt-6 sm:pt-7">
            <Button href="/products">View Artistic Collection</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

