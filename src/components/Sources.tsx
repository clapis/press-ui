import { TriangleAlertIcon } from "lucide-react";
import { date_age_in_days, date_format, humanize } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useSources } from "@/hooks/useSources";

export default function Sources() {
  const { data, error, isLoading } = useSources();

  // TODO
  if (error || isLoading) return <></>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diários</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data?.sort((a, b) => Number(b.isOfficial) - Number(a.isOfficial) || a.name.length - b.name.length).map((source) => {

                const age =  date_age_in_days(source.lastPublicationOn!);

                return (
                  <TableRow key={source.id} className={age > 3 ? "text-muted-foreground" : ""}>
                    <TableCell>
                        <a href={source.url} target="_blank">{source.name}</a>
                    </TableCell>
                    <TableCell className="hidden md:inline-flex">
                      {source.lastPublicationOn ? date_format(source.lastPublicationOn) : "-"}
                    </TableCell>
                    <TableCell>
                      <span className="align-middle">{humanize(age)}</span>
                      <span>{age > 6 && <SourceStaleWarning />}</span>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function SourceStaleWarning() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TriangleAlertIcon className="inline pl-2" />
        </TooltipTrigger>
        <TooltipContent>
          <Card className="w-48 bg-secondary-foreground">
            <CardContent className="p-2">
              <p className="text-center text-secondary">
                Possível falha técnica, estamos verificando.
              </p>
            </CardContent>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
