import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

export default function Profile () {
  const { user } = useKindeAuth();
  
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mb-3">Perfil</h1>
      <div className="space-y-8">
        <div className="my-5 space-y-2">
          <Label>Email</Label>
          <Input type="text" defaultValue={user!.email!} disabled />
          <p className="text-[0.8rem] text-muted-foreground">Enviaremos notificações de seus alertas para o seu email.</p>
        </div>
      </div>
    </div>
  );
}
