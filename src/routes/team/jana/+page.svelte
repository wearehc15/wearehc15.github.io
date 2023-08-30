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
		firstname="Jana"
		lastname="Sieling"
		image_url="/images/jana.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Munich, Germany"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ivanasetiawan/' },
				{ title: 'Venopi', url: 'https://www.venopi.com/' },
				{ title: 'Personal website', url: 'https://ivanasetiawan.com/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>
					Jana is a finance professional with over 8 years of experience in strategic consulting within the banking sector in Germany. Her dedication to empowering women is evident through her mission-driven startup where she seeks to support female entrepreneurs to thrive financially. With significant roles across various banks, Jana combines personal and business finance knowledge. This unique blend, coupled with her passion for investing, informs her empathetic leadership, effective mentoring, and growth-focused approach.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Reorganise and improve your finance significantly.
				</p>
			</PersonStrength>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Speaks: German, English',
			'Startup Finance',
			'Personal Finance',
		]
	}
	/>
