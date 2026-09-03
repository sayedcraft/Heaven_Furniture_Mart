import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MapSection from "@/components/Home/MapSection";

export const metadata = {
  title: "Showroom | Heaven Furniture Mart",
  description:
    "Visit Heaven Furniture Mart in Chattogram to experience furniture, materials, and craftsmanship in person.",
};

export default function Showroom() {
  return (
    <main className="bg-[var(--ivory)] text-[var(--deep-brown)]">
      <section className="px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-5xl">
        
            <h1 className="serif mt-5 text-5xl leading-[0.92] text-[var(--deep-brown)] sm:text-6xl lg:text-7xl">
              Visit our{" "}
              <em className="font-normal text-[var(--brass)]">showroom.</em>
            </h1>
            <span className="mt-8 block h-px w-14 bg-[var(--brass)]" />
            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--brown)] sm:text-lg">
              See the materials, proportions, and details up close. Take your
              time, and find what belongs in your space.
            </p>
          </Reveal>
        </div>
      </section>

      <MapSection />

      <section className="px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="eyebrow">Come by and see</p>
          <h2 className="serif mx-auto mt-5 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Your next piece may be waiting{" "}
            <em className="font-normal text-[var(--brass)]">here.</em>
          </h2>
          <Link
            href="/contact"
            className="line-link mt-8 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors hover:text-[var(--brass)]"
          >
            Speak with the studio{" "}
            <span className="ml-3 text-[var(--brass)]">↗</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
