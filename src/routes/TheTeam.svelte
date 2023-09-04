<script>
	import Person from './Person.svelte';
</script>

<article class="py-14 md:py-16 lg:py-24 bg-[#817c52] overflow-x-hidden" id="theteam">
	<div class="max-w-5xl mx-auto px-4">
		<h1 class="md:text-center text-4xl md:text-6xl lg:text-7xl tracking-wide text-white mb-4 lg:mb-11">The Team</h1>
		<p class="md:text-center lg:text-xl text-slate-200 italic tracking-wide">
			Meet our 13 diverse and accomplished women entrepreneurs
		</p>

		<div class="flex gap-4 lg:gap-6 flex-wrap my-6 md:my-12 lg:my-16">
			<Person name="Alvie Balayo" intro="Vision Navigator & Consultant" image_url="/images/alvie.jpg" person_url="/team/alvie" />

			<Person name="Ivana Setiawan" intro="Founder & Software Engineer" image_url="/images/ivana.jpg" person_url="/team/ivana" />

			<Person name="Jana Sieling" intro="Financial Consultant" image_url="/images/jana-1.jpg" person_url="/team/jana" />

			<Person name="Justyna Kawa" intro="Business and Strategy Consultant" image_url="/images/justyna.jpg" person_url="/team/justyna" />

			<Person name="Katarzyna Bazylczyk" intro="Lead Product Designer" image_url="/images/kasia.jpg" person_url="/team/katarzyna" />

			<Person name="Madelin Winkler" intro="Founder of Domega Consulting (Digital Marketing)" image_url="/images/madelin.jpg" person_url="/team/madelin" />

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