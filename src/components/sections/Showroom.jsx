import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";

export default function Showroom() {
  return (
    <section className="bg-[#e8e2d8] py-20 sm:py-28">
      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.35fr_.65fr] lg:gap-0">
          <Reveal
            variant="clip"
            className="image-wrap relative z-[1] aspect-[1.25] lg:-mr-8"
          >
            <Image
              src={images.showroom}
              alt="Heaven Furniture Mart showroom interior"
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            delay={160}
            className="relative z-[2] bg-[var(--charcoal)] px-7 py-10 text-[var(--ivory)] sm:px-12 sm:py-14 lg:-ml-0 lg:my-12"
          >
            <span className="eyebrow">Visit us in Chattogram</span>
            <h2 className="serif mt-5 text-5xl leading-[.9] sm:text-6xl">
              See it. Feel it. Make it yours.
            </h2>
            <p className="mt-7 text-sm leading-7 text-white/70">
              Experience the materials, proportions and details in person at our
              showroom on Agrabad Access Road, Chattogram.
            </p>
            <Button href="#contact" variant="secondary" className="mt-9">
              Visit Our Showroom
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
