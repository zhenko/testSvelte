<script>
	import { goto } from '$app/navigation';

	let isDownloading = false;

	function getData() {
		isDownloading = true;
		setTimeout(() => {
			goto('/result');
		}, 1000);
	}
</script>

<button on:click={getData} disabled={isDownloading}>
	{#if isDownloading}
		<img width="20" height="20" src="loading.gif" alt="loading icon" />
		Loading...
	{:else}
		Download
	{/if}
</button>

<style>
	button {
		width: 220px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blue;
		padding: 10px;
		color: white;
		border-radius: 5px;
		border: none;
		box-shadow: 0 5px 5px 0px grey;
		cursor: pointer;
	}
	button:hover {
		background-color: rgb(54, 54, 192);
	}

	button img {
		margin-right: 10px;
	}

	@media (max-width: 768px) {
		button {
			width: 140px;
		}
	}
</style>
