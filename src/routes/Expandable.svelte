<script>
	export let title = 'How did we become HC15?';
	let isExpanded = false;
	const handleClick = () => {
		if (isExpanded === false) {
			isExpanded = true;
		} else {
			isExpanded = false;
		}
	}
</script>

<div class="mb-4 lg:mb-6">
	<button class="block p-4 md:px-6 bg-gray-100 font-semibold w-full text-left rounded-md relative" on:click="{ () => handleClick() }">
		{ title }

		<span class="absolute right-4 lg:right-6 top-3">
			<span class={ isExpanded ? "before:content-['-'] before:text-2xl" : "before:content-['+'] before:text-2xl"}></span>
		</span>
	</button>
	<div class={isExpanded ? 'h-auto transition-height p-4 md:p-6 bg-gray-100 border-t border-gray-300 leading-relaxed' : 'h-0 overflow-hidden transition-height'}>
		<slot />
	</div>
</div>
