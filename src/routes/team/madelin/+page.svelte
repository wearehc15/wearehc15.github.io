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
		firstname="Madelin"
		lastname="Winkler"
		image_url="/images/madelin.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Munich, Germany"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/madelinwinkler/' },
				{ title: 'Personal website', url: 'https://domega-consulting.com/' },
				{ title: 'Instagram', url: 'https://www.instagram.com/iammadelinn/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>Madelin is a SEO & PR Expert and also helps entrepreneurs to explore the realm of digital nomadism. She has more then 8 years experience with CRM & ERP Systems. Madelin has a high class quality (strong) network in Munich, Barcelona and Lichtenstein.</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Google Adwords, Google Analytics, Keyword Research & Optimazing, Website Marketing for high quality leads, Network Champion, PR with different Magazines, Creativ, Multilingual.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: German, English, Spanish',
			'Wordpress', 'ChatGPT Advanced',
			'Neuronwriter',
			'SugarCRM',
			'IBM',
			'Salesforce',
			'ERP Systems',
			'Hubspot',
			'Shore'
		]
	}
	/>
