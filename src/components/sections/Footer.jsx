import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] py-12 text-[var(--ivory)]">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="serif text-2xl">
              <p className="serif block text-3xl font-extrabold tracking-wide">
                HE<span className="text-yellow-500">A</span>VEN
              </p>{" "}
              Furniture Mart
            </a>
            <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">
              Designed. Crafted. Customized.
            </p>
          </div>
          <div className="text-xs leading-7 text-white/70">
            <p>
              Agrabad Access Road,
              <br />
              Chattogram, Bangladesh
            </p>
            <a
              href="tel:+8801960481983"
              className="mt-3 block hover:text-[var(--brass)]"
            >
              +880 1960-481983
            </a>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs text-white/70 sm:items-end">
            <a
              href="mailto:heavenfurnituremart@gmail.com"
              className="line-link transition-colors hover:text-[var(--brass)]"
            >
              heavenfurnituremart@gmail.com
            </a>
            <a
              href="https://facebook.com/HeavenFurnitureMart"
              className="line-link transition-colors hover:text-[var(--brass)]"
            >
              Facebook ↗
            </a>
            <a
              href="https://instagram.com/heaven_furniture_ltd"
              className="line-link transition-colors hover:text-[var(--brass)]"
            >
              Instagram ↗
            </a>
            <a
              href="https://youtube.com/@HeavenFurnitureMart"
              className="line-link transition-colors hover:text-[var(--brass)]"
            >
              YouTube ↗
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-4 pt-6 text-[0.6rem] uppercase tracking-[0.16em] text-white/40">
          <span>© 2026 Heaven Furniture Mart</span>
          <span>Chattogram, BD</span>
        </div>
      </Container>
    </footer>
  );
}
