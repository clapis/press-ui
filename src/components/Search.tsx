import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { SearchResults } from "./SearchResults";
import { Link, useSearchParams } from "react-router-dom";
import { useSearchPublications } from "@/hooks/usePublications";
import { Button } from "./ui/button";
import { BellPlusIcon } from "lucide-react";

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
    <div className="flex flex-col items-center my-8">
      <div className="flex items-center justify-center gap-3 w-3/4 md:w-[32rem] my-5">
        <Input
          placeholder="Buscar.."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("q")?.toString()}
        />
        <Link to="/app/alerts">
          <Button className="hidden md:inline-block">Criar Alerta</Button>
          <Button size="icon" className="md:hidden"><BellPlusIcon size="16" /></Button>
        </Link>
      </div>
      <SearchResults pubs={data!} error={error} isLoading={isLoading} />
    </div>
  );
}
