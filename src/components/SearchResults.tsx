import { FileTextIcon } from "lucide-react";
import { Publication } from "@/lib/types";
import { date_age_in_days, humanize } from "@/lib/utils";

export function SearchResults({ pubs }: { pubs: Publication[] }) {

  return (
    <div className="text-sm">
      <p className="my-3"><span className="font-semibold">{pubs.length}</span> documento(s) encontrados</p>
      {pubs.map((pub) => (
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