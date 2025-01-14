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
    keyword: string;
    sourceId?: string;
    createdOn?: string;
    lastNotification?: string;
}

export type Profile = {
    id: string;
    email: string;
    customerId: string;
    subscription?: Subscription;
    createdOn: string;
}

export type Subscription = {
    name: string;
    isTrial: boolean;
    maxAlerts: number;
}
