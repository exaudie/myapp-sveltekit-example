<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import FloatButton from '$lib/components/button/FloatButton.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import ArrowTopLine from '$lib/images/arrow_top_line.svg';
</script>

<GridLayoutThreeColumn>
	<Button>button 1</Button>
</GridLayoutThreeColumn>

<ShowHidden isShow={true}>
	<FloatButton icon={ArrowTopLine} />
</ShowHidden>

<style lang="less">
	.box100px {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		background-color: white;
	}
</style>
