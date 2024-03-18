<script lang="ts">
	import type NavButtonHelper from '$lib/helpers/NavButtonHelper';
	import { createEventDispatcher } from 'svelte';

	export let navHelper: NavButtonHelper;
	export let isAutoNav: boolean = true;
	export let isBold: boolean = true;
	export let isFitLabel: boolean = false;
	export let fontSize: string | '16px' = '16px';
	export let paddingBtn: string | '8px 16px' = '0.5em 1em';
	export let colorBtn: string | '#0d6efd' | '#dc3545' = 'var(--color-primary)';
	export let gap: string | '16px' = '';

	const dispatch = createEventDispatcher();

	const onNavClick = (value: number) => {
		dispatch('NavClick', { value });

		if (isAutoNav) navHelper.setActive = value;
	};
</script>

<nav
	class:bg-neutral20={gap === ''}
	style="--gap:{gap}; 
				--font-size:{fontSize};
				--padding-btn:{paddingBtn};
				--color-btn:{colorBtn};
				--width-btn:{isFitLabel ? 'fit-content' : '100%'};"
>
	{#each navHelper.getItems as item}
		{@const isEnabled = item?.enabled ?? true}
		<button
			class:disabled={!isEnabled}
			class:active={item.value === navHelper.getActive}
			class:bold={isBold}
			on:click={isEnabled ? () => onNavClick(item.value) : null}
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
		padding: var(--padding-btn) !important;
		min-width: fit-content;
		width: var(--width-btn);
		border-radius: 8px;
		transition: 0.2s ease-in;

		color: var(--text-secondary);
		text-align: center;
		font-size: var(--font-size) !important;
		font-weight: 400;
		line-height: 24px;
	}

	nav button.bold {
		font-weight: 700 !important;
	}

	nav button.active {
		background-color: var(--color-btn);
		color: #fff;
	}

	nav button.disabled {
		cursor: default;
		background-color: #f8f9fa;
		color: #869cae53;
	}
</style>
