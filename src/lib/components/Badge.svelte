<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string,
		text_color: string,
		hover_text_color: string = 'group-hover:text-white',
		bg_color: string,
		hover_bg_opacity: string = 'hover:bg-opacity-75',
		hover_bg_color: string = 'hover:bg-blue-600',
		bg_opacity: string,
		text_size: string = 'font-base',
		border_color: string = 'border-blue-600',
		hover_border_color: string = 'hover:border-slate-300',
		icon: string = '',
		icon_size = 'w-5 h-5';
</script>

<div
	class={`${border_color} ${bg_color} ${bg_opacity} ${hover_bg_color} ${hover_border_color} ${hover_bg_opacity} cursor-default rounded  flex items-center px-2 py-1 w-fit m-1 group duration-150 ease-in-out`}
>
	<Icon class={`${text_color} ${icon_size} ${hover_text_color} duration-150 mr-1`} {icon} />
	<p class={`${text_color} ${text_size} ${hover_text_color}`}>
		{name}
	</p>
</div>
