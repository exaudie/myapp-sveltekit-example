<script lang="ts">
	import { goto } from '$app/navigation';
	import { setValue } from '$lib/helpers/DefaultValue';
	import ArrowLeft from '$lib/images/arrow-left.svg';
	import Clicker from './Clicker.svelte';

	export let label: String = '';
	export let linkBack = '';

	const toBack = () => {
		if (setValue(linkBack) == '') return;

		goto(linkBack);
	};
</script>

<nav>
	<Clicker on:onClick={toBack} class="clicker">
		<img src={ArrowLeft} alt="icon" />
	</Clicker>

	<span class="font16px-bold">{label}</span>
</nav>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	nav {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	nav img {
		display: block;
		width: 36px;
		height: 36px;
	}

	nav span {
		flex-grow: 1;
	}

	nav .font16px-bold {
		font-size: 18px;
		font-weight: 700;
	}

	nav :global(.clicker:active) {
		background-color: grey;
		border-radius: 4px;
	}
</style>
