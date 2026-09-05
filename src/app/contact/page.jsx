import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Heaven Furniture Mart",
  description:
    "Talk with Heaven Furniture Mart about custom furniture, interiors, or a showroom visit in Chattogram.",
};

const details = [
  ["Phone", "+880 1897-020407", "tel:+8801897020407"],
  [
    "Email",
    "heavenfurnituremart@gmail.com",
    "mailto:heavenfurnituremart@gmail.com",
  ],
  [
    "Showroom",
    "Lucky Hotel More, North of Bheluaar Dighi, Chattogram 4202",
    "https://www.google.com/maps",
  ],
  ["Hours", "Open daily · 8:00 AM – 11:00 PM", null],
];

export default function Contact() {
  return (
    <main className="bg-[var(--ivory)] text-[var(--deep-brown)]">
      {/* <section className="px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-5xl">
            <p className="eyebrow">The studio is listening</p>
            <h1 className="serif mt-5 text-5xl leading-[0.9] sm:text-7xl lg:text-[7rem]">
              Let&apos;s create something{" "}
              <em className="font-normal text-[var(--brass)]">
                beautiful together.
              </em>
            </h1>
            <span className="mt-8 block h-px w-14 bg-[var(--brass)]" />
            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--brown)] sm:text-lg">
              Tell us about your space, your idea, or the piece you have been
              looking for.
            </p>
          </Reveal>
        </div>
      </section> */}

      <section className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Contact details</p>
            <h2 className="serif mt-5 text-4xl leading-[0.95] sm:text-5xl">
              Start with a{" "}
              <em className="font-normal text-[var(--brass)]">conversation.</em>
            </h2>
            <div className="mt-10 border-t border-[var(--line)]">
              {details.map(([label, value, href]) => (
                <div key={label} className="border-b border-[var(--line)] py-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-2 block max-w-xs text-sm leading-6 text-[var(--brown)] transition-colors hover:text-[var(--deep-brown)]"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-[var(--brown)]">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="serif mt-5 text-4xl leading-[0.95] sm:text-5xl">
              Bring us the{" "}
              <em className="font-normal text-[var(--brass)]">idea.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[var(--brown)]">
              Whether you are shaping one room or a complete interior, a few
              details are enough to begin.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--deep-brown)] px-5 py-20 text-[var(--ivory)] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="eyebrow">Bespoke enquiries welcome</p>
            <h2 className="serif mt-5 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
              Good furniture begins with knowing how you{" "}
              <em className="font-normal text-[var(--brass)]">live.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/showroom"
              className="line-link inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[var(--ivory)] transition-colors hover:text-[var(--brass)]"
            >
              Visit the showroom{" "}
              <span className="ml-3 text-[var(--brass)]">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
