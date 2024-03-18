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
	const fixNavLength1: number = lengthNavigate > endPage ? endPage : lengthNavigate;
	const fixNavLength2: number = fixNavLength1 % 2 === 0 ? fixNavLength1 - 1 : fixNavLength1;
	const isWithDot = fixNavLength2 > 5;
	const navLength: number = isWithDot ? fixNavLength2 - 2 : fixNavLength2;
	const navMedian: number = (navLength + 1) / 2;
	const navExpanded: number = navMedian - startPage;

	const generateNav = (prm: { page: number }) => {
		const page: number = prm.page;

		let navList: number[] = isWithDot ? [startPage] : [];

		let startNavCenter: number = currentPage - navExpanded;
		let endNavCenter: number = currentPage + navExpanded;

		if (page <= navMedian) {
			startNavCenter = isWithDot ? startPage + 1 : startPage;
			endNavCenter = startNavCenter + (navLength - 1);
		}

		if (page > endPage - navMedian) {
			endNavCenter = isWithDot ? endPage - 1 : endPage;
			startNavCenter = endNavCenter - (navLength - 1);
		}

		for (let i = startNavCenter; i <= endNavCenter; i++) {
			let item: number = i;

			if (isWithDot && i === startNavCenter && i !== startPage + 1) item = -1;
			if (isWithDot && i === endNavCenter && i !== endPage - 1) item = -1;

			navList = [...navList, ...[item]];
		}

		if (isWithDot) navList = [...navList, ...[endPage]];

		return navList;
	};

	const onSelectPage = (page: number) => (currentPage = page);

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
