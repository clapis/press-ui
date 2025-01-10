import { SearchIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Alert, Source } from "@/lib/types";
import { date_age_in_days, date_format, humanize } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function AlertResults({alerts, sources, onRemove} : {alerts: Alert[], sources?: Source[], onRemove: (alert: Alert) => void}) {

  const source = (id?: string) => sources?.find(x => x.id == id)?.name ?? id;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Palavra-chave</TableHead>
          <TableHead>Onde</TableHead>
          <TableHead className="hidden md:table-cell">Criado em</TableHead>
          <TableHead>Último alerta</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell>{alert.keyword}</TableCell>
            <TableCell>{source(alert.sourceId)}</TableCell>
            <TableCell className="hidden md:table-cell">
              {date_format(alert.createdOn!)}
            </TableCell>
            <TableCell>{alert.lastNotification ? humanize(date_age_in_days(alert.lastNotification)) : "-"}</TableCell>
            <TableCell className="flex justify-end">
              <Link to={ `/?q=${alert.keyword}`}><Button variant="ghost" title="Buscar"><SearchIcon size="1rem"/></Button></Link>
              <Button variant="ghost" onClick={() => onRemove(alert)} title="Remover"><Trash2Icon size="1rem" /></Button>
            </TableCell>
          </TableRow>
        ))}
        { alerts.length === 0 && <TableRow><TableCell>-</TableCell></TableRow>}
      </TableBody>
    </Table>
  );
}