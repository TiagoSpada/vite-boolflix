<script>
import { store } from "../store";
export default {
	name: "SearchComponent",
	data() {
		return {
			store,
		};
	},
	methods: {},
};
</script>

<template>
	<div class="content">
		<input
			class="form-control w-50 d-inline-block me-3"
			type="text"
			placeholder="Scrivi il titolo di un film"
			aria-label="default input example"
			v-model="store.SearchKey"
		/>
		<button
			type="button"
			class="btn btn-primary inline-block"
			@click="$emit('search')"
		>
			Cerca
		</button>
	</div>
</template>

<style scoped lang="scss">
header {
	padding: 30px 0;
	.content {
		height: 100%;
		display: flex;
		justify-content: end;
		input {
			margin: auto 0;
		}
		button {
			margin: auto 0;
		}
	}
}
</style>
