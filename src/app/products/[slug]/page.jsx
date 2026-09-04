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

  return (
    <main className="bg-[var(--ivory)] px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <Link
          href="/products"
          className="line-link text-xs uppercase tracking-[0.16em] text-[var(--brown)] transition-colors hover:text-[var(--deep-brown)]"
        >
          Back to collection
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="image-wrap relative aspect-[0.95] min-h-[420px] bg-[var(--wood-tan)] sm:aspect-[1.1] lg:sticky lg:top-28 lg:aspect-[0.92] lg:self-start">
            <Image
              src={product.image}
              alt={`${product.name}, ${product.category.replace("-", " ")} furniture`}
              fill
              priority
              quality={88}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <article className="flex flex-col justify-center lg:py-10">
            <p className="eyebrow">{product.category.replace("-", " ")}</p>
            <h1 className="serif mt-5 text-5xl leading-[0.92] text-[var(--deep-brown)] sm:text-7xl">
              {product.name}
            </h1>
            <span className="mt-7 block h-px w-14 bg-[var(--brass)]" />

            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--brown)]">
              {product.description}
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.14em] text-[var(--deep-brown)]">
              {product.price || "Price available on enquiry"}
            </p>

            <div className="mt-10 border-y border-[var(--line)]">
              {[
                ["Material", product.material],
                ["Dimensions", product.dimensions],
                ["Customization", product.customization],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-[var(--line)] py-5 last:border-b-0 sm:grid-cols-[130px_1fr]"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                    {label}
                  </dt>
                  <dd className="text-sm leading-6 text-[var(--brown)]">
                    {value}
                  </dd>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/contact">Enquire Now</Button>
              <Link
                href="/contact"
                className="line-link text-xs font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors hover:text-[var(--brass)]"
              >
                Request customization
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
