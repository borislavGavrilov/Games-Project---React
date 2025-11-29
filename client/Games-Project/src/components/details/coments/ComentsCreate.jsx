import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function ComentsCreate({ user, refresh }) {
  const [comment, setComent] = useState("");
  const { gameId } = useParams();

  function onChange(e) {
    setComent(e.target.value);
  }

  async function onSubmit() {
    const request = await fetch("http://localhost:3030/jsonstore/comments", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        author: user.email,
        gameId: gameId,
        comment: comment,
      }),
    });
    setComent("");
    refresh();
  }
  return (
    <>
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={onSubmit}>
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment}
          />
          <button className="btn submit" type="submit">
            Add Comment
          </button>
        </form>
      </article>
    </>
  );
}
