<script>
	export let skills = [
		'Speaks: Indonesian, English',
		'Frontend tech stack',
		'Git',
		'Tailwind',
		'Javascript frameworks & libraries',
		'Segment (Data driven)',
		'UX Design',
	];
</script>

<article class="py-14 md:py-16 lg:py-24 bg-[#817c52] overflow-x-hidden">
	<div class="max-w-4xl mx-auto px-4">
		<h1 class="text-center text-4xl md:text-6xl lg:text-7xl tracking-wide text-white mb-4 lg:mb-11">
			Skills & Expertise
		</h1>

		<ul class="flex gap-4 flex-wrap mt-6 md:mt-12 lg:mt-16 worksans justify-center">
			{#each skills as skill}
				<li class="py-2 px-4 bg-[#a59f78] rounded-md">
					{ skill }
				</li>
			{/each}
		</ul>
		<div class="worksans text-sm text-center mt-6 md:mt-12 lg:mt-16">
			<a href="/alliance#theteam" class="block !text-white worksans"><i class="fa-light fa-arrow-left mr-2"></i>View the team</a>
		</div>
	</div>
</article>