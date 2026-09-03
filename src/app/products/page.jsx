import ProductCatalog from "@/components/ui/ProductCatalog";

export const metadata = {
  title: "Products | Heaven Furniture Mart",
  description: "Explore the Heaven Furniture Mart furniture collection.",
};

export default function Products() {
  return (
    <main className="bg-[var(--ivory)] px-4 pb-16 pt-16 sm:px-6 sm:pt-24 md:px-8 lg:px-12 lg:pb-20 lg:pt-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-10 max-w-3xl sm:mb-14 lg:mb-20">
          <h1 className="serif mt-3 text-4xl leading-[0.94] text-[var(--deep-brown)] sm:text-5xl md:text-6xl lg:text-7xl">
            Furniture for{" "}
            <em className="font-normal text-[var(--brass)]">considered</em>{" "}
            spaces.
          </h1>
          <span className="mt-6 block h-px w-12 bg-[var(--brass)] sm:mt-7 sm:w-14" />
          <p className="mt-6 max-w-md text-sm leading-7 text-[var(--brown)] sm:mt-7">
            Discover pieces designed for the way you live, and made to become
            part of your space.
          </p>
        </header>
        <ProductCatalog />
      </div>
    </main>
  );
}
