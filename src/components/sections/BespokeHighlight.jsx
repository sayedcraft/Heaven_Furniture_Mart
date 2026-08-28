import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { images } from "@/components/data";
import Reveal from "@/components/ui/Reveal";

export default function BespokeHighlight() {
  return (
    <section
      id="bespoke"
      className="relative overflow-hidden bg-[var(--charcoal)] py-20 text-[var(--ivory)] sm:py-28"
    >
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <span className="serif pointer-events-none absolute -left-3 -top-16 hidden text-[15rem] leading-none text-white/[.035] lg:block">
            01
          </span>
          <Reveal
            variant="clip"
            className="relative z-[1] image-wrap aspect-[1.05] border border-[var(--brass)]/40 p-3 sm:aspect-[1.25]"
          >
            <div className="image-wrap relative h-full w-full">
              <Image
                src={images.bespoke}
                alt="Bespoke furniture and interior styling detail"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="relative z-[1]" delay={160}>
            <span className="eyebrow">The bespoke service</span>
            <h2 className="serif mt-5 text-5xl leading-[.9] sm:text-7xl">
              Made for your space.
              <br />
              <em className="font-normal text-[var(--brass)]">Made for you.</em>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/70">
              Your home is not one-size-fits-all. We shape each piece around the
              way you live, from its dimensions and materials to its finish,
              color and functionality.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-x-8 gap-y-0 text-xs text-white/70">
              {["Dimensions", "Materials", "Finishes", "Functionality"].map(
                (attribute, index) => (
                  <span
                    key={attribute}
                    className="attribute-row border-b border-white/15 py-3"
                  >
                    <b className="mr-3 font-normal text-[var(--brass)]">
                      0{index + 1}
                    </b>
                    {attribute}
                  </span>
                ),
              )}
            </div>
            <Button href="#contact" variant="secondary" className="mt-10">
              Start Your Custom Piece
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
