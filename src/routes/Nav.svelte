<script>
	import { page } from '$app/stores';
	let path;

	$: path = $page.url.pathname;

	const hideMenu = (target) => {
		target?.classList.add('menunav--hidden');
		target?.classList.remove('menunav--expanded');
	}

	const handleClick = (id = 'menunav') => {
		const target = document.getElementById(id);
		if (target?.classList.value.includes('menunav--hidden')) {
			target.classList.remove('menunav--hidden');
			target?.classList.add('menunav--expanded');
		} else {
			hideMenu(target);
		}
	}
	const closeMenu = (id = 'menunav') => {
		const target = document.getElementById(id);
		hideMenu(target);
	}
</script>

<header class="px-4 py-2 md:px-6 fixed bg-[#e9e9e1] w-full z-50 shadow-sm">
	<nav class="flex lg:justify-center">
		<div class="self-center lg:ml-6 flex justify-between w-full lg:inline-block lg:w-auto menunav--hidden" id="menunav">
			<a href="/" class="hover:text-[#817c52] w-11 h-11 inline-block leading-[44px] text-center rounded-full bg-[#d6d6c2] lg:bg-[#e9e9e1]">
				<i class="fa-sharp fa-regular fa-house-heart text-lg"></i>
			</a>
			<div class="bg-[#e9e9e1] lg:inline-block menunav__target">
				<a on:click="{ () => closeMenu() }" class={path === '/why' ? 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0 relative after:block after:absolute after:w-full after:h-1.5 after:bg-white after:left-0 after:-bottom-3.5 text-[#817c52]' : 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0'} href="/why">Our Why</a>
				<a on:click="{ () => closeMenu() }" class={path === '/alliance' ? 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0 relative after:block after:absolute after:w-full after:h-1.5 after:bg-white after:left-0 after:-bottom-3.5 text-[#817c52]' : 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0'} href="/alliance">Our Alliance</a>
				<a on:click="{ () => closeMenu() }" class={path === '/co-creation' ? 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0 relative after:block after:absolute after:w-full after:h-1.5 after:bg-white after:left-0 after:-bottom-3.5 text-[#817c52]' : 'border-t border-[#d6d6c2] px-4 py-2 hover:text-[#817c52] uppercase tracking-wide lg:border-0'} href="/co-creation">Co-creation</a>
			</div>
			<button class="lg:hidden w-11 h-11 inline-block leading-[46px] text-center rounded-full bg-[#d6d6c2] float-right" on:click="{ () => handleClick() }">
				<i class="fa-light fa-bars text-lg block mx-auto"></i>
				<i class="fa-light fa-xmark text-lg block mx-auto"></i>
			</button>
		</div>
	</nav>
</header>