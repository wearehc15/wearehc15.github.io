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
		firstname="Katarzyna"
		lastname="Bazylczyk"
		image_url="/images/kasia.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Poland"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/katarzynabazylczyk/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>Design specialist focused on crafting digital solutions for Subject Matter Experts. For the last 10 years she has created digital products for biotechnology and private banking sector. The most important projects include global solutions for Roche and Genentech, such as products for Medical Science Liaison, innovative solutions for employees of diagnostic laboratories and NHS in UK. Last 4 years, for the purposes of Citi Private Bank Innovation, she was responsible for design processes in projects on prospecting new UHNW clients, testing and comparing NLP models, investing in art (NFT) and conversational interfaces. Currently, she is advising on design strategy, solutions in initiatives and exploring VR tools within aviation and art investment sectors.</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					UX Design, Product design, User testing.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: Polish, English, Spanish',
			'Product design',
			'User testing',
			'UX Design',
		]
	}
	/>
