import { LoaderCircleIcon } from "lucide-react";
import AlertResults from "./components/AlertResults";
import CreateAlert from "./components/CreateAlert";
import useAlerts from "./hooks/useAlerts";
import { Link } from "react-router-dom";

export default function Alerts() {
  const { alerts, error, isLoading, create, remove } = useAlerts();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Alertas</h1>

      <div className="flex justify-end">
        { alerts && <CreateAlert isEnabled={alerts.length < 2} onSubmit={create} /> }
      </div>

      <div className="my-3">
        { isLoading && <LoaderCircleIcon className="h-4 w-4 animate-spin mx-auto" />}
        { error && <p className="text-sm">Opa, deu zica! Dá um segundo que a gente tenta outra vez.</p>}
        { alerts && <AlertResults alerts={alerts} onRemove={remove} />}
      </div>

      <div className="my-3">
        { alerts && alerts.length >= 2 && <p className="text-[0.8rem] text-muted-foreground">
          * Faça um <Link className="underline" to="/app/profile">upgrade</Link> do seu plano para criar mais alertas.
        </p>}
      </div>
    </div>
  );
}
