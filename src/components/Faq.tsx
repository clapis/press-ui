import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


export default function Faq() {
    return (
      <div className="w-full px-3">
        <p className="text-lg text-center font-semibold mb-6">
          Perguntas Frequentes
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>O serviço é gratuito?</AccordionTrigger>
            <AccordionContent>
              Sim, o serviço oferece 3 alertas gratuitos para todos os usuários por 3 meses.
              Os Membros Plus têm acesso a funcionalidades extras, com até 20
              alertas incluídos, além de outras vantagens exclusivas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>
              Para quais diários oficiais o serviço funciona?
            </AccordionTrigger>
            <AccordionContent>
              <p>Atualmente, o serviço cobre os seguintes diários oficiais:</p>
              <ol className="list-inside list-disc my-2">
                <li>Diário Oficial da União</li>
                <li>Diário Oficial do Município de Franca - SP</li>
                <li>Diário Oficial do Município de Ribeirão Preto - SP</li>
                <li>Diário Oficial do Município de São Carlos - SP</li>
                <li>Diário Oficial do Município de Sorocaba - SP</li>
              </ol>
              <p>
                Estamos constantemente expandindo nossa cobertura com base no
                interesse dos usuários.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>
              Minha cidade/estado não está na lista. O que faço?
            </AccordionTrigger>
            <AccordionContent>
              Se sua cidade ou estado ainda não estiver incluído, você pode
              enviar uma solicitação. Nossa equipe trabalhará para adicioná-lo o
              mais rápido possível.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              Qual é a precisão dos alertas e da busca?
            </AccordionTrigger>
            <AccordionContent>
              Nosso sistema possui uma precisão estimada de 97%. Apesar de não
              garantirmos 100%, nosso objetivo é oferecer um serviço útil e
              confiável.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="6">
            <AccordionTrigger>
              Como sou notificado quando há um novo alerta?
            </AccordionTrigger>
            <AccordionContent>
              Uma notificação por e-mail será enviada com um link direto para a
              edição do Diário Oficial que contém sua palavra-chave.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="7">
            <AccordionTrigger>
              Posso alterar minhas palavras-chave ou preferências depois?
            </AccordionTrigger>
            <AccordionContent>
              Sim, você pode editar ou excluir seus alertas a qualquer momento
              via{" "}
              <Link className="hover:underline" to="/app/alerts">
                Meus Alertas
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="8">
            <AccordionTrigger>
              Quanto tempo leva para receber um alerta após a publicação no
              Diário Oficial?
            </AccordionTrigger>
            <AccordionContent>
              Nosso sistema verifica novas publicações regularmente.
              Normalmente, os alertas são enviados poucos minutos após a
              detecção de uma correspondência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="9">
            <AccordionTrigger>
              E se eu não receber um alerta esperado?
            </AccordionTrigger>
            <AccordionContent>
              Se notar alguma falha ou ausência de alerta, entre em contato com
              nosso suporte. Estamos sempre aprimorando o serviço para melhor
              atendê-lo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="10">
            <AccordionTrigger>
              Posso sugerir melhorias ou funcionalidades?
            </AccordionTrigger>
            <AccordionContent>
              Com certeza! Valorizamos seu feedback. Envie suas sugestões
              através da nosso <Link className="hover:underline" to="/app/profile">contato</Link>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
}