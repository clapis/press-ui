
import { Card, CardContent } from "./ui/card";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Testimonials() {

    const testimonials = [
        { name: "Conceição Rebelo", city: "Sorocaba, SP", quote: "Simples, prático e direto. Configurar os alertas foi fácil e as notificações chegam certinhas!" },
        { name: "Henrique Camacho", city: "São Carlos, SP", quote: "Ficar de olho no Diário Oficial nunca foi tão fácil. Recomendo para qualquer profissional ou empresa." },
        { name: "Rafaela Gaspar", city: "Sorocaba, SP", quote: "O melhor jeito de monitorar licitações e publicações relevantes sem esforço. Um serviço indispensável!" },
        { name: "Helena Torres", city: "Ribeirão Preto, SP", quote: "Agora recebo as atualizações do Diário Oficial na palma da mão. Economia de tempo e zero preocupações!" },
        { name: "Beatriz Rosa", city: "Sorocaba, SP", quote: "Não perco mais nenhuma oportunidade ou novidade importante. O alerta é rápido e eficiente!"},
        { name: "Margarida Raposo", city: "Franca, SP", quote: "Passei a receber alertas sobre concursos e convocações no mesmo dia. Foco no que importa!" },
        { name: "Mónica Pimenta", city: "São Carlos, SP", quote: "Finalmente acompanho tudo sobre minha convocação sem precisar verificar o Diário Oficial manualmente." },
        { name: "Célia Diniz", city: "Franca, SP", quote: "Nunca mais perdi prazos ou atualizações de concursos. Esse serviço é meu aliado na aprovação!" },
    ]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 3);

    return (
      <div className="my-8 md:my-16 w-full overflow-hidden p-2">
        <div className="flex justify-center my-6">
         { Array.from({ length: 5 }, () => (<StarFilledIcon />)) }
        </div>
        <div className="flex justify-center gap-6">
          {testimonials.map((testimonial) => (
            <Card className="border-none w-60 flex-shrink-0">
              <CardContent className="flex p-6 text-sm">
                <div className="flex flex-col">
                  <q className="text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </q>
                  <div className="mt-3">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
}