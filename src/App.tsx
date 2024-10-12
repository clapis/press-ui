import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-40 mr-12">
        <SideBar />
      </div>
      <main className="w-full mx-4">
        <Outlet />
      </main>
    </div>
  );
}