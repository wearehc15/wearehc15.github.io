<script>
	import Person from '../Person.svelte';
</script>

<article class="py-14 md:py-16 lg:py-24">
	<div class="max-w-4xl mx-auto px-4">
		<h1 class="md:text-center text-6xl md:text-7xl lg:text-9xl tracking-wide text-cyan-950 mt-9 mb-4 lg:mt-16 lg:mb-11">Our Alliance</h1>
		<p class="md:text-center lg:text-xl text-slate-500 worksans uppercase tracking-wider">
			About HC15 Alliance
		</p>

		<div class="md:text-center text-xl md:text-2xl lg:text-3xl">
			<p class="my-4 md:my-6 lg:my-9 leading-normal">The HC15 is a <strong class="italic">European-based alliance of 13 diverse and accomplished women entrepreneurs</strong> who came together with the shared goals of collaboration, empowerment and support.</p>
			<p class="my-4 md:my-6 lg:my-9 leading-normal">This alliance aims to provide a comprehensive and seamless support system for women entrepreneurs on their entrepreneurial journey. By pooling our individual expertise, resources, and specialised offerings, the alliance becomes a one-stop hub, delivering a holistic range of solutions tailored to address every aspect of an entrepreneur's needs, thus fostering alignment and accelerated growth.</p>
		</div>
	</div>
</article>

<article class="py-14 md:py-16 lg:py-24 bg-[#817c52] overflow-x-hidden" id="theteam">
	<div class="max-w-5xl mx-auto px-4">
		<h1 class="md:text-center text-4xl md:text-6xl lg:text-7xl tracking-wide text-white mb-4 lg:mb-11">The Team</h1>
		<p class="md:text-center lg:text-xl text-slate-200 italic tracking-wide">
			Meet our 13 diverse and accomplished women entrepreneurs
		</p>

		<div class="flex gap-4 lg:gap-6 flex-wrap my-6 md:my-12 lg:my-16">
			<Person name="Alvie Balayo" intro="Vision Navigator & Consultant" image_url="/images/alvie.jpg" person_url="/team/alvie" />

			<Person name="Ivana Setiawan" intro="Founder & Software Engineer" image_url="/images/ivana.jpg" person_url="/team/ivana" />

			<Person name="Jana Sieling" intro="Financial Consultant" image_url="/images/jana.jpg" person_url="/team/jana" />

			<Person name="Justyna Kawa" intro="Fashion Strategist & Brand Creator" image_url="/images/justyna.jpg" person_url="/team/justyna" />

			<Person name="Katarzyna Bazylczyk" intro="Lead Product Designer" image_url="/images/kasia.jpg" person_url="/team/katarzyna" />

			<Person name="Madelin Winkler" intro="Digital Nomad - SEO & PR" image_url="/images/madelin.jpg" person_url="/team/madelin" />

			<Person name="Rita Januário" intro="Innovation Manager" image_url="/images/rita.jpg" person_url="/team/rita" />

			<Person name="Savvoula Oikonomou" intro="Institutional Fundraising & Consulting" image_url="/images/savvoula.jpg" person_url="/team/savvoula" />

			<Person name="Shan Luolin" intro="Managing Director at East by North Oy" image_url="/images/shan.jpg" person_url="/team/shan" />

			<Person name="Shweta Srivastav" intro="Design Research for regeneration" image_url="/images/shweta.jpg" person_url="/team/shweta" />

			<Person name="Valentina Dainelli" intro="Social Media Specialist" image_url="/images/valentina.jpg" person_url="/team/valentina" />

			<Person name="Raquel XYZ" intro="Sustainability & Corporate Social Responsibility" image_url="/images/xyz.jpg" person_url="/team/raquel" />

			<Person name="Zsuzsanna Zsidai" intro="Founder of Womazing.eu" image_url="/images/zsuzsanna.jpg" person_url="/team/zsuzsanna" />
		</div><!-- columns -->
	</div>
</article>