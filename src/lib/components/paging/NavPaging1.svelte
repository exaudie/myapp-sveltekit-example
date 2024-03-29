<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';

	export let currentPage: number = 1;
	export let dataList: number[] = [];
	export let lengthNavigate: number = 5;
	export let itemsPerPage: number = 5;
	export let totalPage: number = 1;

	let navList: number[] = [];

	const startPage: number = 1;
	const dataListPages = Math.ceil(dataList.length / itemsPerPage);
	const endPage: number = dataList.length > 0 ? dataListPages : totalPage;
	const fixNavLength: number = lengthNavigate > endPage ? endPage : lengthNavigate;
	const navLength: number = fixNavLength % 2 === 0 ? fixNavLength - 1 : fixNavLength;
	const isWithDot = navLength > 3;
	const navMedian: number = (navLength + 1) / 2;
	const navExpanded: number = navMedian - startPage;

	const generateNav = (prm: { page: number }) => {
		const page: number = prm.page;

		let navList: number[] = [];

		let startNavCenter: number = currentPage - navExpanded;
		let endNavCenter: number = currentPage + navExpanded;

		if (page < navMedian) {
			startNavCenter = startPage;
			endNavCenter = startNavCenter + (navLength - 1);
		}

		if (page > endPage - navMedian) {
			endNavCenter = endPage;
			startNavCenter = endNavCenter - (navLength - 1);
		}

		for (let i = startNavCenter; i <= endNavCenter; i++) {
			let item: number = i;

			if (isWithDot && i === startNavCenter && i !== startPage) item = -1;
			if (isWithDot && i === endNavCenter && i !== endPage) item = -1;

			navList = [...navList, ...[item]];
		}

		return navList;
	};

	const onSelectPage = (page: number) => (currentPage = page);
	const onToFirst = () => (currentPage = startPage);
	const onToLast = () => (currentPage = endPage);

	const onPrev = () => {
		if (isToFirst) currentPage -= 1;
	};

	const onNext = () => {
		if (isToLast) currentPage += 1;
	};

	$: isToFirst = currentPage > 1;
	$: isToLast = currentPage < endPage;
	$: navList = generateNav({ page: currentPage });
</script>

<nav class="pagination">
	<button on:click={onToFirst} type="button" disabled={!isToFirst} class="page-item sides">
		&lt;&lt;
	</button>
	<button on:click={onPrev} type="button" disabled={!isToFirst} class="page-item sides">
		&lt;
	</button>

	{#each navList as page}
		<ShowHidden isShow={page > 0}>
			<button
				on:click={() => onSelectPage(page)}
				type="button"
				class="page-item"
				class:active={page === currentPage}
			>
				{page}
			</button>
		</ShowHidden>

		<ShowHidden isShow={page < 0}>
			<div class="separator">...</div>
		</ShowHidden>
	{/each}

	<button on:click={onNext} type="button" disabled={!isToLast} class="page-item sides">
		&gt;
	</button>
	<button on:click={onToLast} type="button" disabled={!isToLast} class="page-item sides">
		&gt;&gt;
	</button>
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
			background-color: var(--color-primary);
			color: #fff;
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

			&.sides:disabled {
				cursor: default;
				background-color: rgba(128, 128, 128, 0.2);
				box-shadow: none;
			}
		}
	}
</style>
