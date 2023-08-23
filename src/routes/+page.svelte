<script>
	import '../app.css';
</script>

<div class="app">
	<h1 class="text-3xl font-bold text-center m-4 md:m-6">Welcome HC15Alliance 🌼</h1>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
