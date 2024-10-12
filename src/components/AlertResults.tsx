import { Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Alert } from "@/lib/types";
import { date_format } from "@/lib/utils";

export default function AlertResults({alerts, onRemove} : {alerts: Alert[], onRemove: (alert: Alert) => void}) {
    return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Palavra-chave</TableHead>
              <TableHead className="hidden md:table-cell">Criada em</TableHead>
              <TableHead>Último alerta</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts?.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.term}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {date_format(alert.createdOn!)}
                </TableCell>
                <TableCell>{alert.lastNotification ? date_format(alert.lastNotification) : "-"}</TableCell>
                <TableCell className="flex justify-end">
                  <Button variant="ghost" onClick={() => onRemove(alert)}>
                    <Trash2Icon size="1rem" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    );
}