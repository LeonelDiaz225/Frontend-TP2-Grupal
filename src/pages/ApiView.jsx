import { useEffect, useState } from "react";

function ApiView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("API error");
        return response.json();
      })
      .then(setPosts)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setError("No pudimos cargar los registros. Revisá tu conexión e intentá nuevamente.");
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return (
    <section className="content-panel">
      <p className="eyebrow">TRANSMISIÓN // API EXTERNA</p>
      <h1>Bitácora remota</h1>
      <p className="panel-intro">
        JSONPlaceholder aporta publicaciones de prueba para demostrar el consumo
        de datos externos, la carga asíncrona y el manejo de errores dentro de la SPA.
      </p>
      {loading && <p className="state-message">Cargando registros...</p>}
      {error && <p className="state-message error">{error}</p>}
      {!loading && !error && (
        <div className="api-grid">
          {posts.map((post) => (
            <article className="api-card" key={post.id}>
              <span>TRANSMISIÓN #{String(post.id).padStart(2, "0")}</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ApiView;
