import { LoaderCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import CreateAlert from "./components/CreateAlert";
import useAlerts from "./hooks/useAlerts";
import useSources from "./hooks/useSources";
import { Link } from "react-router-dom";
import useProfile from "./hooks/useProfile";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { date_age_in_days, date_format, humanize } from "@/lib/utils";
import { Button } from "./components/ui/button";
import NoSubscription from "./components/NoSubscription";

export default function Alerts() {
  const { sources } = useSources();
  const { profile } = useProfile();
  const { alerts, error, isLoading, create, remove } = useAlerts();

  const source = (id?: string) => sources?.find((x) => x.id == id)?.name ?? id;

  let max = profile?.subscription?.maxAlerts ?? 0;

  return (
    <div className="flex flex-col">
      { profile && !profile.subscription && <NoSubscription /> }

      <h1 className="text-xl font-semibold mb-3">Alertas</h1>

      <div className="flex justify-between items-end">
        <p className="text-sm">
          Crie alertas para palavras-chaves de seu interesse
        </p>
        { alerts && <CreateAlert isEnabled={!profile || alerts.length < max} onSubmit={create} />}
      </div>

      <div className="my-8">
        {isLoading && <LoaderCircleIcon className="h-4 w-4 animate-spin mx-auto" />}
        {error && <p className="text-sm">Opa, deu zica! Dá um segundo que a gente tenta outra vez.</p>}
        {alerts && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Palavra-chave</TableHead>
                <TableHead>Onde</TableHead>
                <TableHead className="hidden md:table-cell">
                  Criado em
                </TableHead>
                <TableHead>Último</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>{alert.keyword}</TableCell>
                  <TableCell>{source(alert.sourceId)}</TableCell>
                  <TableCell className="hidden md:table-cell">{date_format(alert.createdOn!)}</TableCell>
                  <TableCell>
                    {alert.lastNotification ? humanize(date_age_in_days(alert.lastNotification)) : "-"}
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <Link to={`/?q=${alert.keyword}`}>
                      <Button variant="ghost" title="Buscar">
                        <SearchIcon size="1rem" />
                      </Button>
                    </Link>
                    <Button variant="ghost" onClick={() => remove(alert)} title="Remover"><Trash2Icon size="1rem" /></Button>
                  </TableCell>
                </TableRow>
                
              ))}          
              <TableRow>
                <TableCell colSpan={5} className="text-xs text-center text-muted-foreground">
                  { alerts.length > 0 ? `${alerts.length} / ${max} alertas` : `Nenhum alerta ativo` }
                </TableCell>
              </TableRow>    
            </TableBody>
          </Table>
        )}
      </div>

      <div className="my-3">
        {profile && profile.subscription && alerts && alerts.length >= max && (
          <p className="text-[0.8rem] text-muted-foreground">
            * Faça um <Link className="underline" to="/app/profile">upgrade</Link> do seu plano para criar mais alertas.
          </p>
        )}
      </div>
    </div>
  );
}
