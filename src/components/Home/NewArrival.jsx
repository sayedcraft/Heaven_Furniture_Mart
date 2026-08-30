import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Link from "next/link";

const newArrivals = [
  {
    id: "new-1",
    name: "The Modern Settee",
    category: "Sofa",
    image: "/image/Livingroom.jpg",
    description: "Contemporary comfort meets classic proportions.",
    tag: "New",
  },
  {
    id: "new-2",
    name: "The Platform Bed",
    category: "Bed",
    image: "/image/Bedroom.jpg",
    description: "Minimalist design with maximum comfort.",
    tag: "New",
  },
  {
    id: "new-3",
    name: "The Extending Table",
    category: "Dining",
    image: "/image/Diningroom.jpg",
    description: "Adaptable elegance for every occasion.",
    tag: "Limited",
  },
  {
    id: "new-4",
    name: "The Library Shelving",
    category: "Storage",
    image: "/image/Wardrobe.jpg",
    description: "Display and storage refined to an art.",
    tag: "New",
  },
];

export default function NewArrival() {
  const [hero, ...rest] = newArrivals;

  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-14 sm:mb-20 lg:mb-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="serif text-5xl leading-[0.9] text-[var(--charcoal)] sm:text-6xl lg:text-7xl">
                Fresh pieces.
                <br />
                <em className="font-normal text-[var(--brass)]">
                  New possibilities.
                </em>
              </h2>
            </div>

            <div className="flex items-end justify-between gap-6 lg:col-span-5">
              <p className="max-w-sm text-xl leading-7 text-[var(--brown)]">
                Discover our latest furniture — thoughtfully designed,
                beautifully crafted and ready for your space.
              </p>

              <div className="hidden lg:block">
                <Button href="/products">View All</Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured arrival */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Large image */}
          <Reveal variant="clip" delay={0} className="lg:col-span-8">
            <article className="group relative">
              <div className="image-wrap relative aspect-[1.15] overflow-hidden bg-[#e8e2d8] sm:aspect-[1.35] lg:aspect-[1.42]">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="bg-[var(--brass)] px-3 py-2 text-[0.9rem] font-bold uppercase tracking-[0.2em] text-[var(--charcoal)]">
                    {hero.tag}
                  </span>
                </div>

               

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:right-7">
                  ↗
                </div>

                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9">
                  <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/70">
                    {hero.category}
                  </p>

                  <h3 className="serif text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
                    {hero.name}
                  </h3>
                </div>
              </div>

              {/* Image caption */}
              
            </article>
          </Reveal>

          {/* Featured editorial text */}
          <Reveal
            delay={140}
            className="flex flex-col justify-end lg:col-span-4"
          >
            <div className="border-t border-[var(--line)] pt-7 lg:mb-5">
              <span className="mb-5 block text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
                The latest piece
              </span>

              <h3 className="serif text-3xl leading-[1] text-[var(--charcoal)] sm:text-4xl lg:text-5xl">
                {hero.name}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--brown)]">
                {hero.description}
              </p>

              <div className="mt-8 h-px w-10 bg-[var(--brass)]" />

              <p className="mt-7 max-w-xs text-[0.6rem] uppercase leading-5 tracking-[0.16em] text-[var(--brown)]">
                Now available at our Agrabad showroom
              </p>
            </div>
          </Reveal>
        </div>

        {/* Supporting arrivals */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <Reveal className="mb-8 flex items-center justify-between border-b border-[var(--line)] pb-4">
            <span className="text-[1.5rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
              More new arrivals
            </span>

            
          </Reveal>

          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {rest.map((item, index) => (
              <Reveal key={item.id} delay={180 + index * 90}>
                <article className="group cursor-pointer">
                  {/* Product image */}
                  <div className="image-wrap relative aspect-[0.92] overflow-hidden bg-[#e8e2d8] sm:aspect-[1.02]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055]"
                    />

                    {/* Soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Tag */}
                    <div className="absolute left-4 top-4">
                      <span className="bg-white/90 px-2.5 py-1.5 text-[0.9rem] font-bold uppercase tracking-[0.18em] text-[var(--charcoal)] backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>

                    {/* Number */}
                    

                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </div>
                  </div>

                  {/* Product information */}
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                          {item.category}
                        </p>

                        <h3 className="serif text-2xl leading-none text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-3xl">
                          {item.name}
                        </h3>
                      </div>

                      <span className="pt-1 text-sm text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 max-w-xs text-xs leading-6 text-[var(--brown)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <Reveal delay={400} className="mt-14 lg:hidden">
          <Button href="#products">View All New Pieces</Button>
        </Reveal>

        {/* Bottom statement */}
        <Reveal delay={450} className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--brown)]">
              Designed · Crafted · Customized
            </span>

            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--brass)]">
              New season / 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
