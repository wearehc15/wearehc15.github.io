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
		firstname="Shan"
		lastname="Luolin"
		image_url="/images/shan.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Helsinki, Finland"
			email="shan.luolin@eano.fi"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/shanluolin/' },
				{ title: 'Wonders of U', url: 'https://www.wondersofu.com/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Managing Director at East by North Oy.</p>
				<p class="mb-4 lg:mb-6">
					With over 12 years of experience guiding international projects, I offer extensive expertise in team and project management. With a decade of immersion in the food & beverage industry, I bring a seasoned perspective that blends seamlessly with my engagement in EU projects and management.
				</p>
				<p class="mb-4 lg:mb-6">As a conscious entrepreneur, I focus on purposeful impact, driven by strengths in strategic thinking and simplifying complexity. My ability to comprehend the bigger picture and its complexities allows me to have a deeper understanding, and develop comprehensive solutions that bridge diverse situations.</p>
				<p>My passion lies in extending understanding, supporting individuals through their personal and professional challenges. Through my experience in the wellbeing sector, I also bring an intuitive touch, infusing transformation with simplicity and clarity.</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Value proposition development, Validation of the offer, Go-to-Market and export strategies, Finance and investment readiness, Chosen market knowledge and network.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Value proposition development',
			'Validation of the offer',
			'Go-to-Market and export strategies',
			'Finance and investment readiness',
			'Chosen market knowledge and network',
			'Native Finnish',
			'Native Mandarin',
			'Fluent English'
		]
	}
	/>
