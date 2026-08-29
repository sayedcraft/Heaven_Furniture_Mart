import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";

export default function BespokeHighlight() {
  return (
    <section
      id="bespoke"
      className="relative overflow-hidden bg-[var(--charcoal)] py-28 sm:py-40 lg:py-52 text-[var(--ivory)] border-t border-[var(--brass)]/20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <span className="serif pointer-events-none absolute -right-8 top-0 lg:-right-16 lg:top-12 text-[18rem] sm:text-[24rem] lg:text-[32rem] leading-none text-white/[.05] font-light z-0">
          01
        </span>

        <div className="relative grid gap-12 sm:gap-16 lg:gap-20 grid-cols-1 lg:grid-cols-12 items-start z-10">
          {/* Large Featured Image - Left 60% */}
          <Reveal variant="clip" delay={0} className="lg:col-span-7 relative">
            <div className="image-wrap relative bg-[#2a5f60] aspect-[0.95] lg:aspect-[1.1] overflow-hidden group">
              <Image
                src={images.bespoke}
                alt="Bespoke custom furniture design"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-[var(--brass)]/30 group-hover:border-[var(--brass)]/60 transition-colors duration-500"></div>
            </div>
          </Reveal>

          {/* Editorial Text Panel - Right 40% */}
          <Reveal delay={160} className="lg:col-span-5 relative">
            <div>
              <span className="eyebrow block mb-6">Made to order</span>
              <h2 className="serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
                Made for your space.
              </h2>
              <h3 className="serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--brass)] mb-12">
                Made for you.
              </h3>

              <p className="text-sm leading-8 text-white/80 mb-12 max-w-lg">
                Your home is not one-size-fits-all. We shape each piece around
                the way you live, from its dimensions and materials to its
                finish, color and functionality. Every custom piece is an
                extension of your space and personality.
              </p>

              {/* Customization Attributes */}
              <div className="mb-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8">
                {["Dimensions", "Materials", "Finishes", "Functionality"].map(
                  (attr) => (
                    <div
                      key={attr}
                      className="group cursor-default hover:translate-x-1 transition-transform duration-300"
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-white/60 group-hover:text-[var(--brass)] transition-colors duration-300">
                        {attr}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <Button href="#contact" variant="secondary">
                Start Your Custom Design
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
