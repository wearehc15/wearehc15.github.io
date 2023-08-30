<script>
	export let firstname = 'firstname';
	export let lastname = 'lastname';
	export let based_in = 'based in';
	export let image_url = 'image url';
	export let linkedin_url = 'LinkedIn url';
	export let personal_url = 'Personal url';
	export let golden_paragraph = 'Description';
	export let help_you_with = 'Description';
</script>

<article class="pt-24 pb-9 lg:pb-16">
	<div class="px-4 max-w-4xl mx-auto worksans text-sm">
		<a href="/alliance#theteam"><i class="fa-light fa-arrow-left mr-2"></i>View the team</a>
	</div>
	<div class="md:mt-6 lg:mt-16 px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto mb-6 lg:mb-10">
		<div class="w-24 h-24 mx-auto lg:w-1/3 lg:h-64 relative">
			<div class="w-full h-full absolute overflow-hidden rounded-md">
				<img src="{ image_url }" alt="{ firstname } { lastname }"  class="w-full h-full grayscale group-hover:grayscale-0 absolute top-0 right-0 left-0 bottom-0 object-cover" />
			</div>
		</div>

		<div class="lg:w-2/3">
			<h1 class="text-center lg:text-left text-6xl md:text-7xl lg:text-9xl tracking-wide text-cyan-950">{ firstname } <span class="italic text-[#fca806]">{ lastname }</span></h1>
		</div>
	</div>

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<div class="w-full text-center lg:text-left lg:w-1/3 lg:h-64 relative">
			<div class="text-base worksans my-4 md:my-6 lg:my-9">
				<span class="mb-2 lg:mb-4 block text-slate-400"><i class="fa-light fa-location-dot"></i> { based_in }</span>

				<a class="py-1.5 mr-2 mb-1 inline-block md:block" href="{ linkedin_url }" target="_blank">
					<i class="fa-brands fa-linkedin-in"></i> LinkedIn
				</a>

				<a class="py-1.5 mr-2 mb-1 inline-block md:block" href="{ personal_url }" target="_blank">
					<i class="fa-light fa-browser"></i> Personal website
				</a>
			</div>
		</div>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<div class="my-4 md:my-6 lg:my-9 leading-relaxed">
				{ golden_paragraph }
			</div>
			<div class="mt-4 md:mt-6 lg:mt-9 pt-4 md:pt-6 lg:pt-9 border-t border-slate-200">
				<p class="text-base lg:text-lg text-slate-500 worksans uppercase tracking-wider">
					I can help you with
				</p>
				<p class="my-4 leading-normal italic text-slate-500 text-base">
					{ help_you_with }
				</p>
			</div>
			<div class="mt-4 md:mt-6 lg:mt-9 pt-4 md:pt-6 lg:pt-9 border-t border-slate-200">
				<p class="text-base lg:text-lg text-slate-500 worksans uppercase tracking-wider">
					Projects
				</p>
				<div class="text-base worksans my-4">
					<a class="py-1.5 mr-2 mb-1 inline-block" href="https://www.funda.nl/" target="_blank">
						<i class="fa-light fa-link"></i> Funda
					</a>

					<a class="py-1.5 mr-2 mb-1 inline-block" href="https://www.kpn.com/" target="_blank">
						<i class="fa-light fa-link"></i> KPN
					</a>

					<a class="py-1.5 mr-2 mb-1 inline-block" href="https://www.uwv.nl/" target="_blank">
						<i class="fa-light fa-link"></i> UWV
					</a>

					<a class="py-1.5 mr-2 mb-1 inline-block" href="https://womenworks.io/" target="_blank">
						<i class="fa-light fa-link"></i> WomenWorks
					</a>

					<a class="py-1.5 mr-2 mb-1 inline-block" href="https://www.hackyourfuture.net/" target="_blank">
						<i class="fa-light fa-link"></i> HackYourFuture
					</a>
				</div>
			</div>
		</div>
	</div>
</article>