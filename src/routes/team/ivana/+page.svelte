<script>
	import PersonDescription from '../../PersonDescription.svelte';
	import PersonMeta from '../../PersonMeta.svelte';
	import PersonProjects from '../../PersonProjects.svelte';
	import PersonSkills from '../../PersonSkills.svelte';
	import PersonStrength from '../../PersonStrength.svelte';
	import PersonTitle from '../../PersonTitle.svelte';
</script>

<svelte:head>
	<title>HC15 Alliance - Ivana Setiawan</title>
	<meta
		name="description"
		content="Ivana is a self-taught polyglot programmer with expertise across multiple development
					stacks, including JavaScript(React(Next), Vue(Nuxt), Svelte(Sveltekit)), PHP, Phython, and
					PostgreSQL (Supabase DB). Writing code since 2009, she is passionate about transforming
					ideas into seamless, full-stack digital solutions — guiding projects from concept and
					design all the way to deployment."
	/>
	<meta
		name="keywords"
		content="Ivana Setiawan, Venopi, Software Engineer, Frontend Developer, Web3, JavaScript, Python, UX Design, Amsterdam, Netherlands"
	/>
</svelte:head>
<article class="pt-24 pb-9 lg:pb-16">
	<div class="px-4 max-w-4xl mx-auto worksans text-sm">
		<a href="/alliance#theteam"><i class="fa-light fa-arrow-left mr-2" />View the team</a>
	</div>

	<PersonTitle firstname="Ivana" lastname="Setiawan" image_url="/images/ivana.jpg" />

	<div class="px-4 flex-col lg:flex-row flex gap-4 lg:gap-8 max-w-4xl mx-auto">
		<PersonMeta
			based_in="Amsterdam, Netherlands"
			email="ivana@venopi.com"
			socials={[
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ivanasetiawan/' },
				{ title: 'Project: Venopi', url: 'https://www.venopi.com/' },
				{ title: 'Personal website', url: 'https://ivanasetiawan.com/' }
			]}
		/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Engineer, Hacker & Founder.</p>
				<p>
					Ivana is a self-taught polyglot programmer with expertise across multiple development
					stacks, including JavaScript(React(Next), Vue(Nuxt), Svelte(Sveltekit)), PHP, Phython, and
					PostgreSQL (Supabase DB). Writing code since 2009, she is passionate about transforming
					ideas into seamless, full-stack digital solutions — guiding projects from concept and
					design all the way to deployment.
				</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Building tech product, business strategy, sharing startup experience, Web3, B2B events.
				</p>
			</PersonStrength>

			<PersonProjects
				projects={[
					{ title: 'Funda', url: 'https://www.funda.nl/' },
					{ title: 'KPN', url: 'https://www.kpn.com/' },
					{ title: 'UWV', url: 'https://www.uwv.nl/' },
					{ title: 'WomenWorks', url: 'https://womenworks.io/' },
					{ title: 'HackYourFuture', url: 'https://hackyourfuture.net/' }
				]}
			/>
		</div>
	</div>
</article>

<PersonSkills
	skills={[
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
	]}
/>
