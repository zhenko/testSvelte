<script>
	import './styles.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		padding: 20px;
	}
</style>
