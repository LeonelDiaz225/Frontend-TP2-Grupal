const entries = [
  ["2026-10-01", "Organización", "Se creó el repositorio y se definieron las pautas de trabajo del equipo."],
  ["2026-10-02", "Identidad", "Se adoptó la estética galáctica Yoda Labs, con paleta espacial y tipografías temáticas."],
  ["2026-10-03", "Migración", "Se migró de páginas HTML independientes a una Single Page Application en React."],
  ["2026-10-04", "Arquitectura", "Se configuró React Router y se construyó un Layout con Sidebar persistente."],
  ["2026-10-05", "Datos", "Se incorporó JSON local con búsqueda, filtros y tarjetas dinámicas."],
  ["2026-10-06", "Integración", "Se conectó una API externa con estados de carga, error y éxito."],
];

function Bitacora() {
  return (
    <section className="content-panel">
      <p className="eyebrow">REGISTRO // EVOLUCIÓN</p>
      <h1>Bitácora de desarrollo</h1>
      <p className="panel-intro">Historial de decisiones, dificultades y avances de la tripulación Yoda Labs.</p>
      <div className="timeline">
        {entries.map(([date, phase, text]) => (
          <article className="timeline-entry" key={date + phase}>
            <time>{date}</time>
            <div><span className="phase-badge">{phase}</span><h2>{text}</h2></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Bitacora;
