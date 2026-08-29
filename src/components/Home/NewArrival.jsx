import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function NewArrival() {
  const newArrivals = [
    {
      id: "new-1",
      name: "The Modern Settee",
      category: "Sofa",
      image: "/image/Livingroom.jpg",
      description: "Contemporary comfort meets classic proportions",
    },
    {
      id: "new-2",
      name: "The Platform Bed",
      category: "Bed",
      image: "/image/Bedroom.jpg",
      description: "Minimalist design with maximum comfort",
    },
    {
      id: "new-3",
      name: "The Extending Table",
      category: "Dining",
      image: "/image/Diningroom.jpg",
      description: "Adaptable elegance for every occasion",
    },
    {
      id: "new-4",
      name: "The Library Shelving",
      category: "Storage",
      image: "/image/Wardrobe.jpg",
      description: "Display and storage refined to an art",
    },
  ];

  return (
    <section className="bg-white py-28 sm:py-40 lg:py-52 border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-20 sm:mb-28">
          <span className="eyebrow block mb-4">Just in</span>
          <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
            New arrivals
          </h2>
        </Reveal>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-12 auto-rows-[380px] mb-16">
          {newArrivals.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 80}
              className={`group cursor-pointer ${
                idx === 0
                  ? "lg:col-span-6"
                  : idx === 1
                    ? "lg:col-span-3 lg:row-start-1"
                    : idx === 2
                      ? "lg:col-span-3 lg:row-start-1"
                      : "lg:col-span-6"
              }`}
            >
              <div className="h-full flex flex-col">
                <div className="image-wrap relative bg-[#e8e2d8] flex-grow overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--brass)] font-bold mb-2">
                    {item.category}
                  </p>
                  <h3 className="serif text-2xl sm:text-3xl group-hover:text-[var(--brass)] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[var(--brown)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="flex justify-start">
          <Button href="#products">View All New Pieces</Button>
        </Reveal>
      </div>
    </section>
  );
}
