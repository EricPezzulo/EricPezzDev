<script lang="ts">
	import { onMount } from 'svelte';
	import ace from 'ace-builds/src-noconflict/ace';
	import 'ace-builds/src-noconflict/mode-javascript';
	import 'ace-builds/src-noconflict/theme-one_dark';
	import { slide } from 'svelte/transition';

	interface TestCase {
		input: string;
		expectedOutput: string;
	}
	interface TestResult {
		passed: boolean;
		input: string;
		expected?: string;
		actual?: string;
		error?: string;
	}
	let feedback: string = '';

	const testCases: TestCase[] = [
		{ input: 'hello', expectedOutput: 'olleh' },
		{ input: 'world', expectedOutput: 'dlrow' }
	];
	let editorContainer: HTMLElement;
	let editor: any;
	onMount(() => {
		editor = ace.edit(editorContainer, {
			mode: 'ace/mode/javascript',
			theme: 'ace/theme/one_dark',
			autoScrollEditorIntoView: true,
			copyWithEmptySelection: true
		});
		editor.setOptions({
			showPrintMargin: false,
			fontSize: '16px',
			useWorker: false
		});

		editor.session.setValue(
			'//Do NOT rename the function \nfunction reverseString() {\n // Add your code here \n  return \n}'
		);
	});

	function evaluateUserCode(userCode: string): void {
		let userFunction: (input: string) => string;
		try {
			// Dynamically create a function from the user's code
			userFunction = new Function('str', userCode + `; return reverseString(str);`) as (
				input: string
			) => string;
		} catch (error) {
			feedback =
				'Error in compiling code: ' + (error instanceof Error ? error.message : String(error));
			return;
		}
		const testResults: TestResult[] = testCases.map((testCase) => {
			try {
				const result = userFunction(testCase.input);
				return {
					passed: result === testCase.expectedOutput,
					input: testCase.input,
					expected: testCase.expectedOutput,
					actual: result
				};
			} catch (error) {
				return {
					passed: false,
					input: testCase.input,
					error: error instanceof Error ? error.message : String(error)
				};
			}
		});

		// Update feedback based on test results
		feedback = testResults.every((result) => result.passed)
			? 'All tests passed!'
			: 'Some tests failed.';
	}

	const handleSubmit = () => {
		const userCode = editor.getValue();
		evaluateUserCode(userCode);
	};
</script>

<div class="w-full px-5 pb-5">
	<div class="h-96 w-full rounded" bind:this={editorContainer} id="editor"></div>

	<div class="pt-3 flex items-center justify-between">
		<button
			class="rounded px-2 py-1 bg-slate-800 border border-slate-600 border-opacity-7"
			on:click={handleSubmit}
		>
			<p class="text-slate-200 text-sm font-Inter">Submit solution</p>
		</button>
		{#if feedback === 'All tests passed!'}
			<p transition:slide class="font-Inter text-green-500">{feedback}</p>
		{:else}
			<p transition:slide class="font-Inter text-red-500">{feedback}</p>
		{/if}
	</div>
</div>
