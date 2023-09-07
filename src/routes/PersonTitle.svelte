<script>
	export let firstname = 'firstname';
	export let lastname = 'lastname';
	export let image_url = 'image url';
</script>

<div class="md:mt-6 lg:mt-16 px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto mb-6 lg:mb-10">
	<div class="w-24 h-24 mx-auto lg:w-1/3 lg:h-64 relative">
		<div class="w-full h-full absolute overflow-hidden rounded-md">
			<img src="{ image_url }" alt="{ firstname } { lastname }"  class="w-full grayscale group-hover:grayscale-0 absolute top-0 right-0 left-0 bottom-0" />
		</div>
	</div>

	<div class="lg:w-2/3">
		<h1 class="text-center lg:text-left text-6xl md:text-7xl lg:text-9xl tracking-wide text-cyan-950">{ firstname } <span class="italic text-[#fca806]">{ lastname }</span></h1>
	</div>
</div>