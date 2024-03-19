<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import FloatButton from '$lib/components/button/FloatButton.svelte';
	import GridLayoutThreeColumn from '$lib/components/layout-style/GridLayoutThreeColumn.svelte';
	import ArrowTopLine from '$lib/images/arrow_top_line.svg';
</script>

<GridLayoutThreeColumn>
	<Button>button 1</Button>
</GridLayoutThreeColumn>

<ShowHidden isShow={true}>
	<FloatButton icon={ArrowTopLine} />
</ShowHidden>
