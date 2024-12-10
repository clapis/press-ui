import Search from "./components/Search";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full mt-5 md:mt-8">
      <div className="flex flex-col items-center max-w-sm">
        <p className="text-2xl font-semibold mb-3">Alertas do Diário <span className="hidden md:inline">Oficial</span></p>
        <p className="text-center text-sm md:text-base">
          Crie alertas para palavras-chaves e seja notificado assim que uma nova edição do Diário Oficial publicar algo relevante para você!
        </p>
      </div>

      <Search />
      <Testimonials />
    </div>
  );
}
