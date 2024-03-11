<script lang="ts">
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

<div class="hidden lg:flex lg:flex-col lg:min-h-screen lg:items-center text-slate-800 pb-5 pl-5">
	<div class="lg:max-w-3xl lg:items-start w-full">
		<div
			class="flex items-center hover:text-blue-600 group duration-100 ease-in cursor-pointer py-1"
		>
			<a
				target="_blank"
				class="flex items-center"
				href="#AboutSection"
				on:click|preventDefault={scrollToSection}
			>
				<div
					class="flex items-center justify-center bg-slate-500 group-hover:bg-slate-400 w-3 h-3 rounded-full mr-3"
				>
					<div
						class="bg-slate-400 group-hover:bg-blue-600 w-2 h-2 rounded ease-in duration-100"
					></div>
				</div>

				<p class="font-semibold text-sm">ABOUT</p></a
			>
		</div>
		<div
			class="flex items-center hover:text-blue-600 group duration-100 ease-in cursor-pointer py-1"
		>
			<a
				target="_blank"
				class="flex items-center"
				href="#ExperienceSection"
				on:click|preventDefault={scrollToSection}
			>
				<div
					class="flex items-center justify-center bg-slate-500 group-hover:bg-slate-400 w-3 h-3 rounded-full mr-3"
				>
					<div
						class="bg-slate-400 group-hover:bg-blue-600 w-2 h-2 rounded ease-in duration-100"
					></div>
				</div>
				<p class="font-semibold text-sm">EXPERIENCE</p></a
			>
		</div>
		<div
			class="flex items-center hover:text-blue-600 group duration-100 ease-in cursor-pointer py-1"
		>
			<a
				target="_blank"
				class="flex items-center"
				href="#ProjectsSection"
				on:click|preventDefault={scrollToSection}
				><div
					class="flex items-center justify-center bg-slate-500 group-hover:bg-slate-400 w-3 h-3 rounded-full mr-3"
				>
					<div
						class="bg-slate-400 group-hover:bg-blue-600 w-2 h-2 rounded ease-in duration-100"
					></div>
				</div>
				<p class="font-semibold text-sm">PROJECTS</p></a
			>
		</div>
		<div
			class="flex items-center hover:text-blue-600 group duration-100 ease-in cursor-pointer py-1"
		>
			<a target="_blank" class="flex items-center" href="/Eric_Pezzulo_Resume.pdf">
				<div
					class="flex items-center justify-center bg-slate-500 group-hover:bg-slate-400 w-3 h-3 rounded-full mr-3"
				>
					<div
						class="bg-slate-400 group-hover:bg-blue-600 w-2 h-2 rounded ease-in duration-100"
					></div>
				</div>
				<p class="font-semibold text-sm">RESUME</p>
			</a>
		</div>
	</div>
</div>
