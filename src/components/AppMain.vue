<script>
import { store } from "../store";
import axios from "axios";
export default {
	name: "MainContent",
	data() {
		return {
			store,
		};
	},
	methods: {
		getMovie() {
			const params = {
				query: this.store.searchMovie,
			};
			axios
				.get(this.store.apiUrl + this.store.apiKey, {
					params,
				})
				.then((response) => {
					console.log(response.data.results);
					this.store.resultsMovies = response.data.results;
				});
		},
	},
	created() {
		this.getMovie();
	},
};
</script>

<template>
	<div class="containerTS">
		<ul>
			<li v-for="movie in store.resultsMovies">{{ movie.title }}</li>
		</ul>
	</div>
</template>

<style></style>
