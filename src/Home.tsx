import LatestPublications from "./components/LatestPublications";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full md:mt-8">
      <div className="flex flex-col items-center max-w-sm">
        <p className="text-2xl font-semibold mb-3">Alertas do Diário Oficial</p>
        <p className="text-sm text-center">
          Crie seu alerta para palavras-chaves e assim que uma nova edição do
          diário oficial seja publicado contendo sua busca, te avisamos!
        </p>
      </div>

      <Search />

      <LatestPublications />
    </div>
  );
}
