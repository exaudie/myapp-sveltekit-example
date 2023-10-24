<script lang="ts">
	import type { TabItem } from '$lib/types/TabItem';

	export let tabActive: number;
	export let tabItems: TabItem[];

	const onTabClick = (value: number) => {
		tabActive = value;
	};
</script>

<div class="tab-button">
	{#each tabItems as item, idx}
		<button
			class:item-selected={(item?.value ?? idx) == tabActive}
			on:click={() => onTabClick(item?.value ?? idx)}
		>
			{item.label}
		</button>
	{/each}
</div>

<style lang="less">
	.tab-button {
		display: flex;
		gap: 4px;

		button {
			all: unset;
			flex-grow: 1;
			text-align: center;
			padding: 12px 16px;
			color: var(--text-scondary);
			border-bottom: 1px solid rgba(128, 128, 128, 0.5);
		}

		button:hover {
			background-color: rgba(128, 128, 128, 0.1);
		}

		.item-selected {
			font-weight: 700;
			color: var(--text-primary);
			border-bottom: 2px solid rgba(0, 0, 255, 0.5);
		}
	}
</style>
