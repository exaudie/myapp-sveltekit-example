<script lang="ts">
	import type NavPagingHelper from '$lib/components/paging/NavPagingHelper';
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';

	export let navHelper: NavPagingHelper;
	export let colorActive: string = 'var(--color-primary)';

	const dispatch = createEventDispatcher();

	const onSelectPage = (page: number) => {
		navHelper.setCurrentPage = page;

		dispatch('SelectPage', { page: navHelper.getCurrentPage });
	};

	const onToFirst = () => {
		navHelper.setCurrentPage = navHelper.getStartNavPage;

		dispatch('ToFirst', { page: navHelper.getCurrentPage });
	};

	const onToLast = () => {
		navHelper.setCurrentPage = navHelper.getEndNavPage;

		dispatch('ToLast', { page: navHelper.getCurrentPage });
	};

	const onPrev = () => {
		navHelper.setCurrentPage = navHelper.getPrevPage;

		dispatch('Prev', { page: navHelper.getCurrentPage });
	};

	const onNext = () => {
		navHelper.setCurrentPage = navHelper.getNextPage;

		dispatch('Next', { page: navHelper.getCurrentPage });
	};
</script>

<nav class="pagination" style="--color-active:{colorActive};">
	<ShowHidden isShow={navHelper.isToEnd}>
		<button
			on:click={onToFirst}
			type="button"
			disabled={!navHelper.isToFirst}
			class="page-item sides"
		>
			&lt;&lt;
		</button>
	</ShowHidden>

	<button on:click={onPrev} type="button" disabled={!navHelper.isToFirst} class="page-item sides">
		&lt;
	</button>

	{#each navHelper.getNavItems as page}
		<ShowHidden isShow={page > 0}>
			<button
				on:click={() => onSelectPage(page)}
				type="button"
				class="page-item"
				class:active={page === navHelper.getCurrentPage}
			>
				{page}
			</button>
		</ShowHidden>

		<ShowHidden isShow={page < 0}>
			<div class="separator">...</div>
		</ShowHidden>
	{/each}

	<button on:click={onNext} type="button" disabled={!navHelper.isToLast} class="page-item sides">
		&gt;
	</button>

	<ShowHidden isShow={navHelper.isToEnd}>
		<button
			on:click={onToLast}
			type="button"
			disabled={!navHelper.isToLast}
			class="page-item sides"
		>
			&gt;&gt;
		</button>
	</ShowHidden>
</nav>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.pagination {
		width: 100%;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		gap: 0.3em;

		.page-item,
		.separator {
			background: transparent;
			color: var(--text-primary);
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2rem;
			min-width: 2rem;
			border-radius: 50%;
			font-weight: 600;
		}

		.separator {
			cursor: default;
		}

		.page-item {
			&:hover {
				text-decoration: underline;
			}

			&:focus {
				outline: 0;
			}
		}

		.active {
			background-color: var(--color-active);
			color: white;
		}

		.sides {
			box-shadow:
				transparent 0px 0px 0px 1px,
				transparent 0px 0px 0px 4px,
				rgba(0, 0, 0, 0.18) 0px 2px 4px;

			&:hover {
				text-decoration: none;
				box-shadow:
					transparent 0px 0px 0px 1px,
					transparent 0px 0px 0px 4px,
					rgba(0, 0, 0, 0.12) 0px 6px 16px;
			}
		}

		button {
			all: unset;
			cursor: pointer;

			&:active {
				color: white;
				background-color: var(--color-active);
			}

			&.sides:disabled {
				cursor: default;
				background-color: rgba(128, 128, 128, 0.2);
				color: var(--text-primary);
				box-shadow: none;
			}
		}
	}
</style>
