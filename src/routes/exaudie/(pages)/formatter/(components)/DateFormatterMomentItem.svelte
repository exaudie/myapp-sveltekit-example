<script lang="ts">
	import InputText from '$lib/components/input/InputText.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutThreeColumn from '$lib/components/layout-style/GridLayoutThreeColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import { getDateISO, parseToDate } from '$lib/helpers/DateFormaterMoment';

	const toDay = new Date();

	let dateStringValue: string = getDateISO(toDay);
</script>

<LabelTop label="Date Input String">
	<InputText bind:value={dateStringValue} placeholder="Enter a date string" />
</LabelTop>

<VerticalSpace height="32px" />

<GridLayoutThreeColumn>
	<LabelTop label="toDay">
		<p>{toDay}</p>
	</LabelTop>

	<LabelTop label="Date from parseToDate">
		<p>{parseToDate(dateStringValue)}</p>
	</LabelTop>

	<LabelTop label="Date UTC Iso">
		<p>{getDateISO(new Date(toDay.toLocaleString('en-US', { timeZone: 'UTC' })))}</p>
	</LabelTop>

	<LabelTop label="Date parseToDate">
		<p>{''}</p>
	</LabelTop>
</GridLayoutThreeColumn>
