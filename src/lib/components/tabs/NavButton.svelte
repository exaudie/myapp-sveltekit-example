<script lang="ts">
	import type NavButtonHelper from '$lib/helpers/NavButtonHelper';

	export let navHelper: NavButtonHelper;
	export let isBold: boolean = true;
	export let fontSize: string = '16px';
	export let gap: string = '';

	const onSelect = (tabValue: number) => (navHelper.setActive = tabValue);
</script>

<nav class:bg-neutral20={gap === ''} style="--gap:{gap}; --font-size:{fontSize};">
	{#each navHelper.getItems as item}
		<button
			class:disabled={!(item?.enabled ?? true)}
			class:active={navHelper.getActive === item.value}
			class:bold={isBold}
			on:click={item.enabled ?? true ? () => onSelect(item.value) : null}
		>
			{item.label}
		</button>
	{/each}
</nav>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}

	nav {
		display: flex;
		border-radius: 8px;
		gap: var(--gap) !important;
		overflow-x: auto;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	nav::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	nav.bg-neutral20 {
		background-color: #f8f9fa;
	}

	nav button {
		all: unset;
		cursor: pointer;
		background-color: #f8f9fa;
		padding: 0.5em 1em;
		min-width: fit-content;
		width: 100%;
		border-radius: 8px;
		transition: 0.2s ease-in;

		color: var(--text-secondary);
		text-align: center;
		font-family: Nunito;
		font-size: var(--font-size) !important;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
	}

	nav button.bold {
		font-weight: 700 !important;
	}

	nav button.active {
		background-color: var(--color-primary);
		color: #fff;
	}

	nav button.disabled {
		cursor: default;
		background-color: #f8f9fa;
		color: #869cae65;
	}
</style>
