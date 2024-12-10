import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import SideBar from "./SideBar";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";

export default function NavigationBar() {

  const location = useLocation();
  const { isAuthenticated } = useKindeAuth();

  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location])

  return (
    <header className="flex justify-between py-4 mb-5 md:mb-8">
      <div>
        { isAuthenticated && 
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <MenuIcon className="w-4 h-4 m-3" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="text-left text-base">Alerta Diário</SheetTitle>
            <SheetDescription>
            </SheetDescription>
            <SideBar />
          </SheetContent>
        </Sheet> }
      </div>
      <nav className="flex items-center">
        <Link to="/app/alerts">
          <Button variant="link">Meus Alertas</Button>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}