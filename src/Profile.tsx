import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import useProfile from "./hooks/useProfile";
import { LoaderCircleIcon } from "lucide-react";
import Subscribe from "./components/Subscribe";
import { Button } from "./components/ui/button";
import usePayments from "./hooks/usePayments";
import { date_age_in_days } from "./lib/utils";

export default function Profile() {
  const { portal } = usePayments();
  const { profile, error, isLoading } = useProfile();

  let isTrial = profile?.subscription?.isTrial !== false;
  let remaining = profile && date_age_in_days(profile.createdOn) < 15 ? 15 - date_age_in_days(profile.createdOn) : 0;
  
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Perfil</h1>

      {isLoading && <LoaderCircleIcon className="h-4 w-4 animate-spin mx-auto" />}
      {error && <p className="text-sm">Opa, deu zica! Dá um segundo que a gente tenta outra vez.</p>}

      {profile && (
        <div className="space-y-8">
          <div className="my-5 space-y-2">
            <Label>Notificações</Label>
            <Input type="text" defaultValue={profile.email} disabled />
            <p className="text-[0.8rem] text-muted-foreground">
              Enviaremos notificações de seus alertas para o seu email.
            </p>
          </div>

          <div className="my-5 space-y-2">
            <Label>Plano</Label>
            <div className="flex justify-between gap-5">
              <Input type="text" defaultValue={profile.subscription?.name ?? "-"} disabled />
              { isTrial && <Subscribe /> }
              { !isTrial && <Button onClick={() => portal().then(url => window.location.href = url)}>Gerenciar</Button> }
            </div>
            
            <p className="text-[0.8rem] text-muted-foreground align-text-bottom">
              { profile.subscription && isTrial && <span>Restam {remaining} dias grátis. Faça um upgrade agora e não deixe a oportunidade passar.</span> }
              { !profile.subscription && <span className="text-red-600">Seu plano expirou. Renove para reativar seus alertas.</span> }
            </p>
          </div>

          <div className="my-5 space-y-2">
            <Label>Suporte</Label>
            <p className="text-sm text-muted-foreground">
              <span>
                Tem dúvidas, sugestões ou precisa de ajuda? Sua cidade/estado
                não está na lista?
              </span>
              <br />
              <span>Entre em contato conosco pelo e-mail: </span>
              <a
                className="text-primary"
                href="mailto:suporte@alertasdodiario.com.br"
              >
                suporte@alertasdodiario.com.br
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
