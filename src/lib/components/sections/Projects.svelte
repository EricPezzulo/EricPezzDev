<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	let BAS_Image_1 =
		'https://erics-personal-bucket.s3.amazonaws.com/New+Products+screen+w+sidebar.png';

	let LostVillage_Image_1 =
		'https://erics-personal-bucket.s3.amazonaws.com/Frame+1LostVillagethumbnail.png';
</script>

<section>
	<div class="p-5">
		<h3 class="font-Inter font-semibold text-slate-300">PROJECTS</h3>
		<ProjectCard
			title="BAS ERP"
			status="In production"
			description="An internal ERP system created to automate business processes, enhance workflows, and manage product."
			images={'BAS1.png'}
			techStack={[
				'JavaScript',
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'GCE',
				'REST',
				'MongoDB',
				'Prisma',
				'Auth.js',
				'Shopify',
				'AWS Lambda',
				'AWS S3',
				'Vercel'
			]}
		/>
		<ProjectCard
			title="LostVillage"
			status="In development"
			description="An ecommerce store built on Next.js, inspired from designed by Nike and Adidas."
			images={'LostVillage1.png'}
			techStack={[
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'PostgreSQL',
				'GraphQL',
				'Prisma',
				'Auth.js',
				'AWS S3',
				'Vercel'
			]}
		/>
		<ProjectCard
			title="CoachSpot"
			status="In development"
			description="CoachSpot is a SaaS that was created to revolutionize the way people give and receive online health and wellness, and fitness training. Expected release Q4 2024."
			techStack={[
				'TypeScript',
				'Next.js',
				'React.js',
				'Node.js',
				'PostgreSQL',
				'Prisma',
				'Auth.js',
				'AWS S3',
				'Vercel'
			]}
		/>
	</div>
</section>
