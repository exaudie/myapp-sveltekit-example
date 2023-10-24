<script lang="ts">
	import LabelTopLeft from '$lib/components/LabelTopLeft.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import { emptyTo } from '$lib/helpers/DefaultValue';

	let numValue: string = '';
</script>

<LabelTopLeft label="Date Input">
	<InputNumber bind:value={numValue} />
</LabelTopLeft>

<VerticalSpace height="32px" />

<GridLayoutTwoColumn>
	<LabelTopLeft label="Thousand Separator">
		<span>{emptyTo(numValue, { defValue: '-' })}</span>
	</LabelTopLeft>
</GridLayoutTwoColumn>
