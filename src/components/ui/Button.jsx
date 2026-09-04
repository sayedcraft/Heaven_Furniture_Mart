import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) {
  const styles = {
    primary:
      "bg-[var(--brass)] text-[var(--deep-brown)] hover:bg-[var(--wood-tan)]",
    secondary:
      "border border-[var(--ivory)]/60 text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--deep-brown)]",
    dark: "bg-[var(--deep-brown)] text-[var(--ivory)] hover:bg-[var(--brown)]",
  };

  const baseClass = `inline-flex min-h-10 items-center justify-center rounded-sm px-6 text-[0.67rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brass)] ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
