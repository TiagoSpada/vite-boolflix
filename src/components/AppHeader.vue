<script>
import SearchComponent from "./SearchComponent.vue";
import { store } from "../store";
import axios from "axios";
export default {
	name: "AppHeader",
	components: {
		SearchComponent,
	},
	data() {
		return {
			store,
		};
	},
	methods: {
		// getMovie() {
		// 	if (!this.store.SearchKey) return;
		// 	const params = {
		// 		api_key: this.store.apiKey,
		// 		query: this.store.SearchKey.toLowerCase(),
		// 		language: this.store.language,
		// 	};
		// 	axios
		// 		.get(this.store.apiUrl + this.store.endpoints.moive, {
		// 			params,
		// 		})
		// 		.then((response) => {
		// 			this.store.resultsMovies = response.data.results;
		// 			console.log(response.data.results);
		// 			console.log(this.store.resultsMovies);
		// 		});
		// 	this.store.loading = false;
		// },
		getComponent() {
			const params = {
				api_key: this.store.apiKey,
				query: this.store.SearchKey,
				language: this.store.language,
			};

			const urls = [
				this.store.apiUrl + this.store.endpoints.moive,
				this.store.apiUrl + this.store.endpoints.tv,
			];
			const requests = urls.map((url) => axios.get(url, { params }));
			axios.all(requests).then((responses) => {
				// console.log(responses);
				this.store.resultsMovies = responses[0].data.results;
				this.store.resultsTv = responses[1].data.results;
				// console.log(responses[0].data.results);
				// console.log(responses[1].data.results);
			});
			this.store.loading = false;
		},
	},
};
</script>

<template>
	<header>
		<div class="container-lg">
			<div class="row row-col-2 justify-content-between">
				<div class="col">
					<h1>Booflix</h1>
				</div>
				<div class="col">
					<SearchComponent @search="getComponent" />
				</div>
			</div>
			<hr />
		</div>
	</header>
</template>

<style scoped lang="scss">
header {
	padding: 30px 0;
	h1 {
		color: #fff;
		font-size: 50px;
		font-weight: bolder;
	}
}
</style>
