<script>
export default {
	name: "CardElement",
	props: [
		"poster",
		"posterPath",
		"nome",
		"nomeOriginale",
		"lingua",
		"bandieraLingua",
		"starVote",
		"starNumber",
	],
	data() {
		return {
			MouseHover: false,
		};
	},
};
</script>
<template>
	<li
		class="cardElement"
		@mouseenter="MouseHover = true"
		@mouseleave="MouseHover = false"
	>
		<div
			:style="{ backgroundImage: 'url(' + posterPath + ')' }"
			class="h-100 w-100 poster"
			:class="{ bordo: !posterPath }"
		>
			<div v-show="!posterPath">
				<div class="img-error">
					<div v-show="!MouseHover">Immagine non disponibile</div>
				</div>
			</div>
			<ul v-show="MouseHover" class="info-card ps-0">
				<li><span>Titolo: </span> {{ nome }}</li>
				<li><span>Titolo Originale: </span> {{ nomeOriginale }}</li>
				<li v-if="lingua === 'it'">
					<span>Lingua: </span>
					<img :src="bandieraLingua" alt="ita" class="img-flag" />
				</li>
				<li v-else-if="lingua === 'en'">
					<span>Lingua: </span>
					<img :src="bandieraLingua" alt="en" class="img-flag" />
				</li>
				<li v-else>
					<span>Lingua: </span>
					{{ lingua }}
				</li>

				<li>
					<span>Voto: </span>
					<font-awesome-icon icon="fa-solid fa-star" v-for="n in starVote" />
					<font-awesome-icon
						icon="fa-regular fa-star"
						v-for="n in starNumber - starVote"
					/>
				</li>
			</ul>
		</div>
		<!-- <ul class="ps-0">
			<li>
				<img v-if="poster" :src="posterPath" alt="" class="poster" />
				<div v-else><div class="img-error">Immagine non disponibile</div></div>
			</li>
			<li><span>Titolo: </span> {{ nome }}</li>
			<li><span>Titolo Originale: </span> {{ nomeOriginale }}</li>
			<li v-if="lingua === 'it'">
				<span>Lingua: </span>
				<img :src="bandieraLingua" alt="ita" class="img-flag" />
			</li>
			<li v-else-if="lingua === 'en'">
				<span>Lingua: </span>
				<img :src="bandieraLingua" alt="en" class="img-flag" />
			</li>
			<li v-else>
				<span>Lingua: </span>
				{{ lingua }}
			</li>

			<li>
				<span>Voto: </span>
				<font-awesome-icon icon="fa-solid fa-star" v-for="n in starVote" />
				<font-awesome-icon
					icon="fa-regular fa-star"
					v-for="n in starNumber - starVote"
				/>
			</li>
		</ul> -->
	</li>
</template>
<style scoped lang="scss">
.cardElement {
	text-align: center;
	color: #fff;
	margin-bottom: 40px;
	height: 463px;
	.bordo {
		border: 1px solid #fff;
	}

	.poster {
	}
	.img-error {
		height: 100%;
		div {
			padding-top: 65%;
			color: white;
		}
	}
	.info-card {
		height: 100%;
		background: rgba(0, 0, 0, 0.6040616930365896);
		padding-top: 65%;
	}
	.img-flag {
		width: 20px;
	}
}
</style>
