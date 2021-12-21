// const { default: fetch } = require("node-fetch");

const apiKey = "b7d311985c880af085df68f20b3116e2";

const getMovie = async (id) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getPopularMovies = async () => {
	const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
};

async function getTopMoviesIds(n = 10) {
	try {
		const popularMovies = await getPopularMovies();
		const ids = popularMovies.slice(0, n).map((movie) => movie.id);
		return ids;
	} catch (error) {
		console.log("tenemos un error", error);
	}
}

// getTopMoviesIds(2).then((ids) => console.log(ids));

const renderMovies = (movies) => {
	const movieList = document.getElementById("movies");
	movieList.innerHTML = "";
	console.log(movies)
	movies.forEach((movie) => {
		const listElement = document.createElement("li");
		listElement.innerHTML = `
		<img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
		<h5>${movie.title}</h5>
        <p>Released on <em>${movie.release_date}</em></p>
		`;

		movieList.appendChild(listElement);
	});
};

const getTopMoviesInParallel = async () => {

	const ids = await getTopMoviesIds();
	const moviePromises = ids.map(id => getMovie(id));

	const movies = await Promise.all(moviePromises);

	return movies;
};

document.getElementById('parallel').onclick = async function() {
	const movies = await getTopMoviesInParallel();
	renderMovies(movies);
};