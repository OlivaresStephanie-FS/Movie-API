import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/movies/:id" element={<Movie />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;