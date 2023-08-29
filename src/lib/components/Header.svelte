<script>
	import Logo from '$lib/components/Logo.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<header>
	<Logo />
	<Menu />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 20px 50px;
		margin-bottom: 20px;
		background-color: blue;
		border-radius: 5px;
		box-shadow: 0 5px 5px 0px grey;
	}
</style>
