import { Link } from "react-router";
import Details from "../details/Details";

export default function Game({ _id, title, genre, imageUrl }) {
  return (
    <>
      <div className="game">
        <img src={imageUrl} alt={title} />
        <div className="details-overlay">
          <p className="name">{title}</p>
          <p className="genre">{genre}</p>
          <Link to={`/catalog/${_id}/details`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
