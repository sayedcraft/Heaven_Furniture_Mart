import ProductCatalog from "@/components/ui/ProductCatalog";

export const metadata = {
  title: "Products | Heaven Furniture Mart",
  description: "Explore the Heaven Furniture Mart furniture collection.",
};

export default function Products() {
  return (
    <main className="bg-[var(--ivory)] px-5 pb-20 pt-20 sm:px-8 sm:pt-30 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-14 max-w-3xl sm:mb-20">
        
          <h1 className="serif mt-5 text-5xl leading-[0.92] text-[var(--deep-brown)] sm:text-7xl">
            Furniture for{" "}
            <em className="font-normal text-[var(--brass)]">considered</em>{" "}
            spaces.
          </h1>
          <span className="mt-7 block h-px w-14 bg-[var(--brass)]" />
          <p className="mt-7 max-w-md text-sm leading-7 text-[var(--brown)]">
            Discover pieces designed for the way you live, and made to become
            part of your space.
          </p>
        </header>
        <ProductCatalog />
      </div>
    </main>
  );
}
