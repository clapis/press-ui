import { Alert } from "@/lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import useSWR from "swr";

export default function useAlerts() {

  const { getToken } = useKindeAuth();

  const URL = `${import.meta.env.VITE_API_URL}/alerts`;

  const { data, error, isLoading, isValidating, mutate } = useSWR<Alert[]>(URL, (url: string) => {
    return getToken!()
      .then(token => fetch(url, { headers: { Authorization: `Bearer ${token}` } }))
      .then(res => res.json())
  });

  const create = (keyword: string) => {
    return getToken!()
      .then(token => fetch(URL, { 
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: { 
          Authorization: `Bearer ${token}` ,
          "Content-Type": "application/json" 
        }}))
      .then(() => mutate())
  };

  const remove = async(alert: Alert) => {
    return getToken!()
    .then(token => fetch(`${URL}/${alert.id}`, { 
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` } }))
    .then(() => mutate())
  }

  return { alerts: data, error, isLoading, isValidating, create, remove }
}

// export default function useAlerts() {

//     const { data, error, isLoading, isValidating, mutate } = useSWR<Alert[]>("/alerts", () => delay(2000).then(() => alerts));

//     const create = async (alert: Alert) => {
//         alerts = [...alerts, alert];
//         mutate(alerts);
//     } 

//     const remove = async (alert: Alert) => {
//         alerts = alerts.filter(x => x.id !== alert.id)
//         mutate(alerts)
//     }

//     const randid = () => (Math.random() + 1).toString(36).substring(2);
//     const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
//     const factory = (keyword: string) => ({ id: randid(), term: keyword, createdOn: (new Date()).toISOString() });

//   return { alerts: data, error, isLoading, isValidating, create, remove, factory }

// }

// let alerts: Alert[] = [
//     {
//       id: "lk34k34",
//       term: "clapis",
//       createdOn: "2024-01-01",
//       lastNotification: "2024-01-01",
//     },
//     {
//       id: "bk35k12",
//       term: "20340034",
//       createdOn: "2024-01-01",
//       lastNotification: "2024-01-01",
//     },
//     {
//       id: "kks4k96",
//       term: "concurso",
//       createdOn: "2024-01-01",
//       lastNotification: "2024-01-01",
//     },
//   ];
