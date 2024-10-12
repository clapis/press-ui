import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Publication } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function date_format(date: string) {
  return date.substring(0, 10);
}

export function date_age_in_days(date: string) {
  return Math.floor((Date.now() - Date.parse(date)) / 1000 / 60 / 60 / 24);
}

export function humanize(days: number) {
  if (days === 0) return "hoje";
  if (days === 1) return "ontem";
  return `há ${days} dias`;
}

export function source(publication: Publication) {
  switch (publication.source) {
      case 1:
          return "São Carlos - SP";
      case 2:
          return "Franca - SP";
      case 3:
          return "Sorocaba - SP";
      default:
          throw `Unexpected source ${publication.source}`;
  }
}