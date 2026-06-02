import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../App.css";

function Dashboard() {
	const navigate = useNavigate();

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

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (!token) {
			navigate("/login");
			return;
		}

		getMovies();
	}, []);

	const getMovies = async () => {
		setLoading(true);

		try {
			const response = await fetch(`${API_BASE}/movies`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Unable to load movies");
				return;
			}

			setMovies(data);
		} catch (error) {
			setError(error.message || "Unexpected Error");
		} finally {
			setLoading(false);
		}
	};

	const createMovie = async () => {
		try {
			const response = await fetch(`${API_BASE}/movies`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(values),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Unable to add movie");
				return;
			}

			setValues({
				title: "",
				genre: "",
				rating: "",
			});

			setMovies((currentMovies) => [data, ...currentMovies]);
			setError(null);
		} catch (error) {
			setError(error.message || "Unexpected Error");
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		navigate("/login");
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
						<button className="logout-btn" onClick={logout}>
							Logout
						</button>
					</div>
				</nav>

				<div className="dashboard-grid">
					<div className="form-card">
						<h2>Add Movie</h2>

						<form onSubmit={handleSubmit}>
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
							{movies.length === 0 && !loading && (
								<p>No movies added yet.</p>
							)}

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

			<footer className="footer">
				<p>
					MovieVault • Developed by Stephanie Olivares |
					SOLINYC LLC
				</p>
			</footer>
		</div>
	);
}

export default Dashboard;