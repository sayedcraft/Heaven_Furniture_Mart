import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/categories";

export default function ShopByCategory() {
  return (
    <section id="categories" className="bg-[#f4f0e9] py-28 sm:py-40 lg:py-52">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-20 sm:mb-28">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-4">Shop by category</span>
            <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
              Explore our collections
            </h2>
          </div>
        </Reveal>

        {/* Asymmetric Bento Grid */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-12 lg:grid-rows-3">
          {/* Large Sofa - spans 2 cols, 2 rows */}
          <Reveal
            delay={0}
            className="lg:col-span-5 lg:row-span-2 group cursor-pointer"
          >
            <a href={`#${categories[0].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.95] sm:aspect-[1.05] lg:aspect-auto lg:h-[420px] overflow-hidden">
                <Image
                  src={categories[0].image}
                  alt={categories[0].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="mt-4 sm:mt-6">
                <h3 className="serif text-2xl sm:text-3xl lg:text-4xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[0].name}
                </h3>
                <p className="mt-2 text-xs text-[var(--brown)]">
                  {categories[0].description}
                </p>
              </div>
            </a>
          </Reveal>

          {/* Bed - spans 1 col, 1 row */}
          <Reveal
            delay={80}
            className="lg:col-span-3 lg:row-span-1 group cursor-pointer"
          >
            <a href={`#${categories[1].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.9] lg:h-[200px] overflow-hidden">
                <Image
                  src={categories[1].image}
                  alt={categories[1].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg sm:text-xl lg:text-2xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[1].name}
                </h3>
              </div>
            </a>
          </Reveal>

          {/* Dining Table - spans 1 col, 1 row */}
          <Reveal
            delay={120}
            className="lg:col-span-4 lg:row-span-1 group cursor-pointer"
          >
            <a href={`#${categories[2].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.9] lg:h-[200px] overflow-hidden">
                <Image
                  src={categories[2].image}
                  alt={categories[2].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg sm:text-xl lg:text-2xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[2].name}
                </h3>
              </div>
            </a>
          </Reveal>

          {/* Chair - spans 1 col, 1 row */}
          <Reveal
            delay={160}
            className="lg:col-span-3 lg:row-span-1 group cursor-pointer"
          >
            <a href={`#${categories[3].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.9] lg:h-[200px] overflow-hidden">
                <Image
                  src={categories[3].image}
                  alt={categories[3].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg sm:text-xl lg:text-2xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[3].name}
                </h3>
              </div>
            </a>
          </Reveal>

          {/* Mirror - spans 1 col, 1 row */}
          <Reveal
            delay={200}
            className="lg:col-span-2 lg:row-span-1 group cursor-pointer"
          >
            <a href={`#${categories[4].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[0.9] lg:h-[200px] overflow-hidden">
                <Image
                  src={categories[4].image}
                  alt={categories[4].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 17vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg sm:text-xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[4].name}
                </h3>
              </div>
            </a>
          </Reveal>

          {/* Other - spans 2 cols, 1 row */}
          <Reveal
            delay={240}
            className="lg:col-span-5 lg:row-span-1 group cursor-pointer"
          >
            <a href={`#${categories[5].slug}`} className="block h-full">
              <div className="image-wrap relative bg-[#d6cabb] aspect-[1.2] lg:h-[200px] overflow-hidden">
                <Image
                  src={categories[5].image}
                  alt={categories[5].name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg sm:text-xl lg:text-2xl group-hover:text-[var(--brass)] transition-colors">
                  {categories[5].name}
                </h3>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
