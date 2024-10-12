import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function SideBar() {

  const pages = [
    { title: "Busca", url: "/" },
    { title: "Alertas", url: "/app/alerts" },
    { title: "Perfil", url: "/app/profile" },
  ];

  const { logout } = useKindeAuth();

  return (
    <aside className="my-5">
      <nav className="flex flex-col">
        {pages.map((page) => (
          <NavLink key={page.url} to={page.url}>
            {({ isActive }) => (
              <Button variant="link" className={isActive ? "font-bold" : ""}>
                {page.title}
              </Button>
            )}
          </NavLink>
        ))}
        <Button variant="link" 
            onClick={() => logout()}
            className="inline-block text-start my-3">Sair</Button>
      </nav>
    </aside>
  );
}
