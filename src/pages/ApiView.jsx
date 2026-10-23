import { useCallback, useEffect, useRef, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function ApiView() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  const loadCharacter = useCallback((id) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError("");

    fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("API error");
        return response.json();
      })
      .then(setCharacter)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setError("No pudimos cargar el personaje. Revisá tu conexión e intentá nuevamente.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadCharacter(2);
    return () => controllerRef.current?.abort();
  }, [loadCharacter]);

  const discoverCharacter = () => {
    const randomId = Math.floor(Math.random() * 88) + 1;
    loadCharacter(randomId);
  };

  return (
    <section className="content-panel">
      <p className="eyebrow">TRANSMISIÓN // API EXTERNA</p>
      <h1>Archivo galáctico</h1>
      <p className="panel-intro">
        Explora personajes de Star Wars y descubre sus características,
        origen y afiliaciones.
      </p>
      <button
        className="button-primary"
        type="button"
        onClick={discoverCharacter}
        disabled={loading}
      >
        {loading ? "Buscando en la galaxia..." : "Descubre quién eres"}
      </button>
      {loading && <p className="state-message">Cargando personaje...</p>}
      {error && <p className="state-message error">{error}</p>}
      {!loading && !error && character && <CharacterCard character={character} />}
    </section>
  );
}

export default ApiView;
