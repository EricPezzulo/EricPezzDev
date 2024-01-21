<script lang="ts">
	import { slide } from 'svelte/transition';
	export let toastMessage = '';
	export let duration = 3000; // duration in milliseconds

	let isVisible = false;

	setTimeout(() => {
		isVisible = false;
	}, duration);
	setTimeout(() => {
		isVisible = true;
	}, 50);
</script>

{#if isVisible}
	<div
		in:slide={{ duration: 300 }}
		out:slide={{ duration: 300 }}
		class="fixed bottom-5 w-full px-4 left-1/2 transform -translate-x-1/2"
	>
		<div
			class="w-full text-slate-800 text-sm rounded-md shadow h-10 items-center justify-center flex text-center bg-slate-300"
		>
			<p class="text-slate-700 font-Inter text-sm font-medium">{toastMessage}</p>
		</div>
	</div>
{/if}
