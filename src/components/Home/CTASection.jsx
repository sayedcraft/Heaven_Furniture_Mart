import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--surface)] text-[var(--deep-brown)]"
    >
      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[var(--deep-brown)]/[0.06] lg:block" />

      {/* Large background number */}

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* Top label */}
        <Reveal>
          <div className="mb-16 flex items-center gap-4 sm:mb-20">
            <span className="text-[1.2rem] font-bold uppercase tracking-[0.22em] text-[var(--brown)]">
              Begin your journey
            </span>
          </div>
        </Reveal>

        {/* Main editorial content */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Heading */}
          <Reveal className="lg:col-span-8">
            <h2 className="serif text-5xl leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
              Your space.
              <br />
              <em className="font-normal text-[var(--brass)]">Your story.</em>
            </h2>
          </Reveal>

          {/* Intro */}
          <Reveal delay={120} className="lg:col-span-4 lg:flex lg:items-end">
            <div className="max-w-sm">
              <p className="text-xl leading-7 text-[var(--brown)]">
                Tell us about your space, your ideas and the way you live.
                We&apos;ll help turn them into furniture designed specifically
                for you.
              </p>

              <div className="mt-8 h-px w-12 bg-[var(--brass)]" />
            </div>
          </Reveal>
        </div>

        {/* CTA panel */}
        <Reveal delay={180}>
          <div className="mt-20 border-y border-[var(--deep-brown)]/10 py-8 sm:mt-28 sm:py-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.9rem] font-bold uppercase tracking-[0.18em] text-[var(--brass)]">
                  Custom furniture
                </p>

                <p className="serif mt-2 text-3xl sm:text-3xl">
                  Let&apos;s make something extraordinary.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 sm:items-end">
                <Button href="/contact">Request a Quote</Button>

                <a
                  href="tel:+8801960481983"
                  className="text-xs uppercase tracking-[0.12em] text-[var(--brown)] transition-colors hover:text-[var(--brass)]"
                >
                  +880 1960-481983
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col gap-3 text-[0.8rem] uppercase tracking-[0.16em] text-[var(--brown)] sm:flex-row sm:items-center sm:justify-between">
            <span>Agrabad Access Road · Chattogram</span>

            <span>Consultations · Custom Orders · Showroom Visits</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
