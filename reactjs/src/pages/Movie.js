import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../App.css";

function Movie() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [values, setValues] = useState({
    title: "",
    genre: "",
    rating: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api/v1"
      : process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      getMovie();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getMovie = async () => {
    setLoading(true);

    try {
      await fetch(`${API_BASE}/movies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });

          setValues({
            title: data.title,
            genre: data.genre,
            rating: data.rating,
          });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async () => {
    try {
      await fetch(`${API_BASE}/movies/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          navigate("/dashboard", { replace: true });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const updateMovie = async () => {
    try {
      await fetch(`${API_BASE}/movies/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovie();
  };

  const handleInputChanges = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Details</h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <h5>{values.title}</h5>
        <p>{values.genre}</p>
        <p>{values.rating}</p>

        <button onClick={() => deleteMovie()}>Delete Movie</button>

        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleInputChanges}
            />
          </label>

          <label>
            Genre:
            <input
              type="text"
              name="genre"
              value={values.genre}
              onChange={handleInputChanges}
            />
          </label>

          <label>
            Rating:
            <input
              type="text"
              name="rating"
              value={values.rating}
              onChange={handleInputChanges}
            />
          </label>

          <input type="submit" value="Update Movie" />
        </form>
      </header>
    </div>
  );
}

export default Movie;