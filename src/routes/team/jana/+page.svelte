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
		firstname="Jana"
		lastname="Sieling"
		image_url="/images/jana-1.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Munich, Germany"
			email="zen@finanzfriede.de"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/jana-sieling-60a1a6204/' },
				{ title: 'Instagram', url: 'https://www.instagram.com/finanzfriede/' },
				{ title: 'Zenfinance', url: 'https://finanzfriede.de/zenfinance/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6">
					Jana is a finance consultant with over 8 years of experience in the banking sector in Germany. Her dedication to empowering women is evident through her mission-driven startup where she seeks to support female entrepreneurs to thrive financially. Jana combines personal and business finance knowledge from retirement plans to cash flow management. She loves sharing her knowledge to empower women in workshops and 1:1 mentoring sessions and is passionate about speaking in female networks to encourage the participants to talk about money.
				</p>
				<p>“Financial Feminism is the understanding of the power that money holds to transform the world in a way that creates a more equitable place for all of humanity.” Rebecca Walker</p>
			</PersonDescription>

			<PersonStrength>
				<ul>
					<li class="mb-4 lg:mb-6">Understanding your money psychology: what are your learnt behaviors you grew up with and how do they control you today in personal and business decisions?</li>
					<li class="mb-4 lg:mb-6">Setting up a financial structure and routine that actually works for you - including personal and business finances</li>
					<li class="mb-4 lg:mb-6">Essential financial literacy and help you decide where to get support</li>
				</ul>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Money Psychology',
			'Cash Flow Management',
			'Retirement in Germany',
			'Financial Literacy',
			'Business Consulting',
			'Personal Finances',
			'Business Finance',
			'Financial Industry',
			'Native German',
			'Fluent English',
			'Fluent Spanish',
		]
	}
	/>
