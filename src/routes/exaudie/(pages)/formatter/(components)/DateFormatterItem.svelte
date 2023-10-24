<script lang="ts">
	import {
		dateddmmmmyyyyCust,
		dateddmmmyyyyCust,
		dateddmmyyyyCust,
		dateyyyymmddCust,
		parseToDate
	} from '$lib/helpers/DateFormatter';
	import LabelTopLeft from '$lib/components/LabelTopLeft.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';

	let dateValue: string = '';
</script>

<LabelTopLeft label="Date Input">
	<InputDate bind:value={dateValue} />
</LabelTopLeft>

<VerticalSpace height="32px" />

<GridLayoutThreeColumn>
	<LabelTopLeft label="parseToDate">
		<span>{parseToDate(dateValue)}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmmyyyyCust">
		<span>{dateddmmmyyyyCust(dateValue, { defaultValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmmmyyyyCust">
		<span>{dateddmmmmyyyyCust(dateValue, { defaultValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmyyyyCust">
		<span>{dateddmmyyyyCust(dateValue, { defaultValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateyyyymmddCust">
		<span>{dateyyyymmddCust(dateValue, { defaultValue: '-' })}</span>
	</LabelTopLeft>
</GridLayoutThreeColumn>
