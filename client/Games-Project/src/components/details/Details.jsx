import { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Coments from "./coments/ComentsCreate";
import ShowComents from "./coments/ShowComents";

export default function Details({ user }) {
  const { gameId } = useParams();
  const gameIdFromParams = gameId;
  const [game, setGame] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/games/${gameIdFromParams}`)
      .then((response) => response.json())
      .then((data) => setGame(data))
      .catch((error) => console.error("Error fetching game details:", error));
  }, [gameIdFromParams]);

  const deleteGame = () => {
    fetch(`http://localhost:3030/jsonstore/games/${gameIdFromParams}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  const comentRefresh = () => {
    setRefresh((state) => !state);
  };

  return (
    <>
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="header-and-image">
            <img className="game-img" src={game?.imageUrl} alt={game?.title} />
            <div className="meta-info">
              <h1 className="game-name">{game?.title}</h1>
              <p className="data-row">
                <span className="label">Genre:</span>
                <span className="value">{game?.genre}</span>
              </p>
              <p className="data-row">
                <span className="label">Active Players:</span>
                <span className="value">{game?.players}</span>
              </p>
              <p className="data-row">
                <span className="label">Release Date:</span>
                <span className="value">{game?.date}</span>
              </p>
            </div>
            <div className="summary-section">
              <h2>Summary:</h2>
              <p className="text-summary">{game?.summary}</p>
            </div>
          </div>
          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          {user ? (
            <div className="buttons">
              <Link to={`/catalog/${gameId}/edit`} className="button">
                Edit
              </Link>

              <button className="button" onClick={deleteGame}>
                Delete
              </button>
            </div>
          ) : (
            ""
          )}

          <ShowComents refresh={comentRefresh} />
        </div>
        {user ? <Coments user={user} refresh={comentRefresh} /> : ""}
      </section>
    </>
  );
}
