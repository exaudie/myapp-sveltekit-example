<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let replaceClick: boolean = true;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('Click');
</script>

<button class="{$$restProps.class || ''} button-clicker" on:click={onClick}>
	<div class:set-relative={replaceClick}>
		<slot />
		<div class="blocking" class:display-none={!replaceClick} />
	</div>
</button>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.button-clicker {
		all: unset;
		cursor: pointer;
	}
	.set-relative {
		position: relative;
	}
	.display-none {
		display: none;
	}
	.blocking {
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
