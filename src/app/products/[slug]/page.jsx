import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return product
    ? {
        title: `${product.name} | Heaven Furniture Mart`,
        description: product.description,
      }
    : { title: "Product not found | Heaven Furniture Mart" };
}

export default async function ProductDetails({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const formattedPrice =
    typeof product.price === "number"
      ? `৳${product.price.toLocaleString("en-BD")}`
      : product.priceLabel || "Price available on enquiry";

  return (
    <main className="bg-[var(--ivory)] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px]">

        {/* BACK */}
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--brown)] transition-colors hover:text-[var(--deep-brown)]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to collection
        </Link>

        {/* MAIN */}
        <div className="mt-7 grid gap-10 lg:mt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

          {/* IMAGE */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="image-wrap group relative aspect-[0.98] overflow-hidden bg-[var(--wood-tan)] sm:aspect-[1.08] lg:aspect-[0.95]">
              <Image
                src={product.image}
                alt={`${product.name}, ${product.category.replace(
                  "-",
                  " ",
                )} furniture`}
                fill
                priority
                quality={88}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              {/* CATEGORY */}
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <span className="bg-white/90 px-3 py-1.5 text-[0.55rem] font-medium uppercase tracking-[0.16em] text-[var(--deep-brown)] backdrop-blur-sm">
                  {product.category.replace("-", " ")}
                </span>
              </div>

              {/* COLLECTION */}
              {product.collection && (
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                  <span className="text-[0.55rem] uppercase tracking-[0.16em] text-white drop-shadow-md">
                    {product.collection} collection
                  </span>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between border-b border-[var(--line)] pb-3">
              <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[var(--brown)]">
                Designed for lasting character
              </p>

              <span className="h-px w-8 bg-[var(--brass)]" />
            </div>
          </div>

          {/* DETAILS */}
          <article className="flex flex-col justify-center lg:py-3">

            {/* CATEGORY */}
            <p className="eyebrow text-[var(--brass)]">
              {product.category.replace("-", " ")}
            </p>

            {/* TITLE */}
            <h1 className="serif mt-4 max-w-xl text-4xl leading-[0.94] text-[var(--deep-brown)] sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {product.name}
            </h1>

            {/* LINE */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--brass)]" />
              <span className="h-1 w-1 rounded-full bg-[var(--brass)]" />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--brown)] sm:text-[0.92rem]">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mt-7 border-y border-[var(--line)] py-5">
              <p className="text-[0.55rem] font-medium uppercase tracking-[0.17em] text-[var(--brown)]">
                Investment
              </p>

              <div className="mt-2 flex items-end justify-between gap-4">
                <p className="serif text-2xl font-medium leading-none text-[var(--deep-brown)] sm:text-3xl">
                  {formattedPrice}
                </p>

                {product.availability && (
                  <span className="flex items-center gap-2 pb-0.5 text-[0.55rem] uppercase tracking-[0.12em] text-[var(--brown)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brass)]" />
                    {product.availability}
                  </span>
                )}
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-7 border-t border-[var(--line)]">
              {[
                ["Material", product.material],
                ["Dimensions", product.dimensions],
                ["Customization", product.customization],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 border-b border-[var(--line)] py-4 sm:grid-cols-[125px_1fr] sm:gap-5"
                  >
                    <dt className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-[var(--brass)]">
                      {label}
                    </dt>

                    <dd className="text-[0.82rem] leading-6 text-[var(--brown)]">
                      {value}
                    </dd>
                  </div>
                ))}
            </div>

            {/* FEATURES */}
            {product.features?.length > 0 && (
              <div className="mt-7">
                <p className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-[var(--brass)]">
                  Highlights
                </p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-[0.78rem] leading-5 text-[var(--brown)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--brass)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Enquire Now</Button>

              <Link
                href="/contact"
                className="group flex min-h-[48px] items-center justify-center gap-3 border border-[var(--line)] px-5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--deep-brown)] transition-all duration-300 hover:border-[var(--brass)] hover:bg-white"
              >
                Request customization

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* FOOT NOTE */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5">
              <span className="text-[0.52rem] uppercase tracking-[0.13em] text-[var(--brown)]">
                Crafted with care
              </span>

              <span className="text-[0.52rem] uppercase tracking-[0.13em] text-[var(--brown)]">
                Made for your space
              </span>

              <span className="text-[0.52rem] uppercase tracking-[0.13em] text-[var(--brown)]">
                Bespoke options available
              </span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}