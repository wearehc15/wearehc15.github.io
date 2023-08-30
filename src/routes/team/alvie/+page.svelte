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
		firstname="Alvie"
		lastname="Balayo"
		image_url="/images/alvie.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Kortrijk, Belgium"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/alvie-balayo/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6">"In order to do anything, you must first see"- Alvie</p>
				<p>
					I help clients discern values, resources, and challenges helping them navigate their business journey.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Value proposition development, People management, Organisational development.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: English',
			'Value proposition development',
			'People management',
			'Organisational development',
			'Self-awareness and personal development',
			'Facilitator',
			'Vision navigation'
		]
	}
	/>
