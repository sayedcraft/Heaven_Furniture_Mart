import Image from "next/image";
import Button from "@/components/ui/Button";
import { images } from "@/components/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[680px] items-end overflow-hidden bg-[var(--charcoal)] pb-16 pt-32 text-[var(--ivory)] sm:min-h-[760px] sm:pb-24 lg:min-h-[820px]"
    >
      <Image
        src={images.hero}
        alt="Warm, contemporary living room with crafted wood furniture"
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-center opacity-65"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,42,43,.9)_0%,rgba(18,42,43,.55)_48%,rgba(18,42,43,.15)_100%)]"></div>
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="hero-copy max-w-3xl">
          <p className="eyebrow mb-6">Designed. Crafted. Customized.</p>
          <h1 className="serif max-w-3xl text-6xl leading-[0.86] sm:text-8xl lg:text-[8.5rem]">
            Furniture,
            <br />
            <em className="font-normal text-[var(--brass)]">crafted</em> around
            you.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/80 sm:text-base">
            Thoughtfully designed and expertly crafted furniture, customized to
            your space, style, and everyday life.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="#contact">Request a Quote</Button>
            <a
              href="#collections"
              className="line-link text-xs font-bold uppercase tracking-[0.15em]"
            >
              Explore Collections{" "}
              <span className="ml-2 text-[var(--brass)]">↘</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta absolute bottom-7 right-5 hidden text-right text-[0.6rem] uppercase tracking-[0.2em] text-white/60 sm:block lg:right-12">
        <span className="block text-[var(--brass)]">Since 2020</span>Chattogram,
        Bangladesh
      </div>
    </section>
  );
}
