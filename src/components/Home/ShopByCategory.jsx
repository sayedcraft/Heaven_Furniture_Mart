import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Comfort, character and considered design.",
    image: "/image/Livingroom.jpg",
    href: "/products?category=living-room",
    number: "01",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Quiet spaces designed for better living.",
    image: "/image/Bedroom.jpg",
    href: "/products?category=bedroom",
    number: "02",
  },
  {
    id: "dining",
    name: "Dining",
    description: "Gather, share and make every moment matter.",
    image: "/image/Diningroom.jpg",
    href: "/products?category=dining",
    number: "03",
  },
  {
    id: "all",
    name: "All Pieces",
    description: "Curated pieces for beautifully lived spaces.",
    image: "/image/Wardrobe.jpg",
    href: "/products",
    number: "04",
  },
];

export default function ShopByCategory() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[#f8f6f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Reveal className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-end justify-between gap-6">
            {/* Left — Main Title */}
            <div>
              <h2 className="serif text-4xl leading-[0.9] tracking-[-0.025em] text-[var(--deep-brown)] sm:text-4xl lg:text-[3.5rem]">
                <span className="relative inline-block">Category</span>
              </h2>
            </div>

            {/* Right — View All */}
            <Link
              href="/products"
              className="group mb-1 inline-flex shrink-0 items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--deep-brown)] transition-colors duration-300 hover:text-[var(--brass)] sm:text-xl"
            >
              <span>View All</span>

              <span className="text-base text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Category Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 90} variant="clip">
              <Link href={category.href} className="group block">
                <div className="image-wrap relative aspect-[0.82] overflow-hidden rounded-[var(--image-radius)] bg-[#e8e2d8]">
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.055]"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Number */}
                  <span className="absolute left-5 top-5 text-[0.58rem] font-medium tracking-[0.2em] text-white/70 sm:left-6 sm:top-6">
                    {category.number}
                  </span>

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-6 sm:top-6">
                    ↗
                  </div>

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                      {/* Category Name */}
                      <h3 className="serif text-2xl leading-tight text-white sm:text-3xl">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/70 sm:text-sm">
                        {category.description}
                      </p>
                    </div>
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
