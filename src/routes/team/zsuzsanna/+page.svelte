<script>
	import PersonDescription from '../../PersonDescription.svelte';
	import PersonMeta from '../../PersonMeta.svelte';
	import PersonSkills from '../../PersonSkills.svelte';
	import PersonStrength from '../../PersonStrength.svelte';
	import PersonTitle from '../../PersonTitle.svelte';
	import ViewTeam from '../../ViewTeam.svelte';
</script>

<svelte:head>
	<title>HC15 Alliance - Zsuzsanna Zsidai</title>
	<meta
		name="description"
		content="Zsuzsanna is the founder of Womazing.eu, passionate about connecting people and empowering women across cultures."
	/>
	<meta name="keywords" content="Zsuzsanna Zsidai, Founder, Womazing.eu, Budapest, Hungary" />
</svelte:head>

<article class="pt-24 pb-9 lg:pb-16">
	<ViewTeam />

	<PersonTitle firstname="Zsuzsanna" lastname="Zsidai" image_url="/images/zsuzsanna.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<PersonMeta
			based_in="Budapest, Hungary"
			email="info@womazing.eu"
			socials={[
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/zsidai-zsuzsanna-56350ba3/' },
				{ title: 'Womazing', url: 'https://womazing.eu/' }
			]}
		/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Founder of Womazing.eu.</p>
				<p class="mb-4 lg:mb-6">
					Zsuzsanna's academic journey has been fueled by a love for research that goes beyond the
					surface. She strongly believes that understanding the „why” and intercultural
					communication leave a positive imprint on our world. Having spent years in foreign
					countries, Zsuzsanna is passionate to connect people and empower women across cultures.
				</p>
				<p class="mb-4 lg:mb-6">
					With a background of international project management, she has mastered the art of
					creating lasting connections in diverse cultures. For her, networking is much more than
					business; it is a medium for sharing values, fostering collaboration, and shaping a
					brigther furture together. For this reason, Zsuzsanna launched <a
						href="https://womazing.eu/"
						target="_blank">womazing.eu</a
					> where she is cultivating a network that amplifies women's stories, expertise and dreams to
					drive impactful change around us.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Intercultural communication, Research, Lecturing, Customer Service Management, Networking,
					Permaculture design (sustainability).
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={[
		'Intercultural communication',
		'Research',
		'Lecturing',
		'Customer Service Management',
		'Networking',
		'Permaculture design (sustainability)',
		'Native Hungarian',
		'Fluent English',
		'Fluent Arabic',
		'Fluent German'
	]}
/>
