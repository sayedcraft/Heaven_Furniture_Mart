import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";
import Link from "next/link";

export default function Showroom() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--charcoal)]"
    >
      {/* Main showroom image */}
      <div className="relative min-h-[720px] sm:min-h-[780px] lg:min-h-[850px]">

        <Reveal
          variant="clip"
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={images.showroom}
              alt="Heaven Furniture Mart showroom interior in Chattogram"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1800ms] ease-out hover:scale-[1.025]"
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* Architectural frame */}
        <div className="pointer-events-none absolute inset-5 border border-white/15 sm:inset-8 lg:inset-10" />

        {/* Top label */}
        <Reveal
          delay={100}
          className="absolute left-8 top-8 z-10 sm:left-12 sm:top-12 lg:left-16 lg:top-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brass)]" />

            <span className="text-[0.8rem] font-bold uppercase tracking-[0.22em] text-white/75">
              Heaven Furniture Mart
            </span>
          </div>
        </Reveal>

        {/* Main editorial content */}
        <Reveal
          delay={180}
          className="absolute bottom-10 left-8 z-10 max-w-xl text-white sm:bottom-14 sm:left-12 lg:bottom-20 lg:left-16"
        >
          <span className="eyebrow mb-5 block text-white/70">
            Chattogram showroom
          </span>

          <h2 className="serif text-4xl leading-[0.9] sm:text-6xl lg:text-8xl">
            See it.
            <br />
            Feel it.
            <br />
            <em className="font-normal text-[var(--brass)]">
              Make it yours.
            </em>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:mt-8">
            Experience the materials, proportions and details in person at
            our showroom on Agrabad Access Road.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-[0.6rem] uppercase tracking-[0.16em]">
            <span className="text-white/70">
              Agrabad, Chattogram
            </span>

            <span className="text-[var(--brass)]">
              +880 1960-481983
            </span>
          </div>

          <Button href="/showroom">Visit Our Showroom</Button>
            
        </Reveal>

        {/* Floating side information */}
        <Reveal
          delay={300}
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        >
          <div className="flex flex-col items-center gap-5">
            <span className="h-16 w-px bg-white/30" />

            <span
              className="text-[0.55rem] uppercase tracking-[0.3em] text-white/60"
              style={{ writingMode: "vertical-rl" }}
            >
              Crafted in Chattogram
            </span>

            <span className="h-16 w-px bg-[var(--brass)]/70" />
          </div>
        </Reveal>

        {/* Bottom corner index */}
        <div className="absolute bottom-8 right-8 z-10 hidden sm:block lg:bottom-12 lg:right-14">
          <div className="flex items-center gap-4 text-white/50">
            <span className="text-[0.55rem] uppercase tracking-[0.2em]">
              Showroom
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}