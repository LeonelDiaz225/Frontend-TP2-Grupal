import { Link } from "react-router-dom";

const members = [
  ["leonel", "Leonel Diaz", "Frontend / Arquitectura", "/img/yoda2.jpg", "#4da3ff"],
  ["maximiliano", "Maximiliano Millan", "Frontend / Interacciones", "/img/yoda6.jpg", "#ff9900"],
  ["itziar", "Itziar Urriola", "Diseño / Identidad", "/img/avatar-itziar.jpg", "#b266ff"],
  ["melisa", "Melisa Solano", "Contenido / QA", "/img/yoda7.jpg", "#e63c3c"],
  ["yohana", "Yohana Olivera", "Responsive / Contenido", "/img/avatar-yohana.jpg", "#ff66b2"],
];

function Home() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">MISIÓN // TRABAJO PRÁCTICO 2</p>
          <h1>Bienvenidos a <span>Yoda Labs</span></h1>
          <p className="lead">Desarrollando el futuro del entorno web desde el equilibrio entre creatividad, código y colaboración.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/perfiles">Conocer la tripulación</Link>
            <Link className="button-secondary" to="/arbol-componentes">Explorar arquitectura</Link>
          </div>
        </div>
        <img className="hero-logo" src="/img/logo-yodalabs.png" alt="Logo de Yoda Labs" />
      </section>
      <section>
        <div className="section-heading"><div><p className="eyebrow">IDENTIFICACIÓN // STAFF</p><h2>La tripulación</h2></div><span>05 integrantes</span></div>
        <div className="member-grid">
          {members.map(([slug, name, role, image, color]) => (
            <Link className="member-card" style={{ "--member-color": color }} to={`/perfiles/${slug}`} key={slug}>
              <img src={image} alt={`Avatar de ${name}`} /><div><h3>{name}</h3><p>{role}</p></div><strong>→</strong>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
