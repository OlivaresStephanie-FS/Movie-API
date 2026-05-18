import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Dashboard() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [values, setValues] = useState({
		title: "",
		genre: "",
		rating: "",
	});

	const API_BASE =
		process.env.NODE_ENV === "development"
			? "http://localhost:8000/api/v1"
			: "/api/v1";

	useEffect(() => {
		let ignore = false;

		if (!ignore) {
			getMovies();
		}

		return () => {
			ignore = true;
		};
	}, []);

	const getMovies = async () => {
		setLoading(true);

		try {
			await fetch(`${API_BASE}/movies`)
				.then((res) => res.json())
				.then((data) => {
					setMovies(data);
				});
		} catch (error) {
			setError(error.message || "Unexpected Error");
		} finally {
			setLoading(false);
		}
	};

	const createMovie = async () => {
		try {
			await fetch(`${API_BASE}/movies`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			}).then(() => {
				setValues({
					title: "",
					genre: "",
					rating: "",
				});

				getMovies();
			});
		} catch (error) {
			setError(error.message || "Unexpected Error");
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createMovie();
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
					</div>
				</nav>

				<div className="dashboard-grid">
					<div className="form-card">
						<h2>Add Movie</h2>

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

							<input type="submit" value="Add Movie" />
						</form>
					</div>

					<div>
						<h2>Movie Collection</h2>

						{loading && <p>Loading...</p>}
						{error && <p>{error}</p>}

						<ul className="movie-list">
							{movies.map((movie) => (
								<li key={movie._id}>
									<div className="movie-card">
										<Link to={`/movies/${movie._id}`}>
											<h3>{movie.title}</h3>
										</Link>

										<div className="movie-meta">
											<span className="badge">
												{movie.genre}
											</span>
											<span className="badge">
												Rating: {movie.rating}
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Dashboard;
