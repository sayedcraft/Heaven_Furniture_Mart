import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/components/data";

export default function DesignProcess() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <span className="eyebrow">The process</span>
            <h2 className="serif mt-5 max-w-sm text-5xl leading-[.92] sm:text-6xl">
              From idea to finished piece.
            </h2>
            <p className="mt-7 max-w-xs text-sm leading-7 text-[var(--brown)]">
              A personal process that keeps the focus on your space from the
              first conversation to the final detail.
            </p>
          </Reveal>
          <div className="grid border-t border-[var(--line)] sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 90}
                className="border-b border-[var(--line)]"
              >
                <div className="process-step group py-7 pr-5">
                  <span className="serif text-4xl text-[var(--brass)]">
                    {step.number}
                  </span>
                  <h3 className="serif mt-6 text-3xl transition-transform duration-500 group-hover:translate-x-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[210px] text-xs leading-5 text-[var(--brown)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
