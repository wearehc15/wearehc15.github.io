<script>
	export let based_in = 'City, Country';
	export let socials = [
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ivanasetiawan/' },
		{ title: 'Venopi', url: 'https://www.venopi.com/' },
		{ title: 'Personal website', url: 'https://ivanasetiawan.com/' },
	];
</script>

<div class="w-full text-center lg:text-left lg:w-1/3 lg:h-64 relative">
	<div class="text-base worksans my-4 md:my-6 lg:my-9">
		<span class="mb-2 lg:mb-3 block text-slate-400">
			<i class="fa-light fa-location-dot fa-lg mr-2"></i> { based_in }
		</span>

		<ul>
			{#each socials as social, index (social.title)}
				<li>
					<a class="py-1.5 mr-2 mb-1 inline-block md:block" href="{ social.url }" target="_blank">
						<i class="fa-light fa-link mr-2"></i> { social.title }
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>