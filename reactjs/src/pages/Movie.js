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
			: "/api/v1";

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
				.then(() => {
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

	const handleSubmit = (event) => {
		event.preventDefault();
		updateMovie();
	};

	const handleInputChanges = (event) => {
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div className="App">
			<header className="App-header">
				<nav className="nav">
					<strong>MovieVault</strong>

					<div className="actions">
						<Link to="/">Home</Link>
						<Link to="/dashboard">Dashboard</Link>
					</div>
				</nav>

				<section className="detail-card">
					<h1>Movie Details</h1>

					{loading && <p>Loading...</p>}
					{error && <p>{error}</p>}

					<h2>{values.title}</h2>

					<div className="movie-meta">
						<span className="badge">{values.genre}</span>
						<span className="badge">Rating: {values.rating}</span>
					</div>

					<div className="actions">
						<button
							className="danger"
							onClick={() => deleteMovie()}>
							Delete Movie
						</button>
					</div>

					<form onSubmit={(event) => handleSubmit(event)}>
						<label>
							Movie Title
							<input
								type="text"
								name="title"
								value={values.title}
								onChange={handleInputChanges}
							/>
						</label>

						<label>
							Genre
							<input
								type="text"
								name="genre"
								value={values.genre}
								onChange={handleInputChanges}
							/>
						</label>

						<label>
							Rating
							<input
								type="text"
								name="rating"
								value={values.rating}
								onChange={handleInputChanges}
							/>
						</label>

						<input type="submit" value="Update Movie" />
					</form>
				</section>
			</header>
			<footer className="footer">
	<p>MovieVault • Developed by Stephanie Olivares | SOLINYC LLC</p>
</footer>
		</div>
	);
}

export default Movie;
