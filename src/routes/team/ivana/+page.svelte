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
		firstname="Ivana"
		lastname="Setiawan"
		image_url="/images/ivana.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">

		<PersonMeta
			based_in="Amsterdam, Netherlands"
			email="ivana@venopi.com"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ivanasetiawan/' },
				{ title: 'Project: Venopi', url: 'https://www.venopi.com/' },
				{ title: 'Personal website', url: 'https://ivanasetiawan.com/' }
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p>
					Ivana is a self-taught Software Engineer who has been coding since 2009, mainly in front-end development. They're enthusiastic about JavaScript, Python, and UX Design, and intrigued by the potential of Web3 technology.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Building tech product, business strategy, sharing startup experience, Web3, B2B events.
				</p>
			</PersonStrength>

			<PersonProjects
				projects = { [
					{ title: 'Funda', url: 'https://www.funda.nl/' },
					{ title: 'KPN', url: 'https://www.kpn.com/' },
					{ title: 'UWV', url: 'https://www.uwv.nl/' },
					{ title: 'WomenWorks', url: 'https://womenworks.io/' },
					{ title: 'HackYourFuture', url: 'https://hackyourfuture.net/' },
				] }
				/>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Frontend tech stack',
			'Javascript frameworks & libraries',
			'React / Vue3 / Svelte',
			'Nuxtjs / SvelteKit',
			'Git',
			'Tailwind',
			'Segment (Data driven)',
			'UX Design',
			'WordPress',
			'Native Indonesian',
			'Fluent English',
			'Basic Dutch',
			'Basic Swedish'
		]
	}
	/>
