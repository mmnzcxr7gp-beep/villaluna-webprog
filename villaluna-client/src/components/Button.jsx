import { Link } from "react-router-dom";

const variantClasses = {
  primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-700",
  secondary: "bg-zinc-50 text-zinc-900 hover:bg-zinc-200",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-[10px]",
  md: "px-4 py-2 text-[10px]",
  lg: "px-6 py-3 text-xs",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary",
  size = "md",
  className = "",
  disabled = false,
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border-2 border-zinc-900 font-semibold uppercase tracking-[0.24em] transition",
    sizeClasses[size] ?? sizeClasses.md,
    variantClasses[variant] ?? variantClasses.secondary,
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className,
  ]
    .join(" ")
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;