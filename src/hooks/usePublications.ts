import useSWR from "swr"
import { Publication } from "@/lib/types";

const BASE_URL = import.meta.env.VITE_API_URL

export const useLatestPublications = () => useSWR<Publication[]>("/publications/latest", fetcher);

export const useSearchPublications = (query: string | null) => useSWR<Publication[]>(query && query.length > 2 && `/publications/search?q=${query}`, fetcher);

const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());