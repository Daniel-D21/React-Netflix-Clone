import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../request";
function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchBanner() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			let a = Math.floor(Math.random() * request.data.results.length);
			setMovie(request.data.results[a]);
		}
		fetchBanner();
	}, []);

	function truncate(s, n) {
		return s?.length > n ? s.substr(0, n - 1) + "..." : s;
	}

	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
				backgroundSize: "cover",
				backgroundPosition: " center center",
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie.title || movie.name || movie.original_title}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">play</button>
					<button className="banner__button">Mylist</button>
				</div>
				<h4 className="banner__discription">
					{truncate(movie?.overview, 150)}
				</h4>
			</div>
			<div className="banner__fade"></div>
		</div>
	);
}

export default Banner;
// ?.length>150? movie?.overview?.substring(0,150) +'...':movie?.overview
