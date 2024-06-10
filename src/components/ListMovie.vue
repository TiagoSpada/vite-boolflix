<script>
import { store } from "../store";
export default {
	name: "ListMovie",
	data() {
		return {
			store,
			starNumber: 5,
		};
	},
	methods: {
		getImageLenguage(img) {
			return new URL(`../assets/img/flag-${img}.png`, import.meta.url).href;
		},
		getPoster(img) {
			return new URL(`${this.store.urlImg}w185/${img}`, import.meta.url).href;
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
		<ul class="list-group">
			<li v-for="movie in store.resultsMovies" class="list-group-item">
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
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.img-flag {
	width: 20px;
}
</style>
