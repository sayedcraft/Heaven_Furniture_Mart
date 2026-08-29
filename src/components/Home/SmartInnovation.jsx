import Reveal from "@/components/ui/Reveal";

export default function SmartInnovation() {
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
      description:
        "Intelligent organization built seamlessly into every piece.",
    },
  ];

  return (
    <section className="bg-[#f4f0e9] py-28 sm:py-40 lg:py-52 border-t border-[var(--line)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-20 sm:mb-28">
          <span className="eyebrow block mb-4">Modern thinking</span>
          <h2 className="serif text-5xl sm:text-6xl leading-[1] text-[var(--charcoal)]">
            Smart innovation
          </h2>
        </Reveal>

        {/* Split Grid - Two Large Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Panel */}
          <Reveal
            delay={0}
            className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2"
          >
            {innovations.slice(0, 2).map((innovation, index) => (
              <div key={innovation.number} className="group">
                <div className="mb-6">
                  <span className="serif text-6xl sm:text-7xl lg:text-8xl font-light text-[var(--brass)]/20 group-hover:text-[var(--brass)]/40 transition-colors duration-300">
                    {innovation.number}
                  </span>
                </div>
                <h3 className="serif text-2xl sm:text-3xl leading-[1.1] text-[var(--charcoal)] mb-4">
                  {innovation.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--brown)]">
                  {innovation.description}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Right Panel */}
          <Reveal
            delay={200}
            className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2"
          >
            {innovations.slice(2).map((innovation, index) => (
              <div key={innovation.number} className="group">
                <div className="mb-6">
                  <span className="serif text-6xl sm:text-7xl lg:text-8xl font-light text-[var(--brass)]/20 group-hover:text-[var(--brass)]/40 transition-colors duration-300">
                    {innovation.number}
                  </span>
                </div>
                <h3 className="serif text-2xl sm:text-3xl leading-[1.1] text-[var(--charcoal)] mb-4">
                  {innovation.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--brown)]">
                  {innovation.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Divider Line */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[var(--line)]">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--brass)] font-bold">
            Innovation + Heritage
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--brown)] max-w-2xl">
            Every Heaven Furniture Mart piece combines timeless design
            principles with contemporary manufacturing, creating furniture that
            serves your life today and stands for decades to come.
          </p>
        </div>
      </div>
    </section>
  );
}
