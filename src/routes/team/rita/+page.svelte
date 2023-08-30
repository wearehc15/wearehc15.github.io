<script>
	import PersonDescription from "../../PersonDescription.svelte";
	import PersonMeta from "../../PersonMeta.svelte";
	import PersonProjects from "../../PersonProjects.svelte";
	import PersonSkills from "../../PersonSkills.svelte";
	import PersonStrength from "../../PersonStrength.svelte";
	import PersonTitle from "../../PersonTitle.svelte";
</script>
<article class="pt-24 pb-9 lg:pb-16">
	<div class="px-4 max-w-4xl mx-auto worksans text-sm">
		<a href="/alliance#theteam"><i class="fa-light fa-arrow-left mr-2"></i>View the team</a>
	</div>

	<PersonTitle
		firstname="Rita"
		lastname="Januário"
		image_url="/images/rita.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Portugal"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ritajanuario-98575b8a/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6">
					Experienced and resilient business consultant and project manager with over 7 years' success in leading cross-functional teams, delivering innovative products and building creative marketing and communications initiatives.
				</p>

				<p>
					Empathetic leader with a strong track record of building positive team dynamics and fostering a collaborative working environment. Skilled at balancing project requirements within budget and exceeding expectations. Always looking for a challenge to drive growth and success through an innovative culture and strategy. Excellent communicator, empathetic, creative thinker, high risk taker, tenacious in solving problems.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Go-to-Market and export strategies, Business development and International sales.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: Portugese, Spanish, English',
			'Business development',
			'International sales',
			'Building creative marketing & communications',
		]
	}
	/>
