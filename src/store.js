import { reactive } from "vue";

export const store = reactive({
	apiUrl: "https://api.themoviedb.org/3/search/movie?",
	apiKey: "api_key=b7026f73f4394c5908d9f86e67eb003c",
	language: "language=it-IT",
	searchMovie: "ritorno al futuro",
	resultsMovies: [],
	loading: true,
});
