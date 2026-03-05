import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button: FC<Props> = ({ children, className, variant = "primary", size = "md", isLoading, ...props }) => {
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center font-medium transition-colors rounded-md disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {isLoading ? "Please wait..." : children}
    </button>
  );
};

export default Button;
