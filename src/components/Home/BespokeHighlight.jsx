
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
        relative
        overflow-hidden
        border-t border-[var(--brass)]/20
        bg-[var(--deep-brown)]
        py-8
        text-[var(--ivory)]
        sm:py-12
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        {/* SECTION HEADER */}
        <Reveal
          className="
            mb-7
            text-center
            sm:mb-10
            md:mb-12
            lg:mb-16
          "
        >
          <h2
            className="
              serif
              mx-auto
              max-w-4xl
              text-center
              text-3xl
              leading-[0.95]
              tracking-[-0.025em]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.8rem]
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

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            gap-9
            sm:gap-10
            lg:grid-cols-12
            lg:gap-7
          "
        >
          {/* IMAGE COMPOSITION */}
          <div className="min-w-0 lg:col-span-7">
            <div
              className="
                grid
                grid-cols-12
                gap-2.5
                sm:gap-4
                md:gap-5
              "
            >
              {/* MAIN IMAGE */}
              <Reveal
                // variant="clip"
                delay={0}
                className="col-span-12 min-w-0"
              >
                <div
                  className="
                    group
                    relative
                    aspect-[1.08]
                    w-full
                    overflow-hidden
                    rounded-[var(--image-radius)]
                    bg-[var(--wood-tan)]
                    sm:aspect-[1.18]
                    md:aspect-[1.2]
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Label */}
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
                        bg-[var(--deep-brown)]/10
                        px-2
                        py-1
                        text-[0.42rem]
                        uppercase
                        tracking-[0.14em]
                        text-[var(--ivory)]/90
                        backdrop-blur-sm
                        sm:px-3
                        sm:py-2
                        sm:text-[0.52rem]
                        sm:tracking-[0.18em]
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
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      text-xs
                      text-white
                      opacity-100
                      backdrop-blur-sm
                      sm:right-5
                      sm:top-5
                      sm:h-9
                      sm:w-9
                      sm:text-sm
                      md:right-7
                      md:top-7
                      md:h-10
                      md:w-10
                      lg:translate-y-2
                      lg:opacity-0
                      lg:transition-all
                      lg:duration-500
                      lg:group-hover:translate-y-0
                      lg:group-hover:opacity-100
                    "
                  >
                    ↗
                  </div>

                  {/* Caption */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-3
                      sm:p-6
                      md:p-7
                    "
                  >
                    <p
                      className="
                        mb-1
                        text-[0.42rem]
                        uppercase
                        tracking-[0.14em]
                        text-white/60
                        sm:text-[0.52rem]
                        sm:tracking-[0.18em]
                      "
                    >
                      Designed around you
                    </p>

                    <p
                      className="
                        serif
                        text-sm
                        leading-tight
                        text-white
                        sm:text-xl
                        md:text-2xl
                      "
                    >
                      Nothing off the shelf.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* SECONDARY IMAGE */}
              <Reveal
                // variant="clip"
                delay={140}
                className="col-span-8 min-w-0"
              >
                <div
                  className="
                    group
                    relative
                    aspect-[1.55]
                    w-full
                    overflow-hidden
                    rounded-[var(--image-radius)]
                    bg-[var(--wood-tan)]
                    sm:aspect-[1.7]
                  "
                >
                  <Image
                    src="/image/Custom.avif"
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
                      bottom-2
                      left-2
                      sm:bottom-4
                      sm:left-5
                      md:bottom-5
                      md:left-6
                    "
                  >
                    <span
                      className="
                        text-[0.38rem]
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                        sm:text-[0.52rem]
                        sm:tracking-[0.18em]
                      "
                    >
                      Handcrafted Detail
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* EDITORIAL CARD */}
              <Reveal
                delay={200}
                className="col-span-4 min-w-0"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[108px]
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[var(--image-radius)]
                    border
                    border-white/15
                    bg-white/[0.025]
                    p-2.5
                    transition-all
                    duration-500
                    sm:min-h-[190px]
                    sm:p-5
                    md:min-h-[220px]
                    md:p-6
                    hover:border-[var(--brass)]/50
                    hover:bg-white/[0.05]
                  "
                >
                  {/* Accent */}
                  <div className="relative z-10">
                    <span
                      className="
                        block
                        h-px
                        w-5
                        bg-[var(--brass)]/50
                        transition-all
                        duration-500
                        sm:w-10
                        sm:group-hover:w-16
                        group-hover:w-9
                        group-hover:bg-[var(--brass)]
                      "
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="
                      relative
                      z-10
                      mt-2
                      sm:mt-8
                      md:mt-10
                    "
                  >
                    <h3
                      className="
                        serif
                        text-[0.82rem]
                        leading-[1]
                        text-white/90
                        sm:text-xl
                        md:text-2xl
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
                        mt-1
                        hidden
                        text-[0.52rem]
                        leading-4
                        text-white/40
                        sm:mt-4
                        sm:block
                        sm:text-[0.62rem]
                        sm:leading-5
                      "
                    >
                      Thoughtful design, skilled craftsmanship and furniture
                      made with intention.
                    </p>
                  </div>

                  {/* Bottom */}
                  <div
                    className="
                      relative
                      z-10
                      mt-2
                      flex
                      items-center
                      gap-1
                      text-[0.35rem]
                      uppercase
                      tracking-[0.1em]
                      text-white/35
                      sm:mt-6
                      sm:gap-2
                      sm:text-[0.48rem]
                      sm:tracking-[0.16em]
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

          {/* EDITORIAL CONTENT */}
          <Reveal
            delay={180}
            className="min-w-0 lg:col-span-5"
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
                  mb-3
                  text-[0.45rem]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[var(--brass)]
                  sm:mb-5
                  sm:text-[0.52rem]
                  sm:tracking-[0.18em]
                  lg:mb-6
                  lg:text-[0.55rem]
                "
              >
                The Bespoke Process
              </span>

              <h3
                className="
                  serif
                  max-w-lg
                  text-2xl
                  leading-[0.95]
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[2.5rem]
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
                  mt-4
                  max-w-md
                  text-[0.72rem]
                  leading-5
                  text-white/65
                  sm:mt-6
                  sm:text-[0.82rem]
                  sm:leading-6
                  md:mt-7
                "
              >
                Every detail is shaped around your space, materials, finish,
                and the way you live.
              </p>

              {/* Customization */}
              <div
                className="
                  mt-5
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
                      grid-cols-[24px_minmax(0,1fr)_16px]
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      py-3
                      transition-all
                      duration-300
                      sm:grid-cols-[38px_minmax(0,1fr)_24px]
                      sm:gap-3
                      sm:py-4
                      md:grid-cols-[45px_minmax(0,1fr)_24px]
                      hover:pl-2
                    "
                  >
                    <span
                      className="
                        text-[0.42rem]
                        tracking-[0.12em]
                        text-[var(--brass)]
                        sm:text-[0.52rem]
                        sm:tracking-[0.16em]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          serif
                          text-sm
                          leading-tight
                          text-white/90
                          sm:text-base
                          md:text-[1.05rem]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[0.48rem]
                          leading-3.5
                          text-white/40
                          sm:text-[0.62rem]
                          sm:leading-5
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    <span
                      className="
                        text-right
                        text-[0.65rem]
                        text-white/30
                        transition-all
                        duration-300
                        sm:text-sm
                        group-hover:translate-x-1
                        group-hover:text-[var(--brass)]
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
                  mt-5
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

