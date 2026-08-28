import Image from "next/image";
import Container from "@/components/ui/Container";
import { images } from "@/components/data";
import Reveal from "@/components/ui/Reveal";

export default function SocialProof() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
          <Reveal variant="clip" className="image-wrap relative aspect-[1.1]">
            <Image
              src={images.proof}
              alt="Elegant interior styled with Heaven Furniture Mart pieces"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">A note from our founder</span>
            <div className="quote-mark serif mt-8">“</div>
            <blockquote className="serif mt-6 text-4xl leading-[.98] sm:text-5xl">
              “At Heaven Furniture Mart, we believe furniture is more than just
              function; it is a reflection of lifestyle, taste, and comfort.
              Every piece we create is designed to bring lasting elegance into
              the homes of our clients.”
            </blockquote>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brown)]">
              Abul Kalam Bhuiyan{" "}
              <span className="mx-2 text-[var(--brass)]">/</span> Managing
              Director
            </p>
            <div className="mt-14 border-t border-[var(--line)] pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--brown)]">
                Trusted by hundreds of happy homeowners.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
