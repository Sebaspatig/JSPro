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

async function getTopMoviesIds(n = 5) {
	try {
		const popularMovies = await getPopularMovies();
		const ids = popularMovies.slice(0, n).map((movie) => movie.id);
		return ids;
	} catch (error) {
		console.log("tenemos un error", error);
	}
}

async function getMoviesIds() {
	try {
		const popularMovies = await getPopularMovies();
		const ids = popularMovies.map((movie) => movie.id);
		return ids;
	} catch (error) {
		console.log("tenemos un error", error);
	}
}

const renderMovies = (movies) => {
	const movieList = document.getElementById("movies");
	movieList.innerHTML = "";
	movies.forEach((movie) => {
		const listElement = document.createElement("li");
		listElement.setAttribute('class', 'movie__item');
		listElement.innerHTML = `
		<img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
		<h5 class="movie__title">${movie.title}</h5>
        <p class="movie__released">Released on <em>${movie.release_date}</em></p>
		`;

		movieList.appendChild(listElement);
	});
};

const getTopMoviesInParallel = async () => {
	const ids = await getTopMoviesIds();
	const moviePromises = ids.map((id) => getMovie(id));
	const movies = await Promise.all(moviePromises);

	return movies;
};

const getMovies = async () => {
	const ids = await getMoviesIds();
	const moviePromises = ids.map((id) => getMovie(id));
	const movies = await Promise.all(moviePromises);
	return movies;
};

document.getElementById("parallel").onclick = async function () {
	const movies = await getTopMoviesInParallel();
	renderMovies(movies);
};
document.getElementById("btn_all").onclick = async function () {
	const movies = await getMovies();
	renderMovies(movies);
};

setTimeout(async () => {
	const movies = await getMovies();
	renderMovies(movies);
}, 1000);
