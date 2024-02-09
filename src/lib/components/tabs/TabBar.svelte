<script lang="ts">
	import type TabBarHelper from '$lib/helpers/TabBarHelper';
	import { createEventDispatcher } from 'svelte';

	export let navHelper: TabBarHelper;
	export let isAutoNav: boolean = true;

	const dispatch = createEventDispatcher();

	const onTabClick = (value: number) => {
		dispatch('TabClick', { value });

		if (isAutoNav) navHelper.setActive = value;
	};
</script>

<div class="tab-nav-wrap">
	<div class="tab-button">
		{#each navHelper.getItems as item}
			{@const isEnabled = item?.enabled ?? true}
			<button
				class:disabled={!isEnabled}
				class:item-selected={item.value == navHelper.getActive}
				on:click={() => (isEnabled ? onTabClick(item.value) : null)}
			>
				{item.label}
			</button>
		{/each}
	</div>

	<div class="tab-page">
		<slot />
	</div>
</div>

<style lang="less">
	.tab-nav-wrap {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 1em;
	}

	.tab-button {
		display: flex;
		gap: 4px;

		button {
			all: unset;
			cursor: pointer;
			flex-grow: 1;
			text-align: center;
			padding: 12px 16px;
			color: var(--text-secondary);
			border-bottom: 1px solid rgba(128, 128, 128, 0.5);
		}

		button:hover {
			background-color: rgba(128, 128, 128, 0.05);
		}

		.item-selected {
			font-weight: 700;
			color: var(--text-primary);
			border-bottom: 2px solid rgba(0, 0, 255, 0.5);
		}

		.disabled {
			cursor: default;
			color: rgba(128, 128, 128, 0.3) !important;
		}
	}

	.tab-page {
		padding: 1em;
		background-color: white;
		border-radius: 4px;
		overflow-y: auto;
	}
</style>
