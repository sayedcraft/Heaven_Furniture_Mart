import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About | Heaven Furniture Mart",
  description:
    "Discover the craftsmanship and furniture philosophy behind Heaven Furniture Mart in Chattogram.",
};

const principles = [
  [
    "Craftsmanship",
    "Made with patience, precision, and respect for the material.",
  ],
  ["Materials", "Natural textures and considered finishes chosen to last."],
  ["Detail", "Small decisions that make a piece feel unmistakably yours."],
  ["Longevity", "Furniture designed to live beautifully through the years."],
];

export default function About() {
  return (
    <main className="bg-[var(--ivory)] text-[var(--deep-brown)]">
      <section className="px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-4xl">
            <h1 className="serif mt-5 text-5xl leading-[0.92] text-[var(--deep-brown)] sm:text-6xl lg:text-7xl">
              Furniture with a sense of{" "}
              <em className="font-normal text-[var(--brass)]">belonging.</em>
            </h1>
            <span className="mt-8 block h-px w-14 bg-[var(--brass)]" />
            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--brown)] sm:text-lg">
              Heaven Furniture Mart is a Chattogram furniture studio creating
              thoughtful pieces for considered spaces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="image-wrap relative aspect-[1.05] bg-[var(--wood-tan)] sm:aspect-[1.2]">
              <Image
                src="/image/Livingroom.avif"
                alt="Warm living room interior furnished by Heaven Furniture Mart"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex items-center lg:col-span-5">
            <div className="max-w-lg">
              <p className="eyebrow">A local point of view</p>
              <h2 className="serif mt-5 text-4xl leading-[0.95] sm:text-5xl">
                Made for the life around it.
              </h2>
              <span className="mt-7 block h-px w-12 bg-[var(--brass)]" />
              <p className="mt-7 text-sm leading-7 text-[var(--brown)] sm:text-base">
                The best furniture does more than fill a room. It settles into
                daily rituals, holds memories, and gives a space its character.
                From our showroom in Chattogram, we bring together practical
                proportion, warm materials, and enduring craft.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="serif mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Quiet decisions.{" "}
              <em className="font-normal text-[var(--brass)]">
                Lasting character.
              </em>
            </h2>
          </Reveal>
          <div className="mt-14 grid border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([title, text], index) => (
              <Reveal
                key={title}
                delay={index * 70}
                className="border-b border-[var(--line)] py-7 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:py-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                  0{index + 1}
                </p>
                <h3 className="serif mt-8 text-2xl">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--brown)]">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--deep-brown)] px-5 py-20 text-[var(--ivory)] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Bespoke by nature</p>
            <h2 className="serif mt-5 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
              Your space deserves a piece made{" "}
              <em className="font-normal text-[var(--brass)]">around it.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="max-w-md text-sm leading-7 text-[var(--ivory)]/65 sm:text-base">
              From dimensions and materials to finish and function, we shape
              custom furniture around the way you live.
            </p>
            <Button href="/contact" className="mt-8">
              Discuss your space
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="eyebrow">Begin with a conversation</p>
          <h2 className="serif mx-auto mt-5 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Find the piece that feels{" "}
            <em className="font-normal text-[var(--brass)]">like yours.</em>
          </h2>
          <Link
            href="/products"
            className="line-link mt-8 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors hover:text-[var(--brass)]"
          >
            Explore the collection{" "}
            <span className="ml-3 text-[var(--brass)]">↗</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
