
import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/components/data";

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
      className="
        relative overflow-hidden
        border-t border-[var(--brass)]/20
        bg-[var(--deep-brown)]
        py-12
        text-[var(--ivory)]
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[1500px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        {/* =====================================================
        SECTION HEADER
        ===================================================== */}

        <Reveal
          className="
            mb-10
            text-center
            sm:mb-14
            md:mb-16
            lg:mb-20
          "
        >
          <h2
            className="
              serif
              mx-auto
              max-w-4xl
              text-center
              text-[2.5rem]
              leading-[0.95]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[5.5rem]
            "
          >
            Your space.
            <br />
            Your vision.
            <br />
            <em className="font-normal text-[var(--brass)]">
              Our piece.
            </em>
          </h2>
        </Reveal>

        {/* =====================================================
        MAIN EDITORIAL COMPOSITION
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            sm:gap-10
            lg:grid-cols-12
            lg:gap-7
          "
        >
          {/* =================================================
          IMAGE COMPOSITION
          ================================================= */}

          <div className="min-w-0 lg:col-span-7">
            <div
              className="
                grid
                grid-cols-12
                gap-3
                sm:gap-4
                md:gap-5
              "
            >
              {/* Main image */}

              <Reveal
                variant="clip"
                delay={0}
                className="col-span-12 min-w-0"
              >
                <div
                  className="
                    group
                    relative
                    aspect-[1.05]
                    w-full
                    overflow-hidden
                    bg-[var(--wood-tan)]
                    sm:aspect-[1.18]
                    lg:aspect-[1.15]
                  "
                >
                  <Image
                    src={images.bespoke}
                    alt="Bespoke custom furniture design"
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 100vw,
                      58vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* Cinematic overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Corner label */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      sm:left-5
                      sm:top-5
                      md:left-7
                      md:top-7
                    "
                  >
                    <span
                      className="
                        inline-block
                        border-[var(--ivory)]/30
                        bg-[var(--deep-brown)]/10
                        px-2.5
                        py-1.5
                        text-[0.52rem]
                        uppercase
                        tracking-[0.16em]
                        text-[var(--ivory)]/90
                        backdrop-blur-sm
                        sm:px-3
                        sm:py-2
                        sm:text-[0.62rem]
                        sm:tracking-[0.2em]
                      "
                    >
                      Bespoke Studio
                    </span>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-8
                      w-8
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      text-sm
                      text-white
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      sm:right-5
                      sm:top-5
                      sm:h-9
                      sm:w-9
                      md:right-7
                      md:top-7
                      md:h-10
                      md:w-10
                    "
                  >
                    ↗
                  </div>

                  {/* Image caption */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-4
                      sm:p-6
                      md:p-7
                    "
                  >
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p
                          className="
                            mb-1
                            text-[0.5rem]
                            uppercase
                            tracking-[0.16em]
                            text-white/60
                            sm:text-[0.55rem]
                            sm:tracking-[0.2em]
                          "
                        >
                          Designed around you
                        </p>

                        <p
                          className="
                            serif
                            text-xl
                            leading-tight
                            text-white
                            sm:text-2xl
                            md:text-3xl
                          "
                        >
                          Nothing off the shelf.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Secondary detail image */}

              <Reveal
                variant="clip"
                delay={140}
                className="col-span-8 min-w-0 sm:col-span-8"
              >
                <div
                  className="
                    group
                    relative
                    aspect-[1.55]
                    w-full
                    overflow-hidden
                    bg-[var(--wood-tan)]
                    sm:aspect-[1.7]
                  "
                >
                  <Image
                    src="/image/Custom.jpg"
                    alt="Custom bespoke furniture detail"
                    fill
                    sizes="
                      (max-width: 640px) 66vw,
                      (max-width: 1024px) 70vw,
                      40vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[var(--deep-brown)]/10
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      sm:bottom-4
                      sm:left-5
                      md:bottom-5
                      md:left-6
                    "
                  >
                    <span
                      className="
                        text-[0.48rem]
                        uppercase
                        tracking-[0.16em]
                        text-white/80
                        sm:text-[0.55rem]
                        sm:tracking-[0.2em]
                      "
                    >
                      Handcrafted Detail
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Small editorial block */}

              <Reveal
                delay={200}
                className="col-span-4 min-w-0 sm:col-span-4"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[150px]
                    flex-col
                    justify-between
                    overflow-hidden
                    border
                    border-white/15
                    bg-white/[0.025]
                    p-3.5
                    transition-all
                    duration-500
                    hover:border-[var(--brass)]/50
                    hover:bg-white/[0.05]
                    sm:min-h-[190px]
                    sm:p-5
                    md:min-h-[220px]
                    md:p-6
                  "
                >
                  {/* Top accent */}

                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className="
                        h-px
                        w-7
                        bg-[var(--brass)]/50
                        transition-all
                        duration-500
                        group-hover:w-12
                        group-hover:bg-[var(--brass)]
                        sm:w-10
                        sm:group-hover:w-16
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="relative z-10 mt-6 sm:mt-8 md:mt-10">
                    <h3
                      className="
                        serif
                        text-lg
                        leading-[1.05]
                        text-white/90
                        sm:text-2xl
                        md:text-3xl
                      "
                    >
                      Crafted
                      <br />
                      <span className="text-[var(--brass)]">
                        in Chattogram.
                      </span>
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[220px]
                        text-[0.55rem]
                        leading-4
                        text-white/45
                        sm:mt-4
                        sm:text-[0.65rem]
                        sm:leading-5
                      "
                    >
                      Thoughtful design, skilled craftsmanship and furniture
                      made with intention.
                    </p>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className="
                      relative
                      z-10
                      mt-4
                      flex
                      items-center
                      gap-1.5
                      text-[0.42rem]
                      uppercase
                      tracking-[0.14em]
                      text-white/35
                      sm:mt-6
                      sm:gap-2
                      sm:text-[0.5rem]
                      sm:tracking-[0.18em]
                    "
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--brass)]" />
                    <span className="truncate">
                      Heaven Furniture Mart
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* =================================================
          EDITORIAL CONTENT
          ================================================= */}

          <Reveal
            delay={180}
            className="
              min-w-0
              lg:col-span-5
            "
          >
            <div
              className="
                flex
                h-full
                flex-col
                justify-center
                lg:pl-6
                xl:pl-10
              "
            >
              <span
                className="
                  mb-4
                  text-[0.5rem]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--brass)]
                  sm:mb-5
                  sm:text-[0.55rem]
                  sm:tracking-[0.2em]
                  lg:mb-6
                  lg:text-[0.58rem]
                "
              >
                The Bespoke Process
              </span>

              <h3
                className="
                  serif
                  max-w-lg
                  text-[2rem]
                  leading-[1]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                Made for your space.
                <br />
                <span className="text-[var(--brass)]">
                  Made for you.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-[0.8rem]
                  leading-6
                  text-white/65
                  sm:mt-6
                  sm:text-sm
                  sm:leading-7
                  md:mt-7
                "
              >
                Every detail is shaped around your space, materials, finish,
                and the way you live.
              </p>

              {/* Customization list */}

              <div
                className="
                  mt-7
                  border-t
                  border-white/15
                  sm:mt-8
                  md:mt-10
                "
              >
                {customization.map((item) => (
                  <div
                    key={item.number}
                    className="
                      group
                      grid
                      grid-cols-[30px_minmax(0,1fr)_20px]
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      py-3.5
                      transition-all
                      duration-300
                      hover:pl-2
                      sm:grid-cols-[38px_minmax(0,1fr)_24px]
                      sm:gap-3
                      sm:py-4
                      md:grid-cols-[45px_minmax(0,1fr)_24px]
                    "
                  >
                    <span
                      className="
                        text-[0.5rem]
                        tracking-[0.14em]
                        text-[var(--brass)]
                        sm:text-[0.55rem]
                        sm:tracking-[0.16em]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          serif
                          text-base
                          leading-tight
                          text-white/90
                          sm:text-lg
                          md:text-xl
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[0.58rem]
                          leading-4
                          text-white/40
                          sm:text-[0.65rem]
                          sm:leading-5
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    <span
                      className="
                        text-right
                        text-xs
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[var(--brass)]
                        sm:text-sm
                      "
                    >
                      ↗
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div
                className="
                  mt-7
                  w-full
                  sm:mt-8
                  md:mt-10
                "
              >
                <Button href="/contact">
                  Start Your Custom Piece
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

