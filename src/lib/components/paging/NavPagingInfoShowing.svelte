<script lang="ts">
	import type NavPagingHelper from '$lib/components/paging/NavPagingHelper';
	import NavPaging from './NavPaging.svelte';

	export let navHelper: NavPagingHelper;
	export let colorActive: string = 'var(--color-primary)';
</script>

<div class="nav-paging">
	<p>
		Showing {navHelper.getStartDataPage}
		to {navHelper.getEndDataPage}
		from {navHelper.getTotalData} entries
	</p>

	<NavPaging bind:navHelper {colorActive} />
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.nav-paging {
		border: 1px solid rgb(228, 227, 227);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5em;
		color: var(--text-primary);

		p {
			width: 100%;
		}

		& :global(.pagination) {
			justify-content: end;
		}
	}
</style>
