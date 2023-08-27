
<script>
	import "../app.css";
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('isMain')?.classList.remove('loading');
	});
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<script src="https://kit.fontawesome.com/823d655421.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="isMain" class="loading">
	<header class="p-4 md:p-6 fixed bg-[#e9e9e1] w-full z-50">
		<nav class="flex justify-center">
			<!-- <a href="/" class="is-abril tracking-widest text-cyan-950 text-xl">HC15</a> -->
			<div class="self-center lg:ml-6">
				<a href="/" class="hover:text-emerald-600"><i class="fa-sharp fa-regular fa-house-heart"></i></a>
				<a href="/why" class="hover:text-emerald-600 ml-4 uppercase tracking-wide">Our Why</a>
				<a href="/alliance" class="hover:text-emerald-600 ml-4 uppercase tracking-wide">Our Alliance</a>
				<a href="/portfolio" class="hover:text-emerald-600 ml-4 uppercase tracking-wide">Our Portfolio</a>
			</div>
		</nav>
	</header>

	<slot />
</div>
