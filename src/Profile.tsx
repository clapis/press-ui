import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function Profile() {
  const { user } = useKindeAuth();

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Perfil</h1>
      <div className="space-y-8">

        <div className="my-5 space-y-2">
          <Label>Plano</Label>
          <div className="flex justify-between gap-5">
            <Input type="text" defaultValue="Básico" disabled />
            <Button disabled>Upgrade</Button>
          </div>
          <p className="text-[0.8rem] text-muted-foreground">
            Faça um upgrade para o plano Plus e desbloqueie mais
            funcionalidades.
          </p>
        </div>

        <div className="my-5 space-y-2">
          <Label>Notificações</Label>
          <Input type="text" defaultValue={user!.email!} disabled />
          <p className="text-[0.8rem] text-muted-foreground">
            Enviaremos notificações de seus alertas para o seu email.
          </p>
        </div>
        
      </div>
    </div>
  );
}
