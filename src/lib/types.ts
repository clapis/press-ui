export type Source = {
    id: string;
    name: string;
    url: string;
    isOfficial: boolean;
    lastPublicationOn?: string;
}

export type Publication = {
    id: string;
    url: string;
    date: string;
    source: string;
    isOfficial: boolean;
}

export type Alert = {
    id?: string;
    term: string;
    createdOn?: string;
    lastNotification?: string;
}