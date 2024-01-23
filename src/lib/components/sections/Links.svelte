<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<section class="flex items-center justify-center">
	<div
		class="p-5 flex w-80 justify-between text-slate-300
	md:grid md:justify-center md:p-0 md:w-full"
	>
		<a
			class="grid grid-cols-[auto_minmax(0,1fr)] items-center pb-2"
			target="_blank"
			href="https://github.com/EricPezzulo"
		>
			<Icon class="w-9 h-9 inline-block" icon="mdi:github" />
			<p
				class="hidden md:inline-block pl-2 text-xl font-light text-slate-300 hover:text-white duration-200 font-Inter"
			>
				Check out my GitHub
			</p>
		</a>
		<a
			class="grid grid-cols-[auto_minmax(0,1fr)] items-center pb-2"
			target="_blank"
			href="https://twitter.com/EricPezzDev"
		>
			<Icon class="w-9 h-9 inline-block" icon="pajamas:twitter" />
			<p
				class="hidden md:inline-block pl-2 text-xl font-light text-slate-300 hover:text-white duration-200 font-Inter"
			>
				Follow me on Twitter/X
			</p>
		</a>
		<a
			class="grid grid-cols-[auto_minmax(0,1fr)] items-center pb-2"
			target="_blank"
			href="https://www.linkedin.com/in/eric-pezzulo-8b2161bb"
		>
			<Icon class="w-9 h-9 inline-block" icon="mdi:linkedin" />
			<p
				class="hidden md:inline-block pl-2 text-xl font-light text-slate-300 hover:text-white duration-200 font-Inter"
			>
				Connect with me on LinkedIn
			</p>
		</a>
		<a
			class="grid grid-cols-[auto_minmax(0,1fr)] items-center pb-2"
			target="_blank"
			href="/Eric_Pezzulo_Resume.pdf"
			><Icon class="w-9 h-9 inline-block" icon="bi:filetype-pdf" />
			<p
				class="hidden md:inline-block pl-2 text-xl font-light text-slate-300 hover:text-white duration-200 font-Inter"
			>
				View my resume
			</p></a
		>
	</div>
</section>
