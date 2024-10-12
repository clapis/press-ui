import { TriangleAlertIcon } from "lucide-react";
import { age, humanize, source } from "../lib/types";
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
            {data?.sort((a,b) => age(a) - age(b)).map((pub) => (
              <TableRow key={pub.id} className={age(pub) > 7 ? "text-muted-foreground" : ""}>
                <TableCell>{source(pub)}</TableCell>
                <TableCell className="hidden md:inline-flex">
                  {new Date(pub.date).toDateString()}
                </TableCell>
                <TableCell>
                  <span className="align-middle">{humanize(age(pub))}</span>
                  <span>{age(pub) > 14 && <SourceStaleWarning />}</span>
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
