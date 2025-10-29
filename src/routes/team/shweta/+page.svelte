<script>
	import PersonDescription from '../../PersonDescription.svelte';
	import PersonMeta from '../../PersonMeta.svelte';
	import PersonSkills from '../../PersonSkills.svelte';
	import PersonStrength from '../../PersonStrength.svelte';
	import PersonTitle from '../../PersonTitle.svelte';
	import ViewTeam from '../../ViewTeam.svelte';
</script>

<svelte:head>
	<title>HC15 Alliance - Shweta Srivastav</title>
	<meta
		name="description"
		content="Shweta is an architect, researcher, educator and entrepreneur with 15+ years of experience in education and sustainability working across glocal scales and countries."
	/>
	<meta
		name="keywords"
		content="Shweta Srivastav, Architect, Researcher, Educator, Entrepreneur, Netherlands"
	/>
</svelte:head>

<article class="pt-24 pb-9 lg:pb-16">
	<ViewTeam />

	<PersonTitle firstname="Shweta" lastname="Srivastav" image_url="/images/shweta.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<PersonMeta
			based_in="Utrecht, Netherlands"
			email="shweta.cu@gmail.com"
			socials={[{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/srivastavshweta/' }]}
		/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Design Research for Regeneration.</p>
				<p class="mb-4 lg:mb-6">
					Shweta is an architect, researcher, educator and entrepreneur. She has 15+ years of
					experience in education and sustainability working across glocal scales and countries. She
					was co-lead for Erasmus funded Learning Networks for Sustainability for the India network.
					She works with education and organisations in the Netherlands and India on bringing
					futures, systems and design thinking, accelerating transitions to regenerative futures.
				</p>
				<p>
					She is also a lecturer for Global Project and Change Management at Windesheim University
					in the Netherlands and founding member of Living Cities Earth Network. She coordinated the
					UNESCO chair in culture, habitat and sustainable development and contributes to multiple
					glocal networks on systems innovation,transitions and sustainability.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Sustainability and Corporate Social Responsibility, Futures, Systems and design thinking
					for organisations, Capacity building for leading in uncertainty.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={[
		'Sustainability and Corporate Social Responsibility',
		'Systems and design thinking for organisations',
		'Capacity building for leading in uncertainty',
		'Native Hindi',
		'Fluent English'
	]}
/>
