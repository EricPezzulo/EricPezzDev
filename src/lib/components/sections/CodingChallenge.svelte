<script lang="ts">
	import CodeEditor from '$lib/components/CodeEditor.svelte';
	let problemStatement: string = 'Write a function that reverses a string';
	const example = `Example:\nInput: "hello"\nOutput: "olleh"`;
</script>

<div class="px-5">
	<h3 class="text-lg font-medium font-Inter text-slate-300">CODING CHALLENGE (JavaScript)</h3>
	<p class="font-Inter text-slate-300">
		{problemStatement}
	</p>
	<p class="font-Inter text-slate-300 pb-2">{example}</p>
</div>
<CodeEditor />
