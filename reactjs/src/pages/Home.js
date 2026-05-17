import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Watchlist</h1>

        <p>
          Keep track of your favorite movies, genres, and ratings.
        </p>

        <Link to="/dashboard">View Dashboard</Link>
      </header>
    </div>
  );
}

export default Home;