<script lang="ts">
	import About from '$lib/components/sections/About.svelte';
	import CodingChallenge from '$lib/components/sections/CodingChallenge.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Links from '$lib/components/sections/Links.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
</script>

<main>
	<!-- <Header /> -->
	<Hero />

	<About />
	<Experience />
	<Projects />
	<CodingChallenge />
	<Contact />
	<Links />
	<Footer />
</main>
