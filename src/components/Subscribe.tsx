import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import usePayments from "@/hooks/usePayments";

export default function Subscribe() {
  const { pricing } = usePayments();
  const [session, setSession] = useState("");

  return (
    <Drawer onOpenChange={(open) => !session && open && pricing().then(setSession)}>
      <DrawerTrigger asChild>
        <Button>Upgrade</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="my-3">
          <DrawerTitle className="text-center">
            Escolha o plano ideal para você
          </DrawerTitle>
        </DrawerHeader>
        <div className="my-8">
          {session && <StripePricingTable session={session} />}
        </div>
        <DrawerFooter className="text-center text-sm">
          Você mesmo gerencia sua assinatura. <br />
          Cancele a qualquer momento. Sem perguntas, sem burocracia.
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const StripePricingTable = ({ session }: { session: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement("stripe-pricing-table", {
    // "customer-email": userEmail,
    // "client-reference-id": userId,
    "customer-session-client-secret": session,
    "publishable-key": `${import.meta.env.VITE_STRIPE_PK}`,
    "pricing-table-id": `${import.meta.env.VITE_STRIPE_PRICING_TABLE}`
  });
};
