import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDiscount(
  price: number,
  percentDiscount: number
): number {
  if (percentDiscount <= 0) return price;
  const discountAmount = (price * percentDiscount) / 100;
  return Math.round(price - discountAmount); // round to nearest whole number
}

export function formatPrice(price: number): string {
  return price.toLocaleString("en-US"); // adds commas for thousands
}
