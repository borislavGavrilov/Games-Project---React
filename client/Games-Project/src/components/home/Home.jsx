import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Game from "../game/Game";

export default function Home(props) {
  const [games, setGames] = useState([]);
  const [last3Games, setLast3Games] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/games")
      .then((response) => response.json())
      .then((data) => setGames(Object.values(data)))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  useEffect(() => {
    const sortedGames = [...games].sort((a, b) => b._createdOn - a._createdOn);
    setLast3Games(sortedGames.slice(0, 3));
  }, [games]);

  return (
    <>
      {/* Home Page */}
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in </h3>
          <img id="logo-left" src="./images/logo.png" alt="logo" />
        </div>

        <div id="home-page">
          <h1>Latest Games</h1>

          <div id="latest-wrap">
            {/* Display div: with information about every game (if any) */}
            <div className="home-container">
              {last3Games.length > 0 ? (
                <div className="catalog-container">
                  {last3Games.map((game) => (
                    <Game key={game?._id} {...game} />
                  ))}
                </div>
              ) : (
                <h3 className="no-articles">No Added Games Yet</h3>
              )}
              {/* Display paragraph: If there are no games */}
              {/* <p className="no-articles">No games yet</p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
