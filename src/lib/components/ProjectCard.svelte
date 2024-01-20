<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from './Badge.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let description: string,
		title: string,
		status: string,
		images: string = '',
		techStack: string[] = [];
	let seeMore: boolean = false;
	let expanding: boolean = false;

	let imageNameS3: string = images;
	let presignedUrl: string = '';
	onMount(async () => {
		if (images != '') {
			const response = await fetch('/projects', {
				method: 'POST',
				body: JSON.stringify({ imageNameS3 }),
				headers: {
					'content-type': 'application/json'
				}
			});
			if (response.ok) {
				const data = await response.json();

				const { url } = data.body;
				presignedUrl = url;
			}
		}
	});

	function toggleSeeMore() {
		seeMore = !seeMore;
	}

	let statusBadgeProps: { backgroundColor: string; textColor: string };
	if (status === 'In development') {
		statusBadgeProps = { backgroundColor: 'bg-orange-400', textColor: 'text-orange-500' };
	}
	if (status === 'In production') {
		statusBadgeProps = { backgroundColor: 'bg-green-400', textColor: 'text-green-500' };
	}
</script>

<div class="my-5">
	<div class="bg-slate-800 rounded p-3 border border-slate-700 border-opacity-75">
		<div class="flex items-center justify-between pb-2">
			<p class="text-slate-300 text-lg font-Inter font-medium">{title}</p>

			<div
				class={`${statusBadgeProps.backgroundColor} bg-opacity-35 flex w-fit px-3 py-0.5 rounded-full items-center justify-center`}
			>
				<p class={`text-[12px] ${statusBadgeProps.textColor}`}>{status}</p>
			</div>
		</div>
		<div class="flex w-full bg-gray-700 h-36 rounded">
			{#if images.length != 0}
				<img src={presignedUrl} class="object-cover rounded w-full" alt="" />
			{:else if images.length > 1}
				<p>add image pagination</p>
			{:else}
				<div class="flex items-center justify-center w-full">
					<p class="text-xl font-Oswald">Graphics coming soon</p>
				</div>
			{/if}
		</div>
		<div class="pt-3 pb-2">
			<p class="text-slate-300">{description}</p>
		</div>
		<div class="flex flex-col items-center justify-center">
			{#if seeMore}
				<div class="w-fit flex items-center justify-center">
					<div transition:slide class="flex flex-wrap py-3">
						{#each techStack as elem, index}
							<Badge
								name={elem}
								bg_opacity={'bg-opacity-30'}
								bg_color={'bg-blue-600'}
								text_color={'text-blue-400'}
								text_size={'text-sm'}
							/>
						{/each}
					</div>
				</div>
			{/if}
			{#if !expanding}
				<div class="flex items-center justify-center">
					<button on:click={toggleSeeMore}>
						<p class="text-slate-300 text-sm">{!seeMore ? 'View stack' : 'Hide stack'}</p></button
					>
					<Icon class="w-4 h-4" icon={!seeMore ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
				</div>
			{/if}
		</div>
	</div>
</div>
