import AlertResults from "./components/AlertResults";
import CreateAlert from "./components/CreateAlert";
import useAlerts from "./hooks/useAlerts";

export default function Alerts() {
  const { alerts, error, isLoading, create, remove, factory } = useAlerts();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Alertas</h1>

      <div className="flex justify-end mb-2">
        <CreateAlert onSubmit={(keyword) => create(factory(keyword))} />
      </div>

      <div>
        { isLoading && <p className="text-sm">Carregando..</p>}
        { error && <p>Não conseguimos carregar seu alertas no momento, tentaremos de novo</p>}
        { alerts && <AlertResults alerts={alerts} onRemove={remove} />}
      </div>
    </div>
  );
}
