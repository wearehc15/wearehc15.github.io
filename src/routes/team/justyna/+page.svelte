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
		firstname="Justyna"
		lastname="Kawa"
		image_url="/images/justyna.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Munich, Germany"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/justyna-kawa/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>
					With over 16 years of impactful leadership in the Fashion and Retail Industry, my expertise lies in brand and product development, strategic purchasing, and consulting. I've negotiated across diverse markets, driving profitability and strategic alignment. Additionally, my experience extends to consulting startups on business plans and strategies. My objectives are always clear: achieving targeted margins, sustainable profitability, and ensuring alignment with strategic goals.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Organisational development, Business development and international sales.
				</p>
			</PersonStrength>

			<PersonProjects
				projects = { [
					{ title: 'Peakava', url: 'https://www.instagram.com/peakava_/' },
				] }
				/>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: Polish, English, German',
			'Product development',
			'Strategic purchasing',
			'Negotiation',
			'Business plan',
			'Strategic alignment',
			'Driving profitability',
		]
	}
	/>
