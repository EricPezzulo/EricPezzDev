<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import ToastNotification from '../ToastNotification.svelte';
	let toastMessage: string = '';
	let name: string = '';
	let email: string = '';
	let message: string = '';
	let isEmailSending: boolean = false;
	let validationError: boolean = false;

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('body', message);

		if (name === '' || email === '' || message === '') {
			validationError = true;
			return;
		} else {
			isEmailSending = true;
			const response = await fetch('/', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				name = '';
				email = '';
				message = '';
				isEmailSending = false;
				toastMessage = '';
				setTimeout(() => {
					toastMessage = 'Email successfully sent!';
				});
			} else {
				// Handle error - optionally display an error message to the user
				toastMessage = '';
				setTimeout(() => {
					toastMessage = 'Email successfully sent!';
				});
			}
		}
	};
	$: if (name !== '' && email !== '' && message !== '') {
		validationError = false;
	}
</script>

<section>
	<div class="p-5">
		<h3 class="font-Oswald text-3xl font-semibold text-slate-300 mb-5">Contact me</h3>

		<form method="POST">
			<div>
				<label class="flex flex-col">
					<p class="font-Inter text-slate-300 pb-2">Name</p>
					<input
						bind:value={name}
						type="text"
						placeholder="Full name"
						class="text-slate-800 text-sm rounded bg-slate-300 h-7 px-2 focus:outline-none"
					/>
				</label>
			</div>
			<div>
				<label class="flex flex-col">
					<p class="font-Inter text-slate-300 pb-2 pt-2">Email</p>
					<input
						bind:value={email}
						type="email"
						placeholder="hello@world.com"
						class="text-slate-800 text-sm rounded bg-slate-300 h-7 px-2 focus:outline-none"
					/>
				</label>
			</div>
			<div>
				<label class="flex flex-col">
					<p class="font-Inter text-slate-300 pb-2 pt-2">Message</p>
					<textarea
						placeholder="Your message"
						bind:value={message}
						class="text-slate-800 text-sm rounded bg-slate-300 h-32 p-2 focus:outline-none resize-none"
					/>
				</label>
			</div>

			{#if validationError}
				<p transition:slide class="text-sm mt-4 font-light font-Inter text-red-500">
					Please fill out all forms
				</p>
			{/if}

			<button
				class="mt-6 flex w-full items-center justify-center rounded h-10 bg-slate-800 border border-slate-600 border-opacity-75"
				type="submit"
				on:click={handleSubmit}
			>
				<p class="text-slate-200 text-sm font-Inter">Send</p>
				{#if isEmailSending}
					<div role="status">
						<svg
							aria-hidden="true"
							class=" ml-1 inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
				{:else}
					<Icon class="ml-1 w-4 h-4 text-slate-200" icon="tabler:send" />
				{/if}
			</button>
		</form>
		{#if toastMessage}
			<ToastNotification {toastMessage} duration={10000} />
		{/if}
	</div>
</section>
