import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--brown)] py-24 text-[var(--ivory)] sm:py-32"
    >
      <span className="serif pointer-events-none absolute right-0 top-8 text-[clamp(12rem,30vw,30rem)] leading-none text-white/[.035]">
        HEAVEN
      </span>
      <Container>
        <Reveal className="relative z-[1] max-w-3xl">
          <span className="eyebrow">Begin the conversation</span>
          <h2 className="serif mt-5 text-6xl leading-[.86] sm:text-8xl">
            Let&apos;s create something made for you.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/75">
            Visit our Agrabad showroom or speak with our team about a piece
            designed around your space.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Button
              href="mailto:heavenfurnituremart@gmail.com"
              variant="secondary"
            >
              Request a Quote
            </Button>
            <a href="tel:+8801960481983" className="line-link text-sm">
              +880 1960-481983
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
