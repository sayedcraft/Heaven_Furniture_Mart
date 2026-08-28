export default function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
}) {
  return (
    <div className={light ? "text-[var(--ivory)]" : "text-[var(--charcoal)]"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="serif mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children && (
        <p className="mt-6 max-w-lg text-sm leading-7 opacity-75">{children}</p>
      )}
    </div>
  );
}
