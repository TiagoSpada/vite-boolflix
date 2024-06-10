import { reactive } from "vue";

export const store = reactive({
	apiUrl: "https://api.themoviedb.org/3",
	apiKey: "b7026f73f4394c5908d9f86e67eb003c",
	language: "it-IT",
	endpoints: {
		moive: "/search/movie",
		tv: "/search/tv",
	},
	SearchKey: "",
	resultsMovies: [],
	resultsMoviesProva: [],
	resultsTv: [],
	loading: true,
	urlImg: "https://image.tmdb.org/t/p/",
});
