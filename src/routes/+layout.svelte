
<script>
	import "../app.css";
	import { onMount } from 'svelte';
	import Nav from "./Nav.svelte";
	onMount(() => {
		document.getElementById('isMain')?.classList.remove('loading');
	});
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<script src="https://kit.fontawesome.com/823d655421.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="isMain" class="loading">
	<Nav></Nav>

	<section class="content">
		<slot />
	</section>
</div>
