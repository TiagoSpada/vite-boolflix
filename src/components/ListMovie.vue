<script>
import CardElement from "./CardElement.vue";

import { store } from "../store";
export default {
	name: "ListMovie",
	components: {
		CardElement,
	},
	data() {
		return {
			store,
			starNumber: 5,
		};
	},
	methods: {
		getImageLenguage(img) {
			if (!img) return;

			return new URL(`../assets/img/flag-${img}.png`, import.meta.url).href;
		},
		getPoster(img) {
			if (!img) return;
			return new URL(`${this.store.urlImg}w500/${img}`, import.meta.url).href;
		},
		getVoteStar(vote) {
			return Math.ceil(vote / 2);
		},
	},
};
</script>

<template>
	<div>
		<h2>Movies</h2>
		<ul class="row ps-0">
			<CardElement
				class="col-3"
				v-for="movie in store.resultsMovies"
				:poster="movie.poster_path"
				:posterPath="getPoster(movie.poster_path)"
				:nome="movie.title"
				:nomeOriginale="movie.original_title"
				:lingua="movie.original_language"
				:bandieraLingua="getImageLenguage(movie.original_language)"
				:starVote="getVoteStar(movie.vote_average)"
				:starNumber="starNumber"
			/>
			<!-- <li v-for="movie in store.resultsMovies" class="list-group-item">
				<ul>
					<li>
						<img
							v-if="movie.poster_path"
							:src="getPoster(movie.poster_path)"
							alt=""
						/>
						<div v-else>Immagine non trovata</div>
					</li>
					<li>Titolo: {{ movie.title }}</li>
					<li>Titolo Originale: {{ movie.original_title }}</li>
					<li v-if="movie.original_language === 'it'">
						Lingua:
						<img
							:src="getImageLenguage(movie.original_language)"
							alt="ita"
							class="img-flag"
						/>
					</li>
					<li v-else-if="movie.original_language === 'en'">
						Lingua:
						<img
							:src="getImageLenguage(movie.original_language)"
							alt="ita"
							class="img-flag"
						/>
					</li>
					<li v-else>
						Lingua:
						{{ movie.original_language }}
					</li>

					<li>
						Voto: Voto:
						<font-awesome-icon
							icon="fa-solid fa-star"
							v-for="n in getVoteStar(movie.vote_average)"
						/>
						<font-awesome-icon
							icon="fa-regular fa-star"
							v-for="n in starNumber - getVoteStar(movie.vote_average)"
						/>
					</li>
				</ul>
			</li> -->
		</ul>
	</div>
</template>

<style scoped lang="scss">
.img-flag {
	width: 20px;
}

h2 {
	text-align: center;
	color: #fff;
	margin: 30px 0;
}
</style>
