declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "@NovaOrg/nova-mfe-shared-ui" {
  import React, { ButtonHTMLAttributes, ComponentPropsWithoutRef, FC, HTMLAttributes, ReactNode } from "react";

  // Define the types for your shared components
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
  }
  export const Button: React.FC<ButtonProps>;

  export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  }

  export const Typography: FC<TypographyProps>;

  export type InputProps = ComponentPropsWithoutRef<"input"> & {
    label?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    containerClassName?: string;
  };

  export const Input: React.FC<InputProps>;

  export function publicApiFunction(): void;

  // Add other components here as you create them
}
