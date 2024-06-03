<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	const BAS_tech_stack = [
		{ name: 'JavaScript', icon: 'ri:javascript-line' },
		{ name: 'TypeScript', icon: 'tabler:brand-typescript' },
		{ name: 'Next.js', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' },
		{ name: 'React.js', icon: 'mdi:react' },
		{ name: 'Tailwind', icon: 'mdi:tailwind' },
		{ name: 'Node.js', icon: 'fa-brands:node' },
		{ name: 'GCP', icon: 'simple-icons:googlecloud' },
		{ name: 'REST', icon: 'eos-icons:api-outlined' },
		{ name: 'MongoDB', icon: 'simple-icons:mongodb' },
		{ name: 'Prisma', icon: 'simple-icons:prisma' },
		{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
		{ name: 'Shopify', icon: 'ic:baseline-shopify' },
		{ name: 'AWS Lambda', icon: 'simple-icons:awslambda', icon_size: 'w-4 h-4' },
		{ name: 'AWS S3', icon: 'mdi:aws' },
		{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
	];
	const WallToWall_tech_stack = [
		{ name: 'TypeScript', icon: 'tabler:brand-typescript' },
		{ name: 'Next.js', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' },
		{ name: 'React.js', icon: 'mdi:react' },
		{ name: 'Tailwind', icon: 'mdi:tailwind' },
		{ name: 'Node.js', icon: 'fa-brands:node' },
		{ name: 'PostgreSQL', icon: 'akar-icons:postgresql-fill' },
		{ name: 'Apollo', icon: 'file-icons:apollo' },
		{ name: 'Prisma', icon: 'simple-icons:prisma' },
		{ name: 'REST', icon: 'eos-icons:api-outlined' },
		{ name: 'AWS S3', icon: 'mdi:aws' },
		{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
		{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
	];
</script>

<section id="ExperienceSection" class="p-5 pt-12 lg:pt-5 lg:pb-10 lg:max-w-3xl">
	<div class="text-black">
		<h3 class="font-semibold text-xl font-Inter text-black pb-5">EXPERIENCE</h3>

		<p class="font-Inter font-medium">Full Stack Software Engineer</p>
		<p>Wall To Wall Contracting • October 2023 - Present</p>
		<p class="py-2">
			Designed and implemented a bespoke business software, signicantly enhancing operational
			eciency and scalability, which allowed the company to continually increase its client base. As
			the sole developer on the project, I am responsible for all aspects of the SDLC.
		</p>
		<div>
			<div class="flex items-center flex-wrap">
				{#each WallToWall_tech_stack as elem}
					<Badge
						hover_text_color={'group-hover:text-white'}
						name={elem.name}
						text_color={'text-blue-100'}
						bg_color={'bg-blue-600'}
						bg_opacity={'bg-opacity-100'}
						text_size={'text-sm'}
						icon={elem.icon}
						icon_size={elem.icon_size}
						hover_bg_opacity={'hover:bg-opacity-100'}
						hover_bg_color={'hover:bg-blue-700'}
					/>
				{/each}
			</div>
			<p class="font-Inter font-medium">Full Stack Developer</p>
			<p>BuildASoil • May 2022 - June 2023</p>
			<p class="py-2">
				Developed a custom ERP system, automated business processes, and maintained the eCommerce
				store. My role encompassed designing UI components, implementing new features, integrating
				third party API's and services.
			</p>
			<div>
				<div class="flex items-center flex-wrap">
					{#each BAS_tech_stack as elem}
						<Badge
							hover_text_color={'group-hover:text-white'}
							name={elem.name}
							text_color={'text-blue-100'}
							bg_color={'bg-blue-600'}
							bg_opacity={'bg-opacity-100'}
							text_size={'text-sm'}
							icon={elem.icon}
							icon_size={elem.icon_size}
							hover_bg_opacity={'hover:bg-opacity-100'}
							hover_bg_color={'hover:bg-blue-700'}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
