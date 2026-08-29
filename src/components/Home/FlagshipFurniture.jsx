import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";
import Link from "next/link";

export default function FlagshipFurniture() {
  const products = getFeaturedProducts();
  const featured = products[0];
  const supporting = products.slice(1, 5);

  if (!featured) return null;

  return (
    <section
      id="flagship"
      className="relative overflow-hidden bg-[#f4f0e9] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* ───────────────── Header ───────────────── */}
        <Reveal className="mb-14 sm:mb-20">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="serif max-w-3xl text-5xl leading-[0.92] text-[var(--charcoal)] sm:text-6xl lg:text-7xl">
                Furniture that
                <br />
                <em className="font-normal text-[var(--brass)]">
                  defines a room.
                </em>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-xl leading-7 text-[var(--brown)]">
                A considered selection of signature pieces, shaped by
                proportion, material and craftsmanship.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ───────────────── Editorial Grid ───────────────── */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
          {/* ───────────── Featured Product ───────────── */}
          <Reveal variant="clip" delay={0} className="lg:col-span-7">
            <article className="group">
              <div className="image-wrap relative aspect-[1/1.05] overflow-hidden bg-[#d6cabb] sm:aspect-[1.15] lg:aspect-[0.98]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Dark cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Label */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="border border-white/40 bg-black/10 px-3 py-2 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Signature piece
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7">
                  ↗
                </div>

                {/* Product information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
                  <div className="translate-y-2 transition-transform duration-700 group-hover:translate-y-0">
                    <p className="mb-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-white/70">
                      {featured.category}
                    </p>

                    <h3 className="serif text-3xl leading-[1] text-white sm:text-4xl lg:text-5xl">
                      {featured.name}
                    </h3>

                    {featured.description && (
                      <p className="mt-3 max-w-md text-xs leading-6 text-white/75 sm:text-sm">
                        {featured.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ───────────── Supporting Products ───────────── */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:col-span-5 lg:gap-x-6 lg:gap-y-9">
            {supporting.map((product, index) => (
              <Reveal key={product.id} delay={100 + index * 70}>
                <article className="group">
                  {/* Image */}
                  <div className="image-wrap relative aspect-[0.95] overflow-hidden bg-[#d6cabb]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <span className="absolute left-3 top-3 text-[0.55rem] font-medium tracking-[0.18em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:left-4 sm:top-4">
                      0{index + 2}
                    </span>

                    {/* Arrow */}
                    <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4">
                      ↗
                    </span>
                  </div>

                  {/* Product info */}
                  <div className="mt-3 sm:mt-4">
                    <p className="mb-1 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-[var(--brass)]">
                      {product.category}
                    </p>

                    <div className="flex items-start justify-between gap-2">
                      <h4 className="serif text-base leading-tight text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-lg">
                        {product.name}
                      </h4>

                      <span className="mt-0.5 shrink-0 text-sm text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ───────────────── Bottom Navigation ───────────────── */}
        <Reveal delay={400} className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-5 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[var(--brass)]" />

              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--brown)]">
                Selected pieces
              </span>
            </div>

            <Button>
              <Link href={"/products"}>Explore Collection</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
