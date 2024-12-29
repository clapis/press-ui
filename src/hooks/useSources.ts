import useSWR from "swr"
import { Source } from "@/lib/types";

const BASE_URL = import.meta.env.VITE_API_URL

export default function useSources() {

    const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());

    const { data, error, isLoading, isValidating } = useSWR<Source[]>("/sources", fetcher);

    return { sources: data, error, isLoading, isValidating };
};

// export default function useSources() {

//     const { data, error, isLoading, isValidating } = useSWR<Source[]>("/sources", () => delay(2000).then(() => sources));

//     const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//     return { sources: data, error, isLoading, isValidating }

// }

// let sources: Source[] = [
//     {
//         id: "dou",
//         name: "Diário Oficial da União",
//         isOfficial: true,
//         url: "https://in.gov.br"
//     },
//     {
//         id: "dom_sp_franca",
//         name: "Diário Oficial do Município de Franca - SP",
//         isOfficial: true,
//         url: "https://dom.franca.sp.gov.br"
//     },
//     {
//         id: "dom_sp_sao_carlos",
//         name: "Diário Oficial do Município de São Carlos - SP",
//         isOfficial: true,
//         url: "https://dom.saocarlos.sp.gov.br"
//     },
//     {
//         id: "dom_sp_sorocaba",
//         name: "Diário Oficial do Município de Sorocaba - SP",
//         isOfficial: true,
//         url: "https://dom.sorocaba.sp.gov.br"
//     }
// ];
