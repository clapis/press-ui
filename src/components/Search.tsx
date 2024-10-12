import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { SearchResults } from "./SearchResults";
import { useSearchParams } from "react-router-dom";
import { useSearchPublications } from "@/hooks/usePublications";
import { LoaderCircleIcon } from "lucide-react";

export default function Search() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error, isLoading } = useSearchPublications(
    searchParams.get("q")
  );

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  }, 300);

  return (
    <div className="flex flex-col my-8">
      <Input
        placeholder="Buscar.."
        className="w-64 md:w-[32rem] mx-auto my-3"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />

      {isLoading && <LoaderCircleIcon className="h-4 w-4 animate-spin mx-auto" />}
      {error && <p className="text-sm">Opa, deu zica! Alguma coisa de errado aconteceu</p>}
      {data && <SearchResults pubs={data!} />}
    </div>
  );
}
