<script>
	import PersonDescription from '../../PersonDescription.svelte';
	import PersonMeta from '../../PersonMeta.svelte';
	import PersonSkills from '../../PersonSkills.svelte';
	import PersonStrength from '../../PersonStrength.svelte';
	import PersonTitle from '../../PersonTitle.svelte';
	import ViewTeam from '../../ViewTeam.svelte';
</script>

<svelte:head>
	<title>HC15 Alliance - Valentina Dainelli</title>
	<meta
		name="description"
		content="Valentina is a communication consultant and social media expert with a focus on creating unique written and visual content for diverse projects."
	/>
	<meta
		name="keywords"
		content="Valentina Dainelli, Communication Consultant, Social Media Expert, Italy"
	/>
</svelte:head>

<article class="pt-24 pb-9 lg:pb-16">
	<ViewTeam />

	<PersonTitle firstname="Valentina" lastname="Dainelli" image_url="/images/valentina.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<PersonMeta
			based_in="Tuscany, Italy"
			socials={[{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/valentinadainelli/' }]}
		/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Social Media Specialist.</p>
				<p>
					Communication consultant and Social Media Expert specialized in creating unique written
					and visual contents for unique projects.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>Social Media Strategy, Building community, Community engagement.</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={[
		'Speaks: Italian, French, German, Spanish, English',
		'Wordpress',
		'Microsoft & Google packages',
		'Social media apps',
		'Notion',
		'Canva',
		'Mailchimp'
	]}
/>
