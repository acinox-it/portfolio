import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  className?: string;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const Button = ({
  children,
  onClick,
  href,
  download,
  className,
  variant = "primary",
  disabled = false,
  loading = false,
  type = "button",
  ariaLabel,
}: Props) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary";

  const variants = {
    primary: "bg-accent text-bg-primary hover:bg-accent-hover shadow-glow",
    ghost: "border border-zinc-700 text-text-primary hover:border-accent hover:text-accent",
  };

  const disabledStyle = disabled || loading ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const content = (
    <span className={clsx(base, variants[variant], disabledStyle, className)}>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        aria-label={ariaLabel}
        aria-disabled={disabled || loading}
        className={clsx(disabledStyle)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;