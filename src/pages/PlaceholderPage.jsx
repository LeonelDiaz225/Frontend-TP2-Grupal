function PlaceholderPage({ title, description }) {
  return (
    <section className="page-placeholder">
      <p className="eyebrow">YODA LABS // TP2</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="coming-soon">Módulo preparado para la próxima etapa</span>
    </section>
  );
}

export default PlaceholderPage;
