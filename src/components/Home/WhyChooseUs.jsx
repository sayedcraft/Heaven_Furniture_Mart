import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const benefits = [
  "Free design consultation",
  "Fully bespoke, never mass-produced",
  "Premium wood & materials",
  "Skilled in-house craftsmanship",
  "Large showroom in Agrabad",
  "Delivery & installation included",
  "Easy payment options",
  "Trusted by happy homeowners",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--surface)] py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.4fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Heaven"
              title="The details make the difference."
            >
              A personal process, from first conversation to the final
              installation.
            </SectionHeading>
          </Reveal>
          <Reveal
            delay={130}
            className="grid border-t border-[var(--line)] sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="benefit-row flex gap-5 border-b border-[var(--line)] py-5 pr-4"
              >
                <span className="text-xs text-[var(--brass)]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-6">{benefit}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
