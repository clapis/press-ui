export type Publication = {
    id: string;
    url: string;
    date: string;
    source: number;
}

export type Alert = {
    id?: string;
    term: string;
    createdOn?: string;
    lastNotification?: string;
}