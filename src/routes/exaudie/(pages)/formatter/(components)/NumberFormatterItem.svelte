<script lang="ts">
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import LabelTopLeft from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import { setThousandSeparator } from '$lib/helpers/NumberFormatter';

	let numValue: string = '';
</script>

<LabelTopLeft label="Date Input">
	<InputNumber bind:value={numValue} />
</LabelTopLeft>

<VerticalSpace height="32px" />

<GridLayoutTwoColumn>
	<LabelTopLeft label="Thousand Separator">
		<span>{setThousandSeparator(numValue, { defValue: '-' })}</span>
	</LabelTopLeft>
</GridLayoutTwoColumn>
