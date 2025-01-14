import { Profile } from "@/lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import useSWR from "swr";

export default function useProfile() {

  const { getToken } = useKindeAuth();

  const URL = `${import.meta.env.VITE_API_URL}/profile`;

  const { data, error, isLoading } = useSWR<Profile>(URL, (url: string) => {
    return getToken!()
      .then(token => fetch(url, { headers: { Authorization: `Bearer ${token}` } }))
      .then(res => res.json())
  });

  return { profile: data, error, isLoading }
}
