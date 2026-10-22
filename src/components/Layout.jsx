import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import StarfieldCanvas from "./StarfieldCanvas";

function Layout() {
  return (
    <div className="app-shell">
      <StarfieldCanvas />
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
