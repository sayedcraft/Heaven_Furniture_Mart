import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  variant = "standard",
  className = "",
}) {
  const formattedPrice =
    typeof product.price === "number"
      ? `৳${product.price.toLocaleString("en-BD")}`
      : product.priceLabel || "";

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`product-card group block ${className}`}
    >
      {/* IMAGE */}
      <div
        className={`image-wrap relative overflow-hidden bg-[var(--wood-tan)] ${
          variant === "large" ? "aspect-[1.1]" : "aspect-[0.95]"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name}, ${product.category} furniture by Heaven Furniture Mart`}
          fill
          quality={85}
          sizes={
            variant === "large"
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.04]" />

        {/* COLLECTION LABEL */}
        {product.collection && (
          <div className="absolute left-4 top-4">
            <span className="inline-block bg-white/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--deep-brown)] backdrop-blur-sm">
              {product.collection}
            </span>
          </div>
        )}

        {/* ARROW */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-white/90 text-[var(--deep-brown)] opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="border-b border-[var(--line)] py-5 sm:py-6">
        {/* NAME + CATEGORY */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="serif text-[1.45rem] leading-[1.05] text-[var(--deep-brown)] transition-colors duration-300 group-hover:text-[var(--brass)] sm:text-[1.65rem]">
              {product.name}
            </h3>

            <p className="mt-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--brown)] sm:text-[0.68rem]">
              {product.category.replace("-", " ")}
            </p>
          </div>
        </div>

        {/* PRICE */}
        {formattedPrice && (
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[var(--brown)]">
                Starting from
              </p>

              <p className="serif text-2xl font-medium leading-none text-[var(--deep-brown)] sm:text-3xl">
                {formattedPrice}
              </p>
            </div>

            {product.priceLevel && (
              <span className="pb-0.5 text-[0.58rem] uppercase tracking-[0.12em] text-[var(--brown)]">
                Premium
              </span>
            )}
          </div>
        )}

        {/* DESCRIPTION */}
        {product.description && (
          <p className="mt-4 line-clamp-2 text-[0.72rem] leading-6 text-[var(--brown)] sm:text-xs">
            {product.description}
          </p>
        )}

        {/* VIEW DETAILS BUTTON */}
        <div className="mt-5 flex w-full items-center justify-between border border-[var(--deep-brown)] px-4 py-3.5 transition-all duration-300 group-hover:border-[var(--brass)] group-hover:bg-[var(--deep-brown)] sm:px-5 sm:py-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors duration-300 group-hover:text-white sm:text-xs">
            View details
          </span>

          <span className="text-base text-[var(--brass)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
