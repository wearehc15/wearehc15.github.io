<script>
	import PersonDescription from '../../PersonDescription.svelte';
	import PersonMeta from '../../PersonMeta.svelte';
	import PersonSkills from '../../PersonSkills.svelte';
	import PersonStrength from '../../PersonStrength.svelte';
	import PersonTitle from '../../PersonTitle.svelte';
	import ViewTeam from '../../ViewTeam.svelte';
</script>

<svelte:head>
	<title>HC15 Alliance - Raquel Sobral</title>
	<meta
		name="description"
		content="Raquel is a sustainability and corporate social responsibility expert with 15 years of experience in humanitarian aid. She is the founder of Yasmine, a brand focused on sustainable and socially responsible practices."
	/>
	<meta name="keywords" content="Raquel Sobral, Sustainability Expert, Portugal" />
</svelte:head>

<article class="pt-24 pb-9 lg:pb-16">
	<ViewTeam />

	<PersonTitle firstname="Raquel" lastname="Sobral" image_url="/images/raquel.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<PersonMeta
			based_in="Odeceixe, Portugal"
			email="info@yasminehandmade.com"
			socials={[
				{ title: 'Instagram', url: 'https://www.instagram.com/yasminehandprint/' },
				{ title: 'Yasmine Handmade', url: 'https://yasminehandmade.com/' }
			]}
		/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">
					Sustainability & Corporate Social Responsibility.
				</p>
				<p class="mb-4 lg:mb-6">
					Throughout her career, Raquel has accumulated 15 years of experience in humanitarian aid,
					with both local and international work, focusing on volunteer projects and NGO development
					field work.
				</p>
				<p class="mb-4 lg:mb-6">
					As someone with a long-standing commitment to community building and promoting social and
					environmental impact, in 2021, Raquel decided to take her passion to the next level and
					establish Yasmine - a brand that reflects these values. Her artisanal textile brand is
					founded on the principles of sustainability and corporate social responsibility.
				</p>
				<p class="mb-4 lg:mb-6">
					With a focus on artisanal work and deadstock materials, Raquel is committed to creating
					products that not only look beautiful but also have a real, tangible and positive impact
					in the world.
				</p>
				<p>
					Through Yasmine, Raquel hopes to inspire others to embrace sustainable and socially
					responsible practices. By doing so, we can all work together towards a more harmonious
					present where communities thrive and social justice is a reality.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Sustainable business, Social impact, Creative business, Small business processes, Managing
					cooperatives, Brand values
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={[
		'Sustainability',
		'Business values',
		'Creative process',
		'Circular economy',
		'Textile printing',
		'Textile dyeing',
		'Native Portuguese',
		'Fluent English',
		'Fluent Spanish'
	]}
/>
