<script>
	import { onMount } from 'svelte';
	import HomeFx from '../extjs/homefx.js';
	import Footer from './Footer.svelte';

	onMount(() => {
		if (location.pathname === '/') {
			HomeFx();
		}
	});
</script>

<svelte:head>
	<title>HC15 Alliance</title>
	<meta name="description" content="We are HC15 - a collaborative alliance of entrepreneurs" />
	<meta
		name="keywords"
		content="HC15, HC15 Alliance, Entrepreneurs, Collaboration, Business Network, Innovation, Startups, Co-creation, European Entrepreneurs"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<main>
		<div class="home-fx frame overflow-hidden bg-[#e9e9e1]">
			<div class="flex items-center justify-center w-full min-h-screen relative">
				<div class="px-4 md:text-center">
					<h1 class="text-6xl md:text-7xl lg:text-9xl tracking-wide text-cyan-950 mb-4">
						HC15 Alliance
					</h1>
					<p class="md:text-3xl lg:text-4xl text-slate-600 italic font-medium">
						We are HC15 - a collaborative alliance of entrepreneurs
					</p>
					<p class="my-4 md:py-6 lg:my-9"><a href="/co-creation" class="button">Learn more</a></p>
				</div>
			</div>

			<div
				class="cursor"
				data-custom-colors="#315D93,#817c52,#dacfc3,#fca806, #f27984"
				data-ttl="0.8"
			>
				<div class="cursor__inner">
					<!-- cursor__inner-box elements come here #f8b369,#64a196,#db2715,#ec7a49 -->
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>

<style>
</style>
