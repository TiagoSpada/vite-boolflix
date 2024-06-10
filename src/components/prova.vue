<script>
import { store } from "../store";
import axios from "axios";
export default {
	name: "prova",
	data() {
		return {
			store,
		};
	},
	methods: {
		// getComponent() {
		// 	const params = {
		// 		api_key: this.store.apiKey,
		// 		query: "ritorno",
		// 		language: this.store.language,
		// 	};
		// 	const urls = [
		// 		this.store.apiUrl + this.store.endpoints.moive,
		// 		this.store.apiUrl + this.store.endpoints.tv,
		// 	];
		// 	const requests = urls.map((url) => axios.get(url, { params }));
		// 	axios.all(requests).then((responses) => {
		// 		// console.log(responses);
		// 		this.store.resultsMoviesProva = responses[0].data.results;
		// 		this.store.resultsTv = responses[1].data.results;
		// 		// console.log(responses[0].data.results);
		// 		// console.log(responses[1].data.results);
		// 	});
		// },
	},
	created() {
		this.getComponent();
	},
};
</script>
<template></template>
