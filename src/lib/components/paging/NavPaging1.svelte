<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';

	export let dataList: number[] = [];
	export let lengthNavigate: number = 5;
	export let itemsPerPage: number = 5;

	let pagingNav: number[] = [];

	const startPage: number = 1;
	const endPage: number = Math.ceil(dataList.length / itemsPerPage);
	const tempLength: number = lengthNavigate > endPage ? endPage : lengthNavigate;
	const navLength: number = tempLength % 2 === 0 ? tempLength - 1 : tempLength;
	const medianPage: number = (navLength + 1) / 2;
	const navExpanded: number = medianPage - startPage;

	const generateNav = (prm: { page: number }) => {
		const page: number = prm.page;

		let navList: number[] = [];

		let startNavCenter: number = currentPage - navExpanded;
		let endNavCenter: number = currentPage + navExpanded;

		if (page < medianPage) {
			startNavCenter = startPage;
			endNavCenter = startNavCenter + (navLength - 1);
		}

		if (page > endPage - medianPage) {
			endNavCenter = endPage;
			startNavCenter = endNavCenter - (navLength - 1);
		}

		for (let i = startNavCenter; i <= endNavCenter; i++) {
			let item: number = i;

			if (navLength > 3 && i === startNavCenter && i !== startPage) item = -1;
			if (navLength > 3 && i === endNavCenter && i !== endPage) item = -1;

			navList = [...navList, ...[item]];
		}

		return navList;
	};

	const onSelectPage = (page: number) => (currentPage = page);
	const onStart = () => (currentPage = startPage);
	const onEnd = () => (currentPage = endPage);

	const onPrev = () => {
		if (isToFirst) currentPage -= 1;
	};

	const onNext = () => {
		if (isToLast) currentPage += 1;
	};

	$: currentPage = startPage;
	$: isToFirst = currentPage > 1;
	$: isToLast = currentPage < endPage;
	$: pagingNav = generateNav({ page: currentPage });
</script>

<div class="pagination">
	<div class="paginationWrapper">
		<button on:click={onStart} type="button" disabled={!isToFirst} class="pageItem sides">
			&lt;&lt;
		</button>
		<button on:click={onPrev} type="button" disabled={!isToFirst} class="pageItem sides">
			&lt;
		</button>

		{#each pagingNav as page}
			<ShowHidden isShow={page > 0}>
				<button
					on:click={() => onSelectPage(page)}
					type="button"
					class="pageItem"
					class:active={page === currentPage}
				>
					{page}
				</button>
			</ShowHidden>

			<ShowHidden isShow={page < 0}>
				<div class="separator">...</div>
			</ShowHidden>
		{/each}

		<button on:click={onNext} type="button" disabled={!isToLast} class="pageItem sides">
			&gt;
		</button>
		<button on:click={onEnd} type="button" disabled={!isToLast} class="pageItem sides">
			&gt;&gt;
		</button>
	</div>
</div>

<style lang="less">
	.paginationWrapper {
		padding: 2rem 0;
		display: flex;
		justify-content: center;

		button {
			cursor: pointer;
		}

		button:disabled {
			background-color: gray;
		}
	}

	.separator {
		width: 1rem;
		margin: 0 0.25rem;
		font-weight: 600;
	}

	.pageItem {
		background: transparent;
		border: none;
		height: 2rem;
		width: 2rem;
		margin: 0 0.25rem;
		border-radius: 50%;
		font-weight: 600;
		color: var(--color-primary);

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
</style>
