import { Link } from "react-router-dom";

import "../App.css";

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<nav className="nav">
					<strong>MovieVault</strong>
					<Link to="/dashboard">Dashboard</Link>
				</nav>

				<section className="hero">
					<div className="hero-card">
						<h1>MovieVault</h1>
						<p>
							A movie watchlist app built with React,
							Express, MongoDB, and a RESTful CRUD API.
						</p>

						<Link className="btn" to="/dashboard">
							View Movie Dashboard
						</Link>
					</div>
				</section>
			</header>
			<footer className="footer">
	<p>MovieVault • Developed by Stephanie Olivares | SOLINYC LLC</p>
</footer>
		</div>
	);
}

export default Home;
