
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Comfort, character and considered design.",
    image: "/image/Livingroom.avif",
    href: "/products?category=living-room",
    number: "01",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Quiet spaces designed for better living.",
    image: "/image/Bedroom.avif",
    href: "/products?category=bedroom",
    number: "02",
  },
  {
    id: "dining",
    name: "Dining",
    description: "Gather, share and make every moment matter.",
    image: "/image/Diningroom.avif",
    href: "/products?category=dining",
    number: "03",
  },
  {
    id: "all",
    name: "All Pieces",
    description: "Curated pieces for beautifully lived spaces.",
    image: "/image/Wardrobe.avif",
    href: "/products",
    number: "04",
  },
];

export default function ShopByCategory() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ivory)] py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <Reveal className="mb-9 sm:mb-11 lg:mb-13">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="serif text-3xl leading-[0.95] tracking-[-0.025em] text-[var(--deep-brown)] sm:text-4xl lg:text-[3.2rem]">
                Shop by Category
              </h2>
            </div>

            <Link
              href="/products"
              className="group mb-1 inline-flex shrink-0 items-center gap-2.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors duration-300 hover:text-[var(--brass)] sm:text-[0.62rem] lg:text-[0.65rem]"
            >
              <span className='text-sm'>View All</span>

              <span className="text-sm text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1 sm:text-[0.95rem]">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {/* CATEGORY GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 60} >
              <Link href={category.href} className="group block">
                {/* IMAGE */}
                <div className="relative aspect-[0.9] overflow-hidden rounded-[var(--image-radius)] bg-[var(--sand)]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                  />

                  {/* SUBTLE IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-[var(--deep-brown)]/0 transition-colors duration-500 group-hover:bg-[var(--deep-brown)]/[0.08]" />

                  {/* ARROW */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      translate-y-1
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      bg-white/10
                      text-sm
                      text-white
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      sm:right-5
                      sm:top-5
                    "
                  >
                    ↗
                  </div>
                </div>

                {/* CONTENT BELOW IMAGE */}
                <div className="border-b border-[var(--line)] py-3.5 sm:py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3
                        className="
                          serif
                          text-xl
                          leading-none
                          text-[var(--deep-brown)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--brass)]
                          sm:text-[1.4rem]
                          lg:text-[1.5rem]
                        "
                      >
                        {category.name}
                      </h3>
                    </div>

                    {/* SMALL ARROW */}
                    <span
                      className="
                        mt-0.5
                        shrink-0
                        text-xs
                        text-[var(--brass)]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        sm:text-sm
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

