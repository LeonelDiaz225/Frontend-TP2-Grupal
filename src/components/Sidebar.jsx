import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { to: "/", label: "Portada", end: true },
  { to: "/perfiles", label: "Perfiles" },
  { to: "/arbol-componentes", label: "Árbol de componentes" },
  { to: "/bitacora", label: "Bitácora" },
  { to: "/datos-locales", label: "Datos locales" },
  { to: "/api", label: "API externa" },
];

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <aside className="sidebar" aria-label="Navegación principal">
      <div className="sidebar-header">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/img/logo4.png" alt="Logo de Yoda Labs" />
        </NavLink>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`sidebar-menu${menuOpen ? " is-open" : ""}`}>
        <p className="sidebar-label">Secciones de la misión</p>
        <nav className="sidebar-nav" id="primary-navigation">
        {navigation.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setMenuOpen(false)}
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
      </div>
    </aside>
  );
}

export default Sidebar;
