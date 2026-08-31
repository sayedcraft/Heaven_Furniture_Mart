import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

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
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-white py-10 sm:py-15 lg:py-20">
      {" "}
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
        SECTION HEADER
    ===================================================== */}

        <Reveal className="mb-10 text-center sm:mb-16 lg:mb-20">
          <h2
            className="
          serif
          mx-auto
          max-w-4xl
          text-center
          text-4xl
          leading-[0.95]
          tracking-tight
          text-[var(--charcoal)]
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[5.5rem]
        "
          >
            Fresh pieces.
            <br />
            <em className="font-normal text-[var(--brass)]">
              New possibilities.
            </em>
          </h2>
        </Reveal>

        {/* =====================================================
        FEATURED ARRIVAL
    ===================================================== */}

        <div className="grid items-start gap-6 sm:gap-7 lg:grid-cols-12 lg:gap-7">
          {/* Featured Image */}

          <Reveal variant="clip" delay={0} className="lg:col-span-8">
            <article className="group relative">
              <div className="image-wrap relative aspect-[1.15] overflow-hidden bg-[#e8e2d8] sm:aspect-[1.35] lg:aspect-[1.42]">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Cinematic Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Tag */}

                <div className="absolute left-4 top-4 sm:left-7 sm:top-7">
                  <span className="bg-[var(--brass)] px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[var(--charcoal)] sm:text-[0.62rem]">
                    {hero.tag}
                  </span>
                </div>

                {/* Hover Arrow */}

                <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:right-7 sm:h-10 sm:w-10">
                  ↗
                </div>

                {/* Image Title */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
                  <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[0.58rem]">
                    {hero.category}
                  </p>

                  <h3 className="serif text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
                    {hero.name}
                  </h3>
                </div>
              </div>
            </article>
          </Reveal>

          {/* =================================================
          EDITORIAL TEXT
      ================================================= */}

          <Reveal delay={140} className="lg:col-span-4">
            <div className="border-t border-[var(--line)] pt-6 sm:pt-7 lg:pt-8">
              {/* Small Label */}

              <span className="mb-4 block text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)] sm:mb-5 sm:text-[0.58rem]">
                The Latest Piece
              </span>

              {/* Title */}

              <h3 className="serif text-3xl leading-[1] text-[var(--charcoal)] sm:text-4xl lg:text-5xl">
                {hero.name}
              </h3>

              {/* Editorial Paragraph */}

              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--brown)] sm:mt-6 sm:text-base">
                Designed for modern living, this piece brings together
                thoughtful craftsmanship, timeless form, and everyday comfort.
                Every detail has been carefully considered to create furniture
                that feels as beautiful as it is functional.
              </p>

              {/* Short Description */}

              <p className="mt-4 max-w-sm text-xs leading-6 text-[var(--brown)]/80 sm:text-sm">
                {hero.description}
              </p>

              {/* Decorative Line */}

              <div className="mt-6 h-px w-10 bg-[var(--brass)] sm:mt-7" />

              {/* Desktop CTA */}

              <div className="mt-7 hidden lg:block">
                <Button href="/products">Explore Collection</Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
        SUPPORTING ARRIVALS
    ===================================================== */}

        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Section Title */}

          <Reveal
            className="
          mb-7
          flex
          items-center
          justify-between
          border-b
          border-[var(--line)]
          pb-5
          sm:mb-8
        "
          >
            <span className="serif text-3xl font-normal tracking-tight text-[var(--brass)] sm:text-4xl lg:text-5xl">
              More new arrivals
            </span>
          </Reveal>

          {/* Products Grid */}

          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14">
            {rest.map((item, index) => (
              <Reveal key={item.id} delay={180 + index * 90}>
                <article className="group cursor-pointer">
                  {/* Product Image */}

                  <div className="image-wrap relative aspect-[0.92] overflow-hidden bg-[#e8e2d8] sm:aspect-[1.02]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055]"
                    />

                    {/* Soft Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Tag */}

                    <div className="absolute left-4 top-4">
                      <span className="bg-white/90 px-2.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--charcoal)] backdrop-blur-sm sm:text-[0.7rem]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Hover Arrow */}

                    <div className="absolute bottom-4 right-4 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:h-9 sm:w-9 sm:text-sm">
                      ↗
                    </div>
                  </div>

                  {/* Product Information */}

                  <div className="mt-4 sm:mt-5">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div>
                        <p className="mb-1.5 text-[0.52rem] font-bold uppercase tracking-[0.16em] text-[var(--brass)] sm:mb-2 sm:text-[0.55rem]">
                          {item.category}
                        </p>

                        <h3 className="serif text-xl leading-none text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-2xl lg:text-3xl">
                          {item.name}
                        </h3>
                      </div>

                      {/* Arrow */}

                      <span className="pt-1 text-sm text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <p className="mt-2.5 max-w-xs text-xs leading-6 text-[var(--brown)] sm:mt-3">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* =====================================================
        MOBILE CTA
    ===================================================== */}

        <Reveal delay={400} className="mt-10 sm:mt-12 lg:hidden">
          <Button href="/products">View All New Pieces</Button>
        </Reveal>

        {/* =====================================================
        BOTTOM STATEMENT
    ===================================================== */}

        <Reveal delay={450} className="mt-12 sm:mt-14 lg:mt-16">
          <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[0.52rem] uppercase tracking-[0.2em] text-[var(--brown)] sm:text-[0.55rem]">
              Designed · Crafted · Customized
            </span>

            <span className="text-[0.52rem] uppercase tracking-[0.2em] text-[var(--brass)] sm:text-[0.55rem]">
              New season / 2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
