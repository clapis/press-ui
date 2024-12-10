import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import NavigationBar from "./components/NavigationBar";

export default function Root() {
  return (
    <ThemeProvider>
      <div className="container mx-auto md:max-w-[50rem] px-3 mb-20">
        <NavigationBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
