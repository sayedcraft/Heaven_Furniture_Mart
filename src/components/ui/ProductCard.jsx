import Image from "next/image";

export default function ProductCard({
  product,
  variant = "standard",
  className = "",
}) {
  return (
    <article className={`product-card ${className}`}>
      <div
        className={`image-wrap relative bg-[#d6cabb] ${
          variant === "large" ? "aspect-[1.1]" : "aspect-[0.95]"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name}, ${product.category} furniture by Heaven Furniture Mart`}
          fill
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
            <p className="mt-1 text-xs text-[var(--brown)] uppercase tracking-[0.08em]">
              {product.category.replace("-", " ")}
            </p>
          </div>
          <span className="product-arrow text-[var(--brass)]">↗</span>
        </div>
        {product.description && (
          <p className="mt-3 text-xs leading-6 text-[var(--brown)]">
            {product.description}
          </p>
        )}
      </div>
    </article>
  );
}
