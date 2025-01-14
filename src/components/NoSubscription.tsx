import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Link } from "react-router-dom";

export default function NoSubscription() {
    return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>
             Sua <Link className="underline" to="/app/profile">assinatura</Link> expirou e seus alertas não estão ativos.
          </AlertDescription>
        </Alert>
      )
}