import Image from "next/image";
import Container from "@/components/ui/Container";
import { collections } from "@/components/data";
import Reveal from "@/components/ui/Reveal";

export default function Collections() {
  return (
    <section id="collections" className="py-24 sm:py-32">
      <Container>
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">The collection</span>
            <h2 className="serif mt-4 text-5xl leading-none sm:text-6xl">
              Made to live with.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-6 text-[var(--brown)] sm:block">
            A snapshot of the worlds we create. Every piece begins with a
            conversation.
          </p>
        </Reveal>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-0">
          {collections.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 90}
              className={`collection-card ${index === 0 ? "lg:col-span-4" : index === 1 ? "lg:col-span-3 lg:mt-24" : index === 2 ? "lg:col-span-3 lg:mt-8" : "lg:col-span-2 lg:mt-40"}`}
            >
              <article>
                <div
                  className={`image-wrap relative bg-[#ddd3c5] ${index === 0 ? "aspect-[.78]" : index === 1 ? "aspect-[.7]" : index === 2 ? "aspect-[.86]" : "aspect-[.68]"}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} furniture collection`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="collection-caption flex items-start justify-between gap-3 border-b border-[var(--line)] py-5">
                  <div>
                    <h3 className="serif text-3xl">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[var(--brown)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="collection-arrow pt-2 text-lg text-[var(--brass)]">
                    ↗
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
