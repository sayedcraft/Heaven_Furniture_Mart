export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "bg-[var(--brass)] text-[var(--charcoal)] hover:bg-[#c09b60]",
    secondary:
      "border border-[var(--ivory)]/60 text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--charcoal)]",
    dark: "bg-[var(--charcoal)] text-[var(--ivory)] hover:bg-[var(--brown)]",
  };
  return (
    <p
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brass)] ${styles[variant]} ${className}`}
    >
      {children}
    </p>
  );
}
