export type Publication = {
    id: string;
    url: string;
    date: string;
    sourceId: string;
}

export type Alert = {
    id?: string;
    term: string;
    createdOn?: string;
    lastNotification?: string;
}