import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-full mx-4">
        <Outlet />
      </main>
    </div>
  );
}