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
			email="k@bazylczyk.com"
			socials = { [
				{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/katarzynabazylczyk/' },
				{ title: 'Personal website', url: 'http://bazylczyk.com/' },
				{ title: 'Instagram', url: 'https://www.instagram.com/venusand.co/' },
				{ title: 'Venus & Co', url: 'https://venusand.com/' },
			] }
			/>

		<div class="lg:w-2/3 text-xl md:text-2xl">
			<PersonDescription>
				<p class="mb-4 lg:mb-6 text-gray-500 italic">Product & experience designer. Creative.</p>
				<p class="mb-4 lg:mb-6">
					Design specialist focused on crafting digital solutions for Subject Matter Experts. Over the past decade, Katarzyna has been at the forefront of designing digital products for biotechnology and private banking sectors. Her portfolio includes global solutions for clients such as Roche and Genentech, encompassing products tailored for Medical Science Liaisons, innovations for diagnostic laboratory personnel, and financial projects within the UK's National Health Service (NHS). Within Citi Private Bank Innovation, she led design processes for projects focused on: prospecting new UHNW & HNW clients; testing and comparing Natural Language Processing (NLP) models, venturing into the world of art investment through NFTs conversational interfaces.
				</p>
				<p class="mb-4 lg:mb-6">Currently, she serves as an advisor, lending her expertise in design strategy and crafting solutions for various initiatives: exploring the integration of Virtual Reality (VR) tools in aviation; art tokenization experiences; and optimising research process through interfaces for genomics sector.</p>
				<p>Katarzyna is also committed to addressing the critical gap in psychological education among adults and teenagers through her brand, Venus&Co. She leverages the power of design and art to facilitate meaningful and impactful products & experiences, striving to make a positive difference in the lives of individuals seeking psychological education and support.</p>
			</PersonDescription>

			<PersonStrength>
				<p>
					Product Design (UX research, UX / UI design), Service Design, Design Management, Art Direction, Graphic design (Branding, Visual Communication, WayFinding, Print, Packaging), Industrial design (3D models)
				</p>
			</PersonStrength>
		</div>
	</div>
</article>
<PersonSkills
	skills={
		[
			'Product Design',
			'Service Design',
			'Art Direction',
			'Graphic design',
			'Adobe Cloud',
			'Figma',
			'Sketch',
			'Axure RP',
			'Rhinoceros 3D',
			'Blender',
			'WordPress',
			'Spark AR'
		]
	}
	/>
