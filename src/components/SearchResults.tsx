import { FileTextIcon, LoaderCircleIcon } from "lucide-react";
import { Publication } from "@/lib/types";
import { date_age_in_days, humanize } from "@/lib/utils";

export function SearchResults({ pubs, isLoading }: { pubs: Publication[], error: boolean | undefined, isLoading: boolean }) {

  return (
    <div className="text-sm w-full my-3">
      <div className="my-3 text-center">
        {/* { error && <p>Opa, deu zica! Alguma coisa de errado aconteceu</p> } */}
        { isLoading && <LoaderCircleIcon className="h-4 w-4 mx-auto animate-spin" /> }
        { pubs?.length === 0 && <p>Não encontramos em nenhum diário recente.<p></p>Crie seu alerta para ser notificado!</p> }
        { pubs?.length > 0 && <p>Encontramos em <span className="font-semibold">{pubs.length}</span> diário(s) recentes</p> }
      </div>
      {pubs?.map((pub) => (
        <a key={pub.id} href={pub.url} target="_blank">
          <div className="flex flex-start gap-3 md:gap-5 py-3 items-center border-black border-b border-secondary ">
              <div><FileTextIcon /></div>
              <div className="hidden md:flex flex-col truncate max-w-lg">
                  <span className="text-xs text-muted-foreground">{new Date(pub.date).toDateString()} - {humanize(date_age_in_days(pub.date))}</span>
                  <span>{pub.url}</span>
              </div>
              <div className="hidden md:block ml-auto self-end text-nowrap">{pub.source}</div>
              <div className="md:hidden flex flex-col truncate">
                  <span className="text-xs text-muted-foreground">{pub.source}</span>
                  <span>{new Date(pub.date).toDateString()} - {humanize(date_age_in_days(pub.date))}</span>
              </div>
          </div>
        </a>
      ))}
    </div>
  );
}