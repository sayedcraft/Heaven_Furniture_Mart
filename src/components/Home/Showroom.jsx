import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";

export default function Showroom() {
  return (
    <section className="bg-white py-0 border-t border-[var(--line)]">
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden group">
        <Reveal variant="clip" className="absolute inset-0">
          <Image
            src={images.showroom}
            alt="Heaven Furniture Mart showroom interior in Chattogram"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
        <Reveal
          delay={160}
          className="absolute bottom-0 left-0 right-0 lg:right-auto lg:w-1/2 bg-[var(--charcoal)]/95 backdrop-blur-sm px-8 py-12 sm:px-12 sm:py-16 text-[var(--ivory)] z-10"
        >
          <span className="eyebrow">Chattogram showroom</span>
          <h2 className="serif mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1]">
            See it. Feel it.
          </h2>
          <h2 className="serif text-4xl sm:text-5xl lg:text-6xl leading-[1] text-[var(--brass)]">
            Make it yours.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/80">
            Experience the materials, proportions and details in person at our
            showroom on Agrabad Access Road.
          </p>
          <div className="mt-10 space-y-2 text-xs">
            <p className="text-white/80">📍 Agrabad, Chattogram</p>
            <p className="text-[var(--brass)]">(+880) 1960-481983</p>
          </div>
          <Button href="#contact" variant="secondary" className="mt-10">
            Visit Our Showroom
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
