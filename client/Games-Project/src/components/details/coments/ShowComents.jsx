import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowComents({ refresh }) {
  const [coments, setComents] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/comments")
      .then((res) => {
        if (!res.ok) {
          alert("Problem empty data");
          return [];
        }
        return res.json();
      })
      .then((data) => {
        const comentsArray = Object.values(data || {});
        const movieComents = comentsArray.filter(
          (coment) => coment.gameId === gameId
        );
        setComents(movieComents);
      });
  }, [gameId, refresh]);

  return (
    <>
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {coments.length > 0 ? (
            coments.map((data) => (
              <li className="comment" key={data._id}>
                <p>
                  {data.author}: {data.comment}
                </p>
              </li>
            ))
          ) : (
            <p className="no-comment">No comments.</p>
          )}
        </ul>
      </div>
    </>
  );
}
