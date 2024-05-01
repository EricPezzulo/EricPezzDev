<script lang="ts">
	import { onMount } from 'svelte';
	import { getPresignedUrl } from '../../../utils/getPresignedUrl';
	let imageNameS3: string = 'guy_at_laptop.png';
	let presignedUrl: string = '';
	onMount(async () => {
		const response = await fetch('/images', {
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
	});
</script>

<section id="AboutSection" class="flex flex-col px-5 pt-5 lg:pb-10">
	<h3 class="font-semibold text-xl font-Inter pb-3 text-black">ABOUT</h3>
	<div class="lg:max-w-5xl lg:grid lg:grid-cols-[3fr,1fr] lg:items-center">
		<div class="text-black lg:max-w-2xl">
			<p>
				I began programing in 2015 while taking an introductory programming class in college. I
				learned how to write <span class="text-blue-600 font-medium">VB.NET</span> and
				<span class="text-blue-600 font-medium">C++</span>, while also learning how to create GUI's
				with the help of <span class="text-blue-600 font-medium">Visual Studio</span>.
			</p>
			<br />
			<p>
				From there, I dabbled in game development with <span class="textblue-600 font-medium"
					>Unity</span
				>
				and <span class="text-blue-600 font-medium">C#</span>. Ultimately I wasn't very interested
				in game development and decided to pivot towards building for the
				<span class="text-blue-600 font-medium">web</span>. I went the
				<span class="text-blue-600 font-medium">self taught</span>
				route and learned everything I could about web technologies. After building a few projects and
				getting comfortable with
				<span class="text-blue-600 font-medium">JavaScript</span>,
				<span class="text-blue-600 font-medium">HTML</span>, and
				<span class="text-blue-600">CSS</span>
				I was immediately drawn to the <span class="text-blue-600 font-medium">React</span>
				ecosystem and found my passion in web development. After building tons of projects and confidence
				in my skills as a developer, I landed my first
				<span class="text-blue-600 font-medium">Full Stack Development</span> job in 2022.
			</p>

			<br />
			<p>
				These days I find myself using <span class="text-blue-600 font-medium">SvelteKit</span> and
				<span class="text-blue-600 font-meidum">Next.js </span>as Full Stack frameworks,
				<span class="text-blue-600 font-medium">TypeScript</span>
				and <span class="text-blue-600 font-medium">Tailwind </span>for the frontend and
				<span class="text-blue-600 font-medium">Node.js</span>
				or <span class="text-blue-600 font-medium">C#</span> for backends. As for databases, I
				prefer to use <span class="text-blue-600 font-medium">PostgreSQL</span> or
				<span class="text-blue-600 font-medium">MongoDB</span>.
			</p>

			<br />

			<!-- <p>
				In my free time you can catch me either hanging out with family and friends, watching
				movies, playing video games, or working out at the gym. If you're lucky you might catch me
				in a Primeagen twitch chat.
			</p> -->
		</div>
		<div class="hidden lg:flex justify-center">
			<img class="w-64 h-64" src={presignedUrl} alt="" />
		</div>
	</div>
</section>
