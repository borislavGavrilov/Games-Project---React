export default function Create(props) {
  return (
    <>
      <header>
        {/* Navigation */}
        <nav>
          <a className="home" href="#">
            {" "}
            <img src="./images/logo.png" alt="logo" />{" "}
          </a>
          <a href="#">Catalog</a>
          {/* Logged-in users */}
          <div id="user">
            <a href="#">Add Game</a>
            <a href="#">Logout</a>
          </div>
          {/* Guest users */}
          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>
      {/* add Page ( Only for logged-in users ) */}
      <section id="add-page">
        <form id="add-new-game">
          <div className="container">
            <h1>Add New Game</h1>
            <div className="form-group-half">
              <label htmlFor="gameName">Game Name:</label>
              <input
                type="text"
                id="gameName"
                name="gameName"
                placeholder="Enter game title..."
              />
            </div>
            <div className="form-group-half">
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Enter game genre..."
              />
            </div>
            <div className="form-group-half">
              <label htmlFor="activePlayers">Active Players:</label>
              <input
                type="number"
                id="activePlayers"
                name="activePlayers"
                min={0}
                placeholder={0}
              />
            </div>
            <div className="form-group-half">
              <label htmlFor="releaseDate">Release Date:</label>
              <input type="date" id="releaseDate" name="releaseDate" />
            </div>
            <div className="form-group-full">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Enter image URL..."
              />
            </div>
            <div className="form-group-full">
              <label htmlFor="summary">Summary:</label>
              <textarea
                name="summary"
                id="summary"
                rows={5}
                placeholder="Write a brief summary..."
                defaultValue={""}
              />
            </div>
            <input
              className="btn submit"
              type="submit"
              defaultValue="ADD GAME"
            />
          </div>
        </form>
      </section>
      <footer>
        <p className="center-text">React Course Exercise @ SoftUni ™</p>
      </footer>
    </>
  );
}
