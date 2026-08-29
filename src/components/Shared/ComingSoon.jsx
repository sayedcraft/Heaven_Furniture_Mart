import Link from "next/link";

export default function ComingSoon({
  title = "Coming Soon",
  description = "We are carefully preparing something special for you.",
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f0e9] px-5 py-24 sm:px-8">
      <section className="w-full max-w-3xl text-center">

        {/* Small label */}
        <span className="eyebrow mb-6 block">
          Heaven Furniture Mart
        </span>

        {/* Main heading */}
        <h1 className="serif text-6xl leading-[0.95] text-[var(--charcoal)] sm:text-7xl lg:text-8xl">
          {title}
        </h1>

        {/* Gold underline */}
        <div className="mx-auto mt-7 h-px w-16 bg-[var(--brass)]" />

        {/* Description */}
        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[var(--brown)] sm:text-base">
          {description}
        </p>

        {/* Back home */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--charcoal)] transition-colors duration-300 hover:text-[var(--brass)]"
        >
          Back to Home
          <span className="text-[var(--brass)] transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </Link>

      </section>
    </main>
  );
}