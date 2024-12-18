import useSWR from "swr"
import { Publication } from "@/lib/types";

const BASE_URL = import.meta.env.VITE_API_URL

export const useSearchPublications = (query: string | null) => useSWR<Publication[]>(query && query.length > 2 && `/publications/search?q=${query}`, fetcher);

const fetcher = (url: string) => fetch(`${BASE_URL}${url}`).then(res => res.json());

// export const useSearchPublications = (query: string | null) => {

//     if (!query || query.length < 3) return { data: undefined, error: undefined, isLoading: false }

//     if (query === 'none') return { data: [], error: undefined, isLoading: false }

//     if (query === 'error') return { data: undefined, error: true, isLoading: false }

//     if (query === 'load') return { data: undefined, error: undefined, isLoading: true }

//     return {
//         data: [{
//             id: '1',
//             url: 'http://example.com/uri-1',
//             date: '2024-12-01',
//             source: 'Sorocaba - SP',
//             isOfficial: true
//         },
//         {
//             id: '2',
//             url: 'http://example.com/uri-2',
//             date: '2024-12-01',
//             source: 'Franca - SP',
//             isOfficial: true
//         },
//         {
//             id: '3',
//             url: 'http://example.com/uri-3',
//             date: '2024-12-01',
//             source: 'Franca - SP',
//             isOfficial: true
//         },
//         {
//             id: '4',
//             url: 'http://example.com/uri-4',
//             date: '2024-12-01',
//             source: 'Franca - SP',
//             isOfficial: true
//         },
//         {
//             id: '5',
//             url: 'http://example.com/uri-5',
//             date: '2024-12-01',
//             source: 'Franca - SP',
//             isOfficial: true
//         }],
//         error: undefined,
//         isLoading: false
//     }
// }