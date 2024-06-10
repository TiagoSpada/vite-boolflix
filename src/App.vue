<script>
import MainContent from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
// import prova from "./components/prova.vue";
export default {
	name: "Boolflix",
	components: {
		AppHeader,
		MainContent,
	},
	data() {
		return {};
	},
};
</script>

<template>
	<AppHeader />
	<MainContent />
	<!-- <prova /> -->
</template>

<style></style>
