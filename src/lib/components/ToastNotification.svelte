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
		class="fixed bottom-5 left-0 right-0 mx-auto w-full px-4 md:w-fit md:right-5 md:left-auto"
	>
		<div
			class="w-full text-slate-800 text-sm rounded-md shadow h-10 items-center justify-center flex text-center bg-slate-300 md:px-4"
		>
			<p class="text-slate-700 font-Inter text-sm font-medium">{toastMessage}</p>
		</div>
	</div>
{/if}
