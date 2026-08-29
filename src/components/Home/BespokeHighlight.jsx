import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";
import Link from "next/link";

const customization = [
  {
    number: "01",
    title: "Dimensions",
    text: "Precisely shaped around your space.",
  },
  {
    number: "02",
    title: "Materials",
    text: "Selected for character and longevity.",
  },
  {
    number: "03",
    title: "Finishes",
    text: "Tailored to your interior palette.",
  },
  {
    number: "04",
    title: "Function",
    text: "Designed around how you live.",
  },
];

export default function BespokeHighlight() {
  return (
    <section
      id="bespoke"
      className="relative overflow-hidden border-t border-[var(--brass)]/20 bg-[var(--charcoal)] py-24 text-[var(--ivory)] sm:py-32 lg:py-40"
    >
      {/* Oversized background number */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section intro */}
        <Reveal className="mb-14 sm:mb-20 lg:mb-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="serif max-w-3xl text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                Your space.
                <br />
                Your vision.
                <br />
                <em className="font-normal text-[var(--brass)]">Your piece.</em>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-xl leading-7 text-white/65">
                Bespoke furniture designed around your dimensions, your
                lifestyle and the character of your home.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main editorial composition */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Image composition */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 sm:gap-5">
              {/* Main image */}
              <Reveal variant="clip" delay={0} className="col-span-12">
                <div className="group relative aspect-[1.12] overflow-hidden bg-[#28595a] sm:aspect-[1.18] lg:aspect-[1.15]">
                  <Image
                    src={images.bespoke}
                    alt="Bespoke custom furniture design"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Corner label */}
                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                    <span className="border border-white/30 bg-black/10 px-3 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                      Bespoke studio
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-7 sm:top-7">
                    ↗
                  </div>

                  {/* Image caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/60">
                          Designed around you
                        </p>

                        <p className="serif text-2xl text-white sm:text-3xl">
                          Nothing off the shelf.
                        </p>
                      </div>

                      <span className="hidden text-[0.55rem] uppercase tracking-[0.18em] text-white/60 sm:block">
                        01 / 02
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Secondary detail image */}
              <Reveal
                variant="clip"
                delay={140}
                className="col-span-8 sm:col-span-8"
              >
                <div className="group relative aspect-[1.7] overflow-hidden bg-[#28595a]">
                  <Image
                    src="/image/Custom.jpg"
                    alt="Custom bespoke furniture detail"
                    fill
                    sizes="(max-width: 1024px) 70vw, 40vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6">
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-white/80">
                      Handcrafted detail
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Small editorial block */}
              <Reveal delay={200} className="col-span-4 sm:col-span-4">
                <div className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden border border-white/15 bg-white/[0.025] p-5 transition-all duration-500 hover:border-[var(--brass)]/50 hover:bg-white/[0.05] sm:min-h-[220px] sm:p-6">
                  {/* Decorative background number */}

                  {/* Top */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="h-px w-10 bg-[var(--brass)]/50 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--brass)]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-10">
                    <h3 className="serif text-2xl leading-[1.05] text-white/90 sm:text-3xl">
                      Crafted
                      <br />
                      <span className="text-[var(--brass)]">
                        in Chattogram.
                      </span>
                    </h3>

                    <p className="mt-4 max-w-[220px] text-[0.65rem] leading-5 text-white/45">
                      Thoughtful design, skilled craftsmanship and furniture
                      made with intention.
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative z-10 mt-6 flex items-center gap-2 text-[0.5rem] uppercase tracking-[0.18em] text-white/35">
                    <span className="h-1 w-1 rounded-full bg-[var(--brass)]" />
                    Heaven Furniture Mart
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Editorial content */}
          <Reveal delay={180} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-center lg:pl-6 xl:pl-10">
              <span className="mb-6 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
                The bespoke process
              </span>

              <h3 className="serif max-w-lg text-4xl leading-[1] sm:text-5xl lg:text-6xl">
                Made for your space.
                <br />
                <span className="text-[var(--brass)]">Made for you.</span>
              </h3>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
                Your home is not one-size-fits-all. We shape every piece around
                the way you live — from its dimensions and materials to its
                finish, color and functionality.
              </p>

              {/* Customization list */}
              <div className="mt-10 border-t border-white/15">
                {customization.map((item) => (
                  <div
                    key={item.number}
                    className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 border-b border-white/10 py-4 transition-all duration-300 hover:pl-2 sm:grid-cols-[45px_1fr_auto]"
                  >
                    <span className="text-[0.55rem] tracking-[0.16em] text-[var(--brass)]">
                      {item.number}
                    </span>

                    <div>
                      <p className="serif text-lg text-white/90 sm:text-xl">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[0.65rem] leading-5 text-white/40">
                        {item.text}
                      </p>
                    </div>

                    <span className="text-sm text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--brass)]">
                      ↗
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Button>
                  <Link href={"/contact"}>Start Your Custom Piece</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
