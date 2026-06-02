import { Link } from "react-router-dom";

import "../App.css";

function Home() {
	const token = localStorage.getItem("token");

	return (
		<div className="App">
			<header className="App-header">
				<nav className="nav">
					<strong>MovieVault</strong>

					<div>
						{token ? (
							<Link to="/dashboard">Dashboard</Link>
						) : (
							<>
								<Link to="/login">Login</Link>
								{" | "}
								<Link to="/register">Register</Link>
							</>
						)}
					</div>
				</nav>

				<section className="hero">
					<div className="hero-card">
						<h1>MovieVault</h1>

						<p>
							A movie watchlist app built with React, Express,
							MongoDB, and a RESTful CRUD API.
						</p>

						{token ? (
							<Link className="btn" to="/dashboard">
								Open Dashboard
							</Link>
						) : (
							<Link className="btn" to="/login">
								Login to Continue
							</Link>
						)}
					</div>
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

export default Home;
