import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";

export default function Root() {

  return (
    <ThemeProvider>
      <div className="container mx-auto md:max-w-[50rem] px-3">
        <NavigationBar />
        <div className="flex">
          <SideBar />
          <main className="w-full mx-4">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
