import React, { useEffect } from "react";
import apiData from "../config.json";

export default function MovieList() {
	const [movies, setMovies] = React.useState();

	const apiCall = async () => {
		const movieResp = await fetch(apiData.URL + "list/5?&api_key=" + apiData.APIKEY, {
			method: "GET",
		});

		const movieData = await movieResp.json();
		setMovies(movieData.results);
	};

	return (
		<div>
			MovieList
			<button onClick={apiCall}>hi</button>
			<img src={apiData.IMG_URL + movies?.[3]?.poster_path} />
			{console.log(movies)}
		</div>
	);
}
