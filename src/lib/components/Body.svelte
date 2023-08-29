<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="main">
	<div class="item">
		<Button />
	</div>
	<div class="item" />
	<div class="item" />
	<div class="item" />
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: goldenrod;
		height: 200px;
		border: 1px solid black;
		border-radius: 5px;
	}
</style>
