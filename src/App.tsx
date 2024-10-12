import { NavLink, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function App() {

    const nav = [
        { title: "Busca", url: "/" },
        { title: "Alertas", url: "/app/alerts" },
        { title: "Notificações", url: "/app/notifications" },
        { title: "Preferencias", url: "/app/settings" },
        { title: "Feedback", url: "/app/feedback" },
    ]

    return (
        <div className="flex my-8">

            <aside className="my-5 md:min-w-40">
                <nav className="flex flex-col">
                    {nav.map(page => (
                      <NavLink key={page.url} to={page.url}>
                          {({ isActive }) => (
                            <Button variant="link" className={isActive ? "font-bold" : ""}>{page.title}</Button>
                           )}
                      </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="ml-12 w-full md:max-w-[50rem]">
                <Outlet />
            </main>

        </div>
    );
}