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
		firstname="Valentina"
		lastname="Dainelli"
		image_url="/images/valentina.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Tuscany, Italy"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/valentinadainelli/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>
					Communication consultant and Social Media Expert specialized in creating unique written and visual contents for unique projects.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Social Media Strategy, Building community, Community engagement.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: Italian, French, German, Spanish, English',
			'Wordpress',
			'Microsoft & Google packages',
			'Social media apps',
			'Notion',
			'Canva',
			'Mailchimp',
		]
	}
	/>
