import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/", label: "Portada", end: true },
  { to: "/perfiles", label: "Perfiles" },
  { to: "/arbol-componentes", label: "Árbol de componentes" },
  { to: "/bitacora", label: "Bitácora" },
  { to: "/datos-locales", label: "Datos locales" },
  { to: "/api", label: "API externa" },
];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navegación principal">
      <NavLink to="/" className="brand">
        <img src="/img/logo4.png" alt="Yoda Labs" />
        <span>YODA LABS</span>
      </NavLink>

      <p className="sidebar-label">Secciones de la misión</p>
      <nav className="sidebar-nav">
        {navigation.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            <span aria-hidden="true">›</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" aria-hidden="true" />
        <span>TP2 // SPA React</span>
      </div>
    </aside>
  );
}

export default Sidebar;
