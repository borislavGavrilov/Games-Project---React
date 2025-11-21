import { useEffect, useState } from "react";
import { Link } from "react-router";
import Game from "../game/Game";

export default function Catalog(props) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/games")
      .then((response) => response.json())
      .then((data) => setGames(Object.values(data)))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <>
      <section id="catalog-page">
        <h1>Catalog</h1>
        {games.length > 0 ? (
          <div className="catalog-container">
            {games.map((game) => (
              <Game key={game?._id} {...game} />
            ))}
          </div>
        ) : (
          <h3 className="no-articles">No Added Games Yet</h3>
        )}
      </section>
    </>
  );
}
