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
		firstname="Savvoula"
		lastname="Oikonomou"
		image_url="/images/savvoula.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Athens, Greece"
			email="savvoula@huemaniser.com"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/savvoula-oikonomou/' },
				{ title: 'Huemaniser', url: 'https://www.huemaniser.com/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Institutional Fundraising & Consulting.</p>
				<p>
					Savvoula Oikonomou is a project manager with more than 10 years of experience in EU funded projects. She has worked in multiple international projects under Erasmus+, Europe for Citizens, AMIF, CERV, HORIZON either as a partner organization or as a coordinator. She speaks fluently English and is a certified PMP.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					People management, Finance and investment readiness, Chosen market knowledge and network.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Fundraising',
			'People management',
			'Finance and investment readiness',
			'Native Greek',
			'Fluent English'
		]
	}
	/>
