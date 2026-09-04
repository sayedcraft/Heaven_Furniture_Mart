import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const innovations = [
  {
    number: "01",
    title: "Space-Conscious Design",
    description:
      "Furniture that adapts to modern living, maximizing function without compromising on elegance.",
  },
  {
    number: "02",
    title: "Modular Solutions",
    description:
      "Pieces that evolve with your needs, from single rooms to entire homes.",
  },
  {
    number: "03",
    title: "Sustainable Materials",
    description:
      "Responsibly sourced wood and materials that endure for generations.",
  },
  {
    number: "04",
    title: "Smart Storage",
    description: "Intelligent organization built seamlessly into every piece.",
  },
];

export default function SmartInnovation() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ivory)] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Header + Image */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Heading */}
          <Reveal className="lg:col-span-5">
            <h2 className="serif max-w-xl text-5xl leading-[0.9] text-[var(--deep-brown)] sm:text-6xl lg:text-7xl">
              Intelligent
              <br />
              furniture.
              <br />
              <em className="font-normal text-[var(--brass)]">
                Thoughtfully made.
              </em>
            </h2>

            <p className="mt-7 max-w-md text-xl leading-7 text-[var(--brown)]">
              Every Heaven Furniture Mart piece combines timeless design
              principles with contemporary thinking — creating furniture that
              works beautifully in modern life.
            </p>
          </Reveal>

          {/* Image */}
          <Reveal variant="clip" delay={160} className="lg:col-span-7">
            <div className="group relative overflow-hidden bg-[var(--wood-tan)] rounded-[var(--image-radius)]">
              <div className="image-wrap relative aspect-[1.35] sm:aspect-[1.55] lg:aspect-[1.65]">
                <Image
                  src="/image/Office.jpg"
                  alt="Modern workspace furniture by Heaven Furniture Mart"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Top label */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="border-[var(--ivory)]/30 bg-[var(--deep-brown)]/10 px-3 py-2 text-[0.9rem] uppercase tracking-[0.2em] text-[var(--ivory)]/90 backdrop-blur-sm">
                    Modern workspace
                  </span>
                </div>

                {/* Number */}

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/60">
                        Designed for modern living
                      </p>

                      <p className="serif text-2xl leading-none text-white sm:text-3xl">
                        Form meets function.
                      </p>
                    </div>

                    <span className="hidden text-[0.55rem] uppercase tracking-[0.18em] text-white/60 sm:block">
                      Chattogram
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Innovation system */}
        <div className="mt-16 border-t border-[var(--line)] sm:mt-20 lg:mt-28">
          {/* Section label */}
          <Reveal>
            <div className="flex items-center justify-between border-b border-[var(--line)] py-5">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brass)]">
                The innovation system
              </span>

              <span className="text-xs uppercase tracking-[0.18em] text-[var(--brown)]">
                04 principles
              </span>
            </div>
          </Reveal>

          {/* Innovation list */}
          <div className="grid lg:grid-cols-2">
            {innovations.map((innovation, index) => (
              <Reveal
                key={innovation.number}
                delay={index * 80}
                className={`
                  group
                  border-b border-[var(--line)]
                  ${index % 2 === 0 ? "lg:border-r" : ""}
                `}
              >
                <article className="relative min-h-[250px] overflow-hidden p-6 transition-colors duration-500 hover:bg-[var(--surface)] sm:p-8 lg:min-h-[280px] lg:p-10">
                  {/* Background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-7 font-serif text-[9rem] leading-none text-[var(--deep-brown)]/[0.035] transition-all duration-700 group-hover:-translate-x-2 group-hover:text-[var(--brass)]/[0.08] sm:text-[11rem]"
                  >
                    {innovation.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="text-[0.55rem] font-bold tracking-[0.18em] text-[var(--brass)]">
                        {innovation.number}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-sm text-[var(--brown)] opacity-50 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[var(--brass)] group-hover:text-[var(--brass)] group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <div className="mt-14 max-w-md">
                      <h3 className="serif text-2xl leading-[1.05] text-[var(--deep-brown)] sm:text-3xl">
                        {innovation.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-xs leading-6 text-[var(--brown)] sm:text-sm">
                        {innovation.description}
                      </p>
                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--brass)] transition-all duration-700 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
