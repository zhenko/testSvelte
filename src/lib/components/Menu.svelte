<script>
	let items = [1, 2, 3, 4];
</script>

<ul>
	{#each items as item}
		<li>
			<a href="/">Item {item}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		display: flex;
		gap: 20px;
		margin: 0;
	}
	a {
		color: white;
		text-decoration: underline;
	}
	@media (max-width: 768px) {
		ul {
			flex-direction: column;
			align-items: end;
		}
	}
</style>
