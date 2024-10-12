import { LoaderCircleIcon } from "lucide-react";
import AlertResults from "./components/AlertResults";
import CreateAlert from "./components/CreateAlert";
import useAlerts from "./hooks/useAlerts";

export default function Alerts() {
  const { alerts, error, isLoading, create, remove } = useAlerts();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Alertas</h1>

      <div className="flex justify-end mb-2">
        <CreateAlert onSubmit={(keyword) => create(keyword)} />
      </div>

      <div className="my-3">
        { isLoading && <LoaderCircleIcon className="h-4 w-4 animate-spin mx-auto" />}
        { error && <p className="text-sm">Opa, deu zica! Dá um segundo que agente tenta outra vez.</p>}
        { alerts && <AlertResults alerts={alerts} onRemove={remove} />}
      </div>
    </div>
  );
}
