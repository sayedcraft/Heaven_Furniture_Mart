import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  variant = "standard",
  className = "",
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`product-card group block ${className}`}
    >
      <div
        className={`image-wrap relative bg-[var(--wood-tan)] ${
          variant === "large" ? "aspect-[1.1]" : "aspect-[0.95]"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name}, ${product.category} furniture by Heaven Furniture Mart`}
          fill
          quality={80}
          sizes={
            variant === "large"
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          }
          className="object-cover"
        />
      </div>
      <div className="product-caption border-b border-[var(--line)] py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="serif text-xl sm:text-2xl">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--brown)]">
              {product.category.replace("-", " ")}
            </p>
          </div>
          <span className="product-arrow text-[var(--brass)] transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </div>
        <span className="mt-4 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--deep-brown)] transition-colors group-hover:text-[var(--brass)]">
          View details
        </span>
        {product.price && (
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--deep-brown)]">
            {product.price}
          </p>
        )}
        {product.description && (
          <p className="mt-3 text-xs leading-6 text-[var(--brown)]">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  );
}
