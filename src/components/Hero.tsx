export default function Hero() {
    return (
      <div className="my-8 md:my-16 flex flex-col items-center">
        <p className="text-2xl font-semibold mb-3">
          Alertas do Diário <span className="hidden md:inline">Oficial</span>
        </p>
        <p className="text-sm md:text-base max-w-sm text-center mx-2">
          Crie alertas para palavras-chaves e seja notificado assim que uma nova
          edição do Diário Oficial publicar algo relevante para você!
        </p>
      </div>
    );
}