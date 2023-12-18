<script lang="ts">
	import Button from './Button.svelte';

	export let type: HTMLButtonElement['type'] = 'button';
	export let label: string = '';
	export let icon: string;
	export let isOutline: boolean = false;
	export let theme: 'primary' | 'warning' = 'primary';
</script>

<Button {type} {isOutline} {theme} on:Click>
	<article>
		<img src={icon} alt="icon" />

		<span>{label}</span>
	</article>
</Button>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	article {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
	}

	img {
		display: block;
		width: 1.2em;
		height: 1.2em;
	}
</style>
