import { useMemo, useState } from "react";
import data from "../data/data.json";

function LocalData() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...new Set(data.map((item) => item.category))];
  const filteredData = useMemo(
    () => data.filter((item) => (category === "Todas" || item.category === category)
      && `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())),
    [category, search],
  );
  return (
    <section className="content-panel">
      <p className="eyebrow">ARCHIVO LOCAL // JSON</p><h1>Recursos de la misión</h1>
      <p className="panel-intro">Colección local de tecnologías y conceptos utilizados en esta entrega, filtrable sin recargar la página.</p>
      <div className="filters">
        <label>Búsqueda<input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ej: React, diseño..." /></label>
        <label>Filtro<select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <p className="result-count">{filteredData.length} recursos encontrados</p>
      <div className="resource-grid">{filteredData.map((item) => <article className="resource-card" key={item.id}><img src={item.icon} alt="" /><span>{item.category}</span><h2>{item.name}</h2><p>{item.description}</p></article>)}</div>
    </section>
  );
}

export default LocalData;
