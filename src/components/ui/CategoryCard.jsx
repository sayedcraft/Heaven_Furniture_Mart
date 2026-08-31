import Image from "next/image";

export default function CategoryCard({ category, className = "" }) {
  return (
    <a
      href={`#${category.slug}`}
      className={`category-card block group ${className}`}
    >
      <div className="image-wrap relative bg-[var(--wood-tan)] overflow-hidden aspect-[1.1]">
        <Image
          src={category.image}
          alt={`${category.name} collection at Heaven Furniture Mart`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="category-caption border-b border-[var(--line)] py-5">
        <h3 className="serif text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-[var(--brass)]">
          {category.name}
        </h3>
        <p className="mt-2 text-xs leading-6 text-[var(--brown)]">
          {category.description}
        </p>
      </div>
    </a>
  );
}
