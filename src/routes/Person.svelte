<script>
	export let name = 'name';
	export let intro = 'short description';
	export let image_url = 'image url';
	export let person_url = 'detail url';
</script>

<a class="group block relative w-[calc(100%/2-8px)] lg:w-[calc(100%/3-16px)] rounded-lg overflow-hidden h-96 bg-[#a59f78] transition-all" href="{ person_url }">
	<div class="w-full after:block after:absolute after:w-full after:top-0 after:left-0 after:h-full after:bg-gradient-to-t after:from-[#a59f78]">
		<img src="{ image_url }" alt="{ name }"  class="w-full h-full grayscale group-hover:grayscale-0 absolute top-0 right-0 left-0 bottom-0 object-cover" />
	</div>
	<div class="absolute bottom-0 w-full p-4 tracking-wide h-auto text-white">
		<span class="text-2xl font-bold italic">{ name }</span>
		<span class="block text-base italic">{ intro }</span>
	</div>
</a>