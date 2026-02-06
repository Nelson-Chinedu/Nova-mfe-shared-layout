import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes without style conflicts.
 * 'clsx' allows for conditional classes.
 * 'twMerge' ensures Tailwind classes (like 'px-2' vs 'px-4') don't clash.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
