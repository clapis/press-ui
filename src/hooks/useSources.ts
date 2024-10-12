import useSWR from "swr"
import { Publication } from "@/lib/types";

const BASE_URL = import.meta.env.VITE_API_URL

export const useSources = () => useSWR<Publication[]>("/sources", fetcher);

const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());