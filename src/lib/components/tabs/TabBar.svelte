<script lang="ts">
	import type { TabItem } from '$lib/types/TabItemType';

	export let tabActive: number;
	export let tabItems: TabItem[];

	const onTabClick = (value: number) => {
		tabActive = value;
	};
</script>

<div class="tab-nav-wrap">
	<div class="tab-button">
		{#each tabItems as item, idx}
			<button
				class:disabled={!(item?.enabled ?? true)}
				class:item-selected={(item?.value ?? idx) == tabActive}
				on:click={() => (item?.enabled ?? true ? onTabClick(item?.value ?? idx) : null)}
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
			flex-grow: 1;
			text-align: center;
			padding: 12px 16px;
			color: var(--text-scondary);
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
			color: rgba(128, 128, 128, 0.3);
		}
	}

	.tab-page {
		padding: 1em;
		background-color: white;
		border-radius: 4px;
		overflow-y: auto;
	}
</style>
