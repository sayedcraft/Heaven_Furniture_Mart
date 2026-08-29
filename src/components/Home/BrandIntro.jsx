import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "5+", label: "Years of craft" },
  { value: "500+", label: "Happy clients" },
  { value: "100%", label: "Bespoke pieces" },
  { value: "6", label: "Collections" },
];

export default function BrandIntro() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 sm:py-40 lg:py-52"
    >
      <span className="serif pointer-events-none absolute -right-4 top-10 text-[clamp(12rem,27vw,26rem)] leading-none text-[var(--charcoal)]/[.035]">
        2020
      </span>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.75fr_2fr] lg:gap-20">
          <Reveal className="relative z-[1]">
            <span className="eyebrow">A considered approach</span>
            <p className="mt-8 max-w-[180px] text-xs leading-6 text-[var(--brown)]">
              A furniture studio for homes with a point of view.
            </p>
          </Reveal>
          <Reveal className="relative z-[1]" delay={120}>
            <SectionHeading
              eyebrow="Heaven Furniture Mart"
              title="Furniture should feel like it belongs."
            >
              At Heaven Furniture Mart, we believe furniture is more than
              function; it is a reflection of lifestyle, taste, and comfort.
              From our showroom in Chattogram, we design and craft bespoke
              pieces that bring lasting elegance into the homes and spaces of
              our clients.
            </SectionHeading>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={200} className="relative z-[1]">
          <div className="mt-20 sm:mt-28 border-t border-[var(--line)] pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`sm:px-8 ${i > 0 ? "sm:border-l border-[var(--line)]" : ""}`}
              >
                <p className="serif text-4xl sm:text-5xl text-[var(--charcoal)]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--brown)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
