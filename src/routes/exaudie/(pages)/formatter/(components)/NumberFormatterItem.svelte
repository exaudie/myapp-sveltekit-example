<script lang="ts">
	import {
		removeSepaarator,
		setThousandSeparator,
		switchSeparator
	} from '$lib/helpers/NumberFormatter';
	import LabelTopLeft from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';

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

	<LabelTopLeft label="removeSepaarator">
		<span>{removeSepaarator(numValue)}</span>
	</LabelTopLeft>

	<LabelTopLeft label="switchSeparator">
		<span>{switchSeparator(numValue)}</span>
	</LabelTopLeft>
</GridLayoutTwoColumn>
