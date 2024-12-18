import useSWR from "swr"
import { Source } from "@/lib/types";

const BASE_URL = import.meta.env.VITE_API_URL

export const useSources = () => useSWR<Source[]>("/sources", fetcher);

const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());