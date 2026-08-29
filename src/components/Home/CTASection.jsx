import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--charcoal)] py-28 sm:py-40 lg:py-52 text-[var(--ivory)] border-t border-[var(--brass)]/20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <span className="serif pointer-events-none absolute -right-12 sm:-right-8 top-0 lg:top-12 text-[20rem] sm:text-[25rem] lg:text-[32rem] leading-none text-white/[.04] font-light z-0">
          HEAVEN
        </span>

        <Reveal className="relative z-10 max-w-3xl">
          <span className="eyebrow block mb-8">Ready to begin</span>
          <h2 className="serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-12">
            Let's create something made for you.
          </h2>
          <p className="text-sm leading-8 text-white/80 mb-12 max-w-xl">
            Visit our Agrabad showroom or speak with our team about a piece
            designed around your space and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16 pb-12 border-b border-white/15">
            <Button
              href="mailto:heavenfurnituremart@gmail.com"
              variant="secondary"
            >
              Request a Quote
            </Button>
            <a
              href="tel:+8801960481983"
              className="text-sm font-normal text-white hover:text-[var(--brass)] transition-colors duration-300 flex items-center gap-2"
            >
              <span>📞</span>
              (+880) 1960-481983
            </a>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-white/60">
            <p className="mb-2">Agrabad, Chattogram</p>
            <p>
              Visit our showroom or email us for consultations, custom orders,
              or to learn more about our furniture collection.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
