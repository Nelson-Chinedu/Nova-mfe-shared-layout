import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  class?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Typography: FC<Props> = ({ children, className, class: webComponentClass, variant, ...props }) => {
  const Tag = (variant || "p") as React.ElementType;

  const variantStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    p: "text-sm font-normal",
    span: "text-sm font-normal",
  };

  return (
    <Tag className={cn(variantStyles[variant], "m-0 p-0", className, webComponentClass)} {...props}>
      {children || <slot />}
    </Tag>
  );
};

export default Typography;
