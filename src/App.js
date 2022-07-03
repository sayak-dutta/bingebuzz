import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/nav" exact element={<NavBar />} />
					<Route path="/card" exact element={<MovieCard />} />
					<Route path="/list" exact element={<MovieList />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
