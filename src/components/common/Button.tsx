import React from "react";
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
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  href,
  download,
  className,
  variant = "primary",
  disabled = false,
  loading = false,
  type = "button",
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 transition font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-brand-orange text-black hover:brightness-110 shadow-glow",
    ghost: "border border-gray-700 text-white hover:bg-gray-800",
  };

  const disabledStyle = disabled || loading ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const content = (
    <span className={clsx(base, variants[variant], disabledStyle, className)}>
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </span>
  );

  return href ? (
    <a
      href={href}
      onClick={onClick}
      download={download}
      aria-disabled={disabled || loading}
      className={clsx(disabledStyle)}
    >
      {content}
    </a>
  ) : (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {content}
    </button>
  );
};

export default Button;
