<script lang="ts">
	export let name: string,
		text_color: string,
		bg_color: string,
		bg_opacity: string,
		text_size: string = 'font-base',
		border_color: string = 'border-blue-600';
</script>

<div class={`rounded border ${border_color} px-2 py-1 ${bg_color} ${bg_opacity} flex w-fit m-1`}>
	<p class={`${text_color} ${text_size}`}>{name}</p>
</div>
