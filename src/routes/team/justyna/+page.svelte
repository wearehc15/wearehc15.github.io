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
			email="kawa.justyna@gmail.com"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/justyna-kawa/' },
				{ title: 'Instagram', url: 'https://www.instagram.com/coffee.revival/' },
				{ title: 'Peakava IG', url: 'https://www.instagram.com/peakava_/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6">
					With a rich history of 16+ years in influential leadership within the Fashion and Retail Industry, Justyna’s core competencies revolve around brand and product development, strategic procurement, and consultancy services. Her career has been marked by successful negotiations across a wide spectrum of markets, consistently delivering enhanced profitability and strategic cohesion.
				</p>
				<p>Moreover, she brings a wealth of experience in guiding startups through the intricacies of business planning and strategy development. Justyna’s unwavering focus is on achieving specific margin targets, fostering sustainable profitability, and aligning business strategies seamlessly with overarching strategic objectives</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Business Plans, Business Development, Strategy Planning: brand, product, marketing, procurement, Negotiations, Brainstorming Sessions, Out-of-the box Solutions, VR and AR projects.
				</p>
			</PersonStrength>

			<PersonProjects
				projects = { [
					{ title: 'Peakava', url: 'http://www.peakava.pl' },
				] }
				/>
		</div>
	</div>
</article>

<PersonSkills
	skills={
		[
			'Brand Strategy',
			'Business Plan',
			'Team Management',
			'Product Development',
			'Sourcing',
			'Strategic Purchasing',
			'Negotitation',
			'Native Polish',
			'Fluent English',
			'Advance German',
		]
	}
	/>
