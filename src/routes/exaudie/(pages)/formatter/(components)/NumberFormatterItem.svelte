<script lang="ts">
	import {
		removeSeparator,
		setCust2ThousandSeparator,
		setCustThousandSeparator,
		setIntlThousandSeparator,
		switchSeparator
	} from '$lib/helpers/NumberFormatter';
	import LabelTopLeft from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';

	const initialValDot = '-13500000.25';

	let numValue: string = initialValDot;

	let numValueSprComma: string = initialValDot;
	let numValueSprDot: string = switchSeparator(initialValDot, { to: '.' });
</script>

<LabelTopLeft label="Number Input" labelAlign="center">
	<InputNumber bind:value={numValue} valueAlign="end" />
</LabelTopLeft>

<VerticalSpace height="32px" />

<GridLayoutThreeColumn>
	<LabelTopLeft label="Thousand Separator '.'">
		<span>{setIntlThousandSeparator(numValue, { defValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="setCustThousandSeparator">
		<span>{setCustThousandSeparator(numValue, { separator: ',' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="setCust2ThousandSeparator">
		<span>
			{setCust2ThousandSeparator(switchSeparator(numValue, { to: '.' }), {
				separator: '.'
			})}
		</span>
	</LabelTopLeft>

	<LabelTopLeft label="removeSepaarator '.'">
		<span>{removeSeparator(numValue)}</span>
	</LabelTopLeft>

	<LabelTopLeft label="switchSeparator to '.'">
		<span>{switchSeparator(numValue)}</span>
	</LabelTopLeft>
</GridLayoutThreeColumn>

<VerticalSpace height="48px" />

<GridLayoutTwoColumn>
	<LabelTopLeft label="With Separator Comma ',' max3">
		<InputNumber withSeparator={true} separator="," maxlength={3} bind:value={numValueSprComma} />
	</LabelTopLeft>

	<LabelTopLeft label="With Separator Comma ','">
		<InputNumber withSeparator={true} separator="," bind:value={numValueSprComma} />
	</LabelTopLeft>

	<LabelTopLeft label="With Separator Dot '.'">
		<InputNumber withSeparator={true} separator="." bind:value={numValueSprDot} />
	</LabelTopLeft>

	<LabelTopLeft label="With Separator Dot '.' Readonly">
		<InputNumber withSeparator={true} readonly={true} separator="." bind:value={numValueSprDot} />
	</LabelTopLeft>

	<LabelTopLeft label="With Separator Dot '.' Allow Negative">
		<InputNumber
			withSeparator={true}
			allowNegative={true}
			separator="."
			bind:value={numValueSprDot}
		/>
	</LabelTopLeft>
</GridLayoutTwoColumn>
