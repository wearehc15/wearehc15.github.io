<script>
  import { onMount } from 'svelte';
  import HomeFx from '../extjs/homefx.js';

  onMount(() => {
    HomeFx();
  });
</script>

<div class="flex flex-col min-h-screen">
	<main>
    <div class="home-fx frame overflow-hidden bg-[#e9e9e1]">
      <div class="flex items-center justify-center w-full min-h-screen relative">
        <div class="px-4 md:text-center">
          <h1 class="text-6xl md:text-7xl lg:text-9xl tracking-wide text-cyan-950 mb-4">HC15 Alliance</h1>
          <p class="md:text-3xl lg:text-4xl text-slate-600 italic font-medium">We are HC15 - a collaborative alliance of entrepreneurs</p>
          <p class="my-4 md:py-6 lg:my-9"><a href="/co-creation" class="p-4 md:px-6 bg-gradient-to-r from-cyan-950 to-cyan-800 rounded-full text-white hover:bg-gradient-to-r hover:from-orange-950 hover:to-emerald-800 worksans uppercase tracking-wide">Learn more</a></p>
        </div>
      </div>

      <div class="cursor" data-custom-colors="#315D93,#817c52,#dacfc3,#fca806, #f27984" data-ttl="0.8">
        <div class="cursor__inner">
          <!-- cursor__inner-box elements come here #f8b369,#64a196,#db2715,#ec7a49 -->
        </div>
      </div>
    </div>
	</main>
  <footer class="fixed w-full text-center z-50 bottom-0 flex flex-col justify-center p-4">
    <p class="text-sm text-slate-500">© 2023 HC15Alliance</p>
  </footer>
</div>

<style>
</style>