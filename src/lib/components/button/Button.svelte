<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: HTMLButtonElement['type'] = 'button';
	export let label: string = 'button';
	export let isOutline: boolean = false;
	export let theme: 'primary' | 'warning' = 'primary';

	let dispatch = createEventDispatcher();

	const textPrimary = '#343a40';

	const themes = {
		primary: {
			bgColor: '#0d6efd',
			borderColor: '#0d6efd',
			bgColorHov: '#0b5ed7',
			borderColorHov: '#0a58ca',
			bgColorAct: '#0a58ca',
			borderColorAct: '#0a53be'
		},
		warning: {
			bgColor: '#ffc107',
			borderColor: '#ffc107',
			bgColorHov: '#ffc107',
			borderColorHov: '#ffc107',
			bgColorAct: '#ffc107',
			borderColorAct: '#ffc107'
		}
	};

	const onClick = () => dispatch('Click');
</script>

<button
	{type}
	class="text-bold"
	class:btn-outline={isOutline}
	style="--text-color:{isOutline ? themes[theme].borderColor : textPrimary};
				--text-color-hover:{isOutline && theme == 'warning' ? textPrimary : 'white'};
				--bg-color:{themes[theme].bgColor};
	      --border-color:{themes[theme].borderColor};
				--bg-color-hover:{themes[theme].bgColorHov};
	      --border-color-hover:{themes[theme].borderColorHov};
				--bg-color-active:{themes[theme].bgColorAct};
	      --border-color-active:{themes[theme].borderColorAct};"
	on:click={onClick}
>
	<slot>{label}</slot>
</button>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	button {
		flex-grow: 1;
		cursor: pointer;
		color: white;
		background-color: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: 4px;
		padding: 0.5em 1em;
		font-size: 1em;

		&:hover {
			color: var(--text-color-hover) !important;
			background-color: var(--bg-color-hover) !important;
			border-color: var(--border-color-hover) !important;
		}

		&:active {
			color: var(--text-color-hover) !important;
			background-color: var(--bg-color-active) !important;
			border-color: var(--border-color-active) !important;
		}

		&.btn-outline {
			background-color: white;
			color: var(--text-color);
		}
	}
</style>
