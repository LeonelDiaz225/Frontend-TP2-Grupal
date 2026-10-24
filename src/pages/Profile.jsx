import { Link, useParams } from "react-router-dom";

const profiles = {
  leonel: ["Leonel Diaz", "24 años", "Santa Fé", "/img/yoda2.jpg", "#4da3ff", "Apasionado por construir experiencias web limpias y funcionales. En este proyecto trabajó en la arquitectura y la integración de las vistas."],
  maximiliano: ["Maximiliano Millan", "37 años", "Buenos Aires", "/img/yoda6.jpg", "#ff9900", "Explora la interacción entre diseño y código para crear interfaces dinámicas, claras y disfrutables."],
  itziar: ["Itziar Urriola", "34 años", "Buenos Aires", "/img/avatar-itziar.jpg", "#b266ff", "Aporta sensibilidad visual y criterio de identidad para que cada sección de Yoda Labs tenga una voz propia."],
  melisa: ["Melisa Solano", "36 años", "Buenos Aires", "/img/yoda7.jpg", "#e63c3c", "Soy estudiante de Desarrollo de Software y me interesa seguir aprendiendo sobre programación y desarrollo web. Me considero una persona responsable, organizada y comprometida con el trabajo en equipo. Disfruto adquirir nuevos conocimientos, enfrentar desafíos y participar en proyectos que me permitan seguir creciendo profesionalmente."],  
  yohana: ["Yohana Olivera", "35 años", "Tucumán", "/img/avatar-yohana.jpg", "#ff66b2", "Trabaja sobre el contenido y la adaptación responsive para que la tripulación pueda navegar desde cualquier dispositivo."],
};

function Profile() {
  const { slug } = useParams();
  const profile = profiles[slug];
  if (!profile) {
    return <section className="content-panel"><p className="eyebrow">STAFF // SELECCIÓN</p><h1>Perfiles de la tripulación</h1><div className="profile-list">{Object.entries(profiles).map(([key, value]) => <Link to={`/perfiles/${key}`} className="profile-list-link" key={key}>{value[0]}<span>→</span></Link>)}</div></section>;
  }
  const [name, age, location, image, color, bio] = profile;
  return <section className="profile-panel" style={{ "--profile-color": color }}><Link className="back-link" to="/perfiles">← Ver todos los perfiles</Link><div className="profile-header"><img src={image} alt={`Avatar de ${name}`} /><div><p className="eyebrow">YODA LABS // PERFIL</p><h1>{name}</h1><p className="profile-meta">{age} · {location}</p></div></div><p className="profile-bio">{bio}</p><h2>Conocimientos</h2><div className="tags">{["HTML5", "CSS3", "JavaScript", "React"].map((skill) => <span key={skill}>{skill}</span>)}</div></section>;
}

export default Profile;
