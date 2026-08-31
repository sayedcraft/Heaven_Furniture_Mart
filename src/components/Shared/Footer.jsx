import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Showroom", href: "/showroom" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/HeavenFurnitureMart",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/heaven_furniture_ltd",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@HeavenFurnitureMart",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--deep-brown)] text-[var(--ivory)]">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="group inline-block">
              <span className="serif block font-bold text-4xl leading-none tracking-wide transition-colors duration-300 group-hover:text-[var(--brass)]">
                HE<span className="text-[var(--brass)]">A</span>VEN
              </span>

              <span className="text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[var(--brass)] sm:text-[0.54rem]">
                Furniture Mart
              </span>
            </a>

            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-white/40">
              Designed. Crafted. Customized.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-[var(--ivory)]"
                >
                  <span>{link.label}</span>
                  <span className="translate-x-0 text-[var(--brass)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="mb-6 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--brass)]">
              Visit & Contact
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <p>
                Agrabad Access Road,
                <br />
                Chattogram, Bangladesh
              </p>

              <a
                href="tel:+8801960481983"
                className="block transition-colors duration-300 hover:text-[var(--brass)]"
              >
                +880 1960-481983
              </a>

              <a
                href="mailto:heavenfurnituremart@gmail.com"
                className="block break-all transition-colors duration-300 hover:text-[var(--brass)]"
              >
                heavenfurnituremart@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/35">
            © 2026 Heaven Furniture Mart
          </p>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.6rem] uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-[var(--brass)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
