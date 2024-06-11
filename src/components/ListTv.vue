<script>
import CardElement from "./CardElement.vue";
import { store } from "../store";
export default {
	name: "ListTv",
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
		getImageLenguage: function (img) {
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
		<hr />
		<h2>Serie Tv</h2>
		<ul class="row ps-0">
			<CardElement
				class="col-3"
				v-for="Tv in store.resultsTv"
				:poster="Tv.poster_path"
				:posterPath="getPoster(Tv.poster_path)"
				:nome="Tv.name"
				:nomeOriginale="Tv.original_name"
				:lingua="Tv.original_language"
				:bandieraLingua="getImageLenguage(Tv.original_language)"
				:starVote="getVoteStar(Tv.vote_average)"
				:starNumber="starNumber"
			/>
			<!-- <li v-for="Tv in store.resultsTv" class="list-group-item">
				<ul>
					<li>
						<img
							v-if="Tv.poster_path"
							:src="getPoster(Tv.poster_path)"
							alt=""
						/>
						<div v-else>Immagine non trovata</div>
					</li>
					<li>Titolo: {{ Tv.name }}</li>
					<li>Titolo Originale: {{ Tv.original_name }}</li>
					<li v-if="Tv.original_language === 'it'">
						Lingua:
						<img
							:src="getImageLenguage(Tv.original_language)"
							alt="ita"
							class="img-flag"
						/>
					</li>
					<li v-else-if="Tv.original_language === 'en'">
						Lingua:
						<img
							:src="getImageLenguage(Tv.original_language)"
							alt="en"
							class="img-flag"
						/>
					</li>
					<li v-else>
						Lingua:
						{{ Tv.original_language }}
					</li>

					<li>
						Voto:
						<font-awesome-icon
							icon="fa-solid fa-star"
							v-for="n in getVoteStar(Tv.vote_average)"
						/>
						<font-awesome-icon
							icon="fa-regular fa-star"
							v-for="n in starNumber - getVoteStar(Tv.vote_average)"
						/>
					</li>
				</ul>
			</li> -->
		</ul>
	</div>
</template>

<style scoped lang="scss">
h2 {
	text-align: center;
	color: #fff;
	margin: 30px 0;
}
</style>
