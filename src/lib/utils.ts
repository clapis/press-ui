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
  if (days > 60) return `há ${Math.floor(days/30)} meses`;
  if (days > 14) return `há ${Math.floor(days/7)} semanas`
  if (days === 0) return "hoje";
  if (days === 1) return "ontem";
  return `há ${days} dias`;
}

export function source(publication: Publication) {
  switch (publication.sourceId) {
      case "dom_sp_sao_carlos":
          return "São Carlos - SP";
      case "dom_sp_franca":
          return "Franca - SP";
      case "dom_sp_sorocaba":
          return "Sorocaba - SP";
      default:
          throw `Unexpected source ${publication.sourceId}`;
  }
}