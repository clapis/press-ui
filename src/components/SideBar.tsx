import { NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export default function SideBar() {

  const pages = [
    { title: "Busca", url: "/" },
    { title: "Alertas", url: "/alerts" },
    { title: "Notificações", url: "/notifications" },
    { title: "Preferencias", url: "/settings" },
    { title: "Feedback", url: "/feedback" },
  ];

  const { pathname } = useLocation();

  if (pathname === "/") return <></>;

  return (
    <aside className="hidden md:block md:w-40 mr-12 my-5">
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
      </nav>
    </aside>
  );
}
