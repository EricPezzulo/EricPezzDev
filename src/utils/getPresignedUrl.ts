import { onMount } from 'svelte';

export const getPresignedUrl = (imageNameS3: string) => {
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
	return { presignedUrl };
};
