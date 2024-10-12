export type Source = {
    name: string;
    url: string;
}

export type Publication = {
    id: string;
    url: string;
    date: string;
    source: string;
}

export type Alert = {
    id?: string;
    term: string;
    createdOn?: string;
    lastNotification?: string;
}