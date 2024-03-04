<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section class="p-5 lg:px-0">
	<h3 class="font-Inter font-semibold text-slate-300">PROJECTS</h3>

	<div class="grid gap-3 grid-cols-1 md:grid-cols-2 md:grid-container">
		<ProjectCard
			title="BAS ERP"
			status="In production"
			description="An internal ERP system created to automate business processes, enhance workflows, and manage product."
			images={'BAS1.png'}
			techStack={[
				{ name: 'JavaScript', icon: 'ri:javascript-line' },
				{ name: 'TypeScript', icon: 'tabler:brand-typescript' },
				{ name: 'Next.js', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' },
				{ name: 'React.js', icon: 'mdi:react' },
				{ name: 'Tailwind', icon: 'mdi:tailwind' },
				{ name: 'HTML', icon: 'material-symbols:html' },
				{ name: 'CSS', icon: 'material-symbols:css' },
				{ name: 'Node.js', icon: 'fa-brands:node' },
				{ name: 'GCP', icon: 'simple-icons:googlecloud' },
				{ name: 'REST', icon: 'eos-icons:api-outlined' },
				{ name: 'MongoDB', icon: 'simple-icons:mongodb' },
				{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
				{ name: 'Shopify', icon: 'ic:baseline-shopify' },
				{ name: 'AWS Lambda', icon: 'simple-icons:awslambda', icon_size: 'w-4 h-4' },
				{ name: 'AWS S3', icon: 'mdi:aws' },
				{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
			]}
		/>
		<ProjectCard
			title="LostVillage"
			status="In development"
			description="An ecommerce store built on Next.js, inspired from designs by Nike and Adidas."
			images={'LostVillage1.png'}
			techStack={[
				{ name: 'TypeScript', icon: 'tabler:brand-typescript' },
				{ name: 'Next.js', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' },
				{ name: 'React.js', icon: 'mdi:react' },
				{ name: 'HTML', icon: 'material-symbols:html' },
				{ name: 'CSS', icon: 'material-symbols:css' },
				{ name: 'Node.js', icon: 'fa-brands:node' },
				{ name: 'GraphQL', icon: 'mdi:graphql' },
				{ name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill' },
				{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
				{ name: 'AWS S3', icon: 'mdi:aws' },
				{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
			]}
		/>
		<ProjectCard
			title="CoachSpot"
			status="In development"
			description="CoachSpot is a SaaS that was created to revolutionize the way people give and receive online health and wellness, and fitness training."
			techStack={[
				{ name: 'TypeScript', icon: 'tabler:brand-typescript' },
				{ name: 'Next.js', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' },
				{ name: 'React.js', icon: 'mdi:react' },
				{ name: 'Node.js', icon: 'fa-brands:node' },
				{ name: 'HTML', icon: 'material-symbols:html' },
				{ name: 'CSS', icon: 'material-symbols:css' },
				{ name: 'GraphQL', icon: 'mdi:graphql' },
				{ name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill' },
				{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
				{ name: 'AWS S3', icon: 'mdi:aws' },
				{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
			]}
		/>
	</div>
</section>
