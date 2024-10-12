import { Alert } from "@/lib/types";
import useSWR from "swr";

// const BASE_URL = import.meta.env.VITE_API_URL

// export default function useAlerts() {

//   const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());

//   const { data, error, isLoading, mutate } = useSWR<Alert[]>("/alerts", fetcher);

//   const create = async (alert: Alert) => {
//     var response = await fetch("/alerts", { method: "POST", body: JSON.stringify(alert)})
//     var data = await response.json();
//     return data as Alert;
//   }

//   return { alerts: data, error, isLoading, create }
// }

export default function useAlerts() {

    const { data, error, isLoading, isValidating, mutate } = useSWR<Alert[]>("/alerts", () => delay(2000).then(() => alerts));

    const create = async (alert: Alert) => {
        alerts.push(alert);
        mutate(alerts);
    } 

    const remove = async (alert: Alert) => {
        alerts = alerts.filter(x => x.id !== alert.id)
        mutate(alerts)
    }

    const randid = () => (Math.random() + 1).toString(36).substring(2);
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const factory = (keyword: string) => ({ id: randid(), keyword: keyword, createdOn: (new Date()).toDateString() });

  return { alerts: data, error, isLoading, isValidating, create, remove, factory }

}

let alerts: Alert[] = [
    {
      id: "lk34k34",
      keyword: "clapis",
      createdOn: "2024-01-01",
      lastNotifiedOn: "2024-01-01",
    },
    {
      id: "bk35k12",
      keyword: "20340034",
      createdOn: "2024-01-01",
      lastNotifiedOn: "2024-01-01",
    },
    {
      id: "kks4k96",
      keyword: "concurso",
      createdOn: "2024-01-01",
      lastNotifiedOn: "2024-01-01",
    },
  ];
