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
		{ name: 'Auth.js', icon: 'tabler:brand-auth0' },
		{ name: 'Shopify', icon: 'ic:baseline-shopify' },
		{ name: 'AWS Lambda', icon: 'simple-icons:awslambda', icon_size: 'w-4 h-4' },
		{ name: 'AWS S3', icon: 'mdi:aws' },
		{ name: 'Vercel', icon: 'simple-icons:vercel', icon_size: 'w-4 h-4' }
	];
</script>

<section class="p-5 pt-12">
	<div class="text-slate-300">
		<h3 class="font-semibold text-xl font-Inter text-slate-300 pb-5">EXPERIENCE</h3>
		<p class="font-Inter font-medium">Full Stack Developer</p>
		<p>BuildASoil • May 2020 - Present</p>
		<p class="py-2">
			Developed a custom ERP system, automated business processes, and maintained the eCommerce
			store. My role encompassed designing UI components, implementing new features, integrating
			third party API's and services.
		</p>
		<div>
			<div class="flex items-center flex-wrap">
				{#each BAS_tech_stack as elem}
					<Badge
						name={elem.name}
						text_color={'text-blue-400'}
						bg_color={'bg-blue-600'}
						bg_opacity={'bg-opacity-30'}
						text_size={'text-sm'}
						icon={elem.icon}
						icon_size={elem.icon_size}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
