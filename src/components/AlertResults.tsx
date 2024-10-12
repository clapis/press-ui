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

export default function AlertResults({alerts, onRemove} : {alerts: Alert[], onRemove: (alert: Alert) => void}) {

    return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Palavra-chave</TableHead>
              <TableHead>Encontrado em</TableHead>
              <TableHead className="hidden md:table-cell">Criado em</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts?.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.keyword}</TableCell>
                <TableCell>{alert.lastNotifiedOn}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {alert.createdOn}
                </TableCell>
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