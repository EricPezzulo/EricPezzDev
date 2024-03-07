<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/sections/About.svelte';
	import CodingChallenge from '$lib/components/sections/CodingChallenge.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Links from '$lib/components/sections/Links.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import TableOfContents from '$lib/components/sections/TableOfContents.svelte';
</script>

<main>
	<Header />
	<Hero />
	<div class="md:grid md:grid-cols-2">
		<TableOfContents />
		<About />
		<div />
		<Experience />
	</div>
	<Projects />
	<!-- <CodingChallenge /> -->
	<div class="md:grid md:grid-cols-2">
		<Contact />
		<Links />
	</div>
	<Footer />
</main>
