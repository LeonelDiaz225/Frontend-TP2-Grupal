function ComponentTree() {
  return (
    <section className="content-panel">
      <p className="eyebrow">ARQUITECTURA // MAPA</p>
      <h1>Árbol de componentes</h1>
      <p className="panel-intro">La aplicación está organizada en componentes reutilizables. El Layout permanece visible mientras React Router cambia el contenido de cada página.</p>
      <div className="tree">
        <div className="tree-root">Main.jsx</div>
        <div className="tree-branch">
          <div className="tree-node"><strong>App</strong><span>Define las rutas de la SPA</span>
            <div className="tree-children">
              <div className="tree-node"><strong>Layout</strong><span>Contenedor persistente</span>
                <div className="tree-children"><div className="tree-node"><strong>Sidebar</strong><span>NavLink + navegación activa</span></div><div className="tree-node"><strong>Outlet</strong><span>Renderiza la vista actual</span></div></div>
              </div>
              <div className="tree-node"><strong>Pages</strong><span>Vistas de la aplicación</span>
                <div className="tree-children"><div className="tree-node"><strong>Home / Profile</strong></div><div className="tree-node"><strong>LocalData / ApiView</strong></div><div className="tree-node"><strong>Bitacora / ComponentTree</strong></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentTree;
