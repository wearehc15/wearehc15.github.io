<script>
	import PersonDescription from "../../PersonDescription.svelte";
	import PersonMeta from "../../PersonMeta.svelte";
	import PersonSkills from "../../PersonSkills.svelte";
	import PersonStrength from "../../PersonStrength.svelte";
	import PersonTitle from "../../PersonTitle.svelte";
</script>
<article class="pt-24 pb-9 lg:pb-16">
	<div class="px-4 max-w-4xl mx-auto worksans text-sm">
		<a href="/alliance#theteam"><i class="fa-light fa-arrow-left mr-2"></i>View the team</a>
	</div>

	<PersonTitle
		firstname="Raquel"
		lastname="Sobral"
		image_url="/images/raquel.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Odeceixe, Portugal"
			email="info@yasminehandmade.com"
			socials = { [
				{ title: 'Instagram', url: 'https://www.instagram.com/yasminehandprint/' },
				{ title: 'Yasmine Handmade', url: 'https://yasminehandmade.com/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Sustainability & Corporate Social Responsibility.</p>
				<p class="mb-4 lg:mb-6">
					Throughout her career, Raquel has accumulated 15 years of experience in humanitarian aid, with both local and international work, focusing on volunteer projects and NGO development field work.
				</p>
				<p class="mb-4 lg:mb-6">
					As someone with a long-standing commitment to community building and promoting social and environmental impact, in 2021, Raquel decided to take her passion to the next level and establish Yasmine - a brand that reflects these values. Her artisanal textile brand is founded on the principles of sustainability and corporate social responsibility.
				</p>
				<p class="mb-4 lg:mb-6">
					With a focus on artisanal work and deadstock materials, Raquel is committed to creating products that not only look beautiful but also have a real, tangible and positive impact in the world.
				</p>
				<p>Through Yasmine, Raquel hopes to inspire others to embrace sustainable and socially responsible practices. By doing so, we can all work together towards a more harmonious present where communities thrive and social justice is a reality.</p>
			</PersonDescription>

			<PersonStrength>
				<p>Sustainable business, Social impact, Creative business, Small business processes, Managing cooperatives, Brand values</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Sustainability',
			'Business values',
			'Creative process',
			'Circular economy',
			'Textile printing',
			'Textile dyeing',
			'Native Portuguese',
			'Fluent English',
			'Fluent Spanish',
		]
	}
	/>
