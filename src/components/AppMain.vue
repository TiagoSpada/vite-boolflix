<script>
import ListMovie from "./ListMovie.vue";
import ListTv from "./ListTv.vue";
import { store } from "../store";
export default {
	name: "MainContent",
	data() {
		return {
			store,
		};
	},
	components: {
		ListMovie,
		ListTv,
	},
};
</script>

<template>
	<main>
		<div class="container-lg">
			<ListMovie v-show="!store.loading" />
			<ListTv v-show="!store.loading" />
		</div>
	</main>
</template>

<style scoped lang="scss"></style>
