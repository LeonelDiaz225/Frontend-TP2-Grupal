function CharacterCard({ character }) {
  const details = [
    ["Especie", character.species],
    ["Planeta de origen", character.homeworld],
    ["Género", character.gender],
    ["Altura", character.height ? `${character.height} m` : null],
    ["Peso", character.mass ? `${character.mass} kg` : null],
  ].filter(([, value]) => value);
  const wikiUrl = character.wiki?.replace(/^http:/, "https:");

  return (
    <article className="character-card">
      <div className="character-portrait">
        <img src={character.image} alt={`Retrato de ${character.name}`} />
      </div>
      <div className="character-content">
        <span className="character-class">
          {character.class || "Personaje"}
        </span>
        <h2>{character.name}</h2>
        <dl className="character-details">
          {details.map(([label, value]) => (
            <div className="character-detail" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {character.affiliations?.length > 0 && (
          <div className="character-affiliations">
            <h3>Afiliaciones</h3>
            <ul className="character-tags">
              {character.affiliations.map((affiliation) => (
                <li key={affiliation}>{affiliation}</li>
              ))}
            </ul>
          </div>
        )}
        {wikiUrl && (
          <a
            className="character-wiki-link"
            href={wikiUrl}
            target="_blank"
            rel="noreferrer"
          >
            Consultar ficha completa
          </a>
        )}
      </div>
    </article>
  );
}

export default CharacterCard;
