import { TriangleAlertIcon } from "lucide-react";
import { date_age_in_days, date_format, humanize } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { useLatestPublications } from "@/hooks/usePublications";

export default function LatestPublications() {

  const { data, error, isLoading } = useLatestPublications();

  // TODO
  if (error || isLoading) return <></>;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimos Diários Publicados</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data?.sort((a,b) => Number(b.isOfficial) - Number(a.isOfficial) || a.source.length - b.source.length).map((pub) => (
              <TableRow key={pub.id} className={date_age_in_days(pub.date) > 3 ? "text-muted-foreground" : ""}>
                <TableCell>{pub.source}</TableCell>
                <TableCell className="hidden md:inline-flex">
                  {date_format(pub.date)}
                </TableCell>
                <TableCell>
                  <span className="align-middle">{humanize(date_age_in_days(pub.date))}</span>
                  <span>{date_age_in_days(pub.date) > 6 && <SourceStaleWarning />}</span>
                </TableCell>
              </TableRow>
            ))}
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
