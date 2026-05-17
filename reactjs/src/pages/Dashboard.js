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
			: `${process.env.REACT_APP_BASE_URL}/api/v1`;

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
					console.log({ data });
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
		event.persist();

		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie Watchlist</h1>

				<Link to="/">Home</Link>

				{loading && <p>Loading...</p>}
				{error && <p>{error}</p>}

				<ul>
					{movies.map((movie) => (
						<li key={movie._id}>
							<Link to={`/movies/${movie._id}`}>
								{movie.title} — {movie.genre} — {movie.rating}
							</Link>
						</li>
					))}
				</ul>

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

					<input type="submit" value="Add Movie" />
				</form>
			</header>
		</div>
	);
}

export default Dashboard;
