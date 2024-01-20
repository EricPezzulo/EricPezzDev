<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let presignedUrl = '';
	onMount(async () => {
		const response = await fetch('/resume', { method: 'GET' });
		if (response.ok) {
			const data = await response.json();
			const { url } = data.body;
			presignedUrl = url;
		}
	});
</script>

<section class="flex items-center justify-center">
	<div class="p-5 flex w-80 justify-between text-slate-300">
		<a target="_blank" href="https://github.com/EricPezzulo">
			<Icon class="w-8 h-8" icon="mdi:github" />
		</a>
		<a target="_blank" href="https://twitter.com/EricPezzDev">
			<Icon class="w-8 h-8" icon="pajamas:twitter" />
		</a>
		<a target="_blank" href="https://www.linkedin.com/in/eric-pezzulo-8b2161bb">
			<Icon class="w-9 h-9" icon="mdi:linkedin" />
		</a>
		<a target="_blank" href={presignedUrl}><Icon class="w-8 h-8" icon="bi:filetype-pdf" /></a>
		<Icon class="w-8 h-8" icon="ic:baseline-discord" />
	</div>
</section>
