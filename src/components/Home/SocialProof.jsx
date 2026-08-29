import Image from "next/image";
import { images } from "@/components/data";
import Reveal from "@/components/ui/Reveal";

export default function SocialProof() {
  return (
    <section className="border-t border-[var(--line)] bg-[#f4f0e9] py-28 sm:py-40 lg:py-52">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-24">

          {/* Image */}
          <Reveal
            variant="clip"
            delay={0}
            className="lg:col-span-5"
          >
            <div className="image-wrap relative aspect-[0.8] overflow-hidden bg-[#d6cabb] lg:aspect-[0.9]">
              <Image
                src={images.proof}
                alt="Elegant interior styled with Heaven Furniture Mart pieces"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Founder Quote */}
          <Reveal
            delay={150}
            className="lg:col-span-7"
          >
            <div>
              <span className="eyebrow mb-8 block">
                A note from our founder
              </span>

              <blockquote className="mb-12">
                <p className="serif text-2xl leading-[1.2] text-[var(--charcoal)] sm:text-3xl lg:text-4xl">
                  &ldquo;At Heaven Furniture Mart, we believe furniture is
                  more than just function; it is a reflection of lifestyle,
                  taste, and comfort. Every piece we create is designed to
                  bring lasting elegance into the homes of our clients.&rdquo;
                </p>
              </blockquote>

              <div className="mb-8 h-px w-12 bg-[var(--brass)]" />

              <div className="mb-12">
                <p className="serif mb-2 text-2xl text-[var(--charcoal)] sm:text-3xl">
                  Abul Kalam Bhuiyan
                </p>

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brass)]">
                  Managing Director
                </p>

                <p className="text-xs text-[var(--brown)]">
                  Agrabad, Chattogram
                </p>
              </div>

              <div className="border-t border-[var(--line)] pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brass)]">
                  Trusted by hundreds of happy homeowners across Chattogram
                  and beyond
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}