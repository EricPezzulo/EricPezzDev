<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';

	let logo: string = '/ericLogo.png';
	let menuOpen: boolean = false;

	const scrollToSection = (e: MouseEvent) => {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		if (target && target.getAttribute) {
			const targetId = target.getAttribute('href')?.substring(1);
			if (targetId) {
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	};
</script>

<div class="flex w-full justify-between pt-10 pb-5 font-Inter px-5 lg:px-0">
	<div class="w-14 mr-5">
		<img src={logo} alt="logo" />
	</div>
	<button
		on:click={() => (menuOpen = !menuOpen)}
		class="flex lg:hidden justify-center items-center hover:bg-gray-100 rounded"
	>
		<Icon class="w-10 h-10 text-black" icon="ic:round-menu" />
	</button>
	<div class="text-black">
		<a href="#ContactMe" on:click|preventDefault={scrollToSection}
			><p class="font-Inter">Contact Me</p></a
		>
	</div>
</div>

{#if menuOpen}
	<div class="lg:hidden bg-white pb-5" transition:slide={{ duration: 300 }}>
		<div class="flex py-2 items-center border-b border-b-gray-300 hover:bg-gray-100">
			<p class="pl-5 text-slate-800">About</p>
		</div>
		<div class="flex py-2 items-center border-b border-b-gray-300 hover:bg-gray-100">
			<p class="pl-5 text-slate-800">Project</p>
		</div>
		<div class="flex py-2 items-center border-b border-b-gray-300 hover:bg-gray-100">
			<p class="pl-5 text-slate-800">Experience</p>
		</div>
		<a
			target="_blank"
			href="/Eric_Pezzulo_Resume.pdf"
			class="flex py-2 items-center border-b border-b-gray-300 hover:bg-gray-100 shadow"
		>
			<p class="pl-5 text-slate-800">Resume</p>
		</a>
	</div>
{/if}
