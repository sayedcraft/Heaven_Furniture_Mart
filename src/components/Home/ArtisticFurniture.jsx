import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getProductsByCollection } from "@/data/products";

export default function ArtisticFurniture() {
  const products = getProductsByCollection("Artistic");

  return (
    <section className="bg-[#f4f0e9] py-28 sm:py-40 lg:py-52 border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-20 sm:mb-28">
          <span className="eyebrow block mb-4">Boundary pushing</span>
          <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
            Artistic furniture
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--brown)]">
            Where craftsmanship becomes sculpture and function becomes art.
          </p>
        </Reveal>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Large featured image - left side */}
          <Reveal
            variant="clip"
            delay={0}
            className="lg:col-span-7 lg:row-span-2"
          >
            {products[0] && (
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.9] lg:aspect-[1.1] overflow-hidden group">
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
          </Reveal>

          {/* Editorial text panel - top right */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="h-full flex flex-col justify-start lg:pt-20">
              {products[0] && (
                <>
                  <h3 className="serif text-3xl sm:text-4xl leading-[1.1] text-[var(--charcoal)] mb-6">
                    {products[0].name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--brass)] font-bold mb-6 pb-6 border-b border-[var(--line)]">
                    {products[0].category}
                  </p>
                  <p className="text-sm leading-8 text-[var(--brown)] italic">
                    {products[0].description}
                  </p>
                  <p className="mt-8 text-xs text-[var(--brown)] leading-7">
                    Each piece in our artistic collection challenges
                    conventional furniture design, prioritizing form and
                    statement-making presence alongside practical functionality.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          {/* Supporting images - bottom right */}
          {products[1] && (
            <Reveal variant="clip" delay={240} className="lg:col-span-5">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[1.5] lg:aspect-[1.8] overflow-hidden group">
                <Image
                  src={products[1].image}
                  alt={products[1].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-8">
                  <div className="text-white drop-shadow-lg">
                    <p className="text-xs uppercase tracking-[0.12em] font-bold mb-2">
                      {products[1].category}
                    </p>
                    <h4 className="serif text-2xl sm:text-3xl leading-tight">
                      {products[1].name}
                    </h4>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
