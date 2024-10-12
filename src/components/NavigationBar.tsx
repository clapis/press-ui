import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";

export default function NavigationBar() {
    return (
        <header className="flex justify-end py-4">
            <nav className="flex items-center">
                <Link to="/alerts">
                    <Button variant="link">Meus Alertas</Button>
                </Link>
                <ThemeToggle />
            </nav>
        </header>
    )
}