export type Publication = {
    id: string;
    url: string;
    date: string;
    source: number;
}

export function age(publication: Publication) {
    return Math.floor((Date.now() - Date.parse(publication.date)) / 1000 / 60 / 60 / 24);
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

export type Alert = {
    id?: string;
    keyword: string;
    createdOn?: string;
    lastNotifiedOn?: string;
}