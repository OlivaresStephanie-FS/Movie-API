import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../App.css";

function Login() {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const API_BASE =
		process.env.NODE_ENV === "development"
			? "http://localhost:8000/api/v1"
			: "/api/v1";

	const handleInputChanges = (event) => {
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const loginUser = async () => {
		try {
			const response = await fetch(`${API_BASE}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Login failed");
				return;
			}

			localStorage.setItem("token", data.token);

			setError(null);
			navigate("/dashboard");
		} catch (error) {
			setError(error.message || "Unexpected Error");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		loginUser();
	};

	return (
		<div className="App">
			<header className="App-header">
				<nav className="nav">
					<strong>MovieVault</strong>
					<Link to="/">Home</Link>
				</nav>

				<section className="detail-card">
					<h1>Login</h1>

					{error && <p>{error}</p>}

					<form onSubmit={handleSubmit}>
						<label>
							Email
							<input
								type="email"
								name="email"
								value={values.email}
								onChange={handleInputChanges}
							/>
						</label>

						<label>
							Password
							<input
								type="password"
								name="password"
								value={values.password}
								onChange={handleInputChanges}
							/>
						</label>

						<input type="submit" value="Login" />
					</form>

					<p>
						Need an account? <Link to="/register">Register</Link>
					</p>
				</section>
			</header>

			<footer className="footer">
				<p>
					MovieVault • Developed by Stephanie Olivares | SOLINYC LLC
				</p>
			</footer>
		</div>
	);
}

export default Login;
