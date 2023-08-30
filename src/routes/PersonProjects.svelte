<script>
	export let projects = [
		{ title: 'Funda', url: 'https://www.funda.nl/' },
		{ title: 'KPN', url: 'https://www.kpn.com/' },
		{ title: 'UWV', url: 'https://www.uwv.nl/' },
		{ title: 'WomenWorks', url: 'https://womenworks.io/' },
		{ title: 'HackYourFuture', url: 'https://hackyourfuture.net/' },
	];
</script>

<div class="mt-4 md:mt-6 lg:mt-9 pt-4 md:pt-6 lg:pt-9 border-t border-slate-200">
	<p class="text-base lg:text-lg text-slate-500 worksans uppercase tracking-wider">
		Projects
	</p>

	<ul class="text-base worksans my-4 flex">
		{#each projects as project, index (project.title)}
			<li>
				<a class="py-1.5 mr-2 mb-1 inline-block md:block" href="{ project.url }" target="_blank">
					<i class="fa-light fa-link mr-2"></i> { project.title }
				</a>
			</li>
		{/each}
	</ul>
</div>