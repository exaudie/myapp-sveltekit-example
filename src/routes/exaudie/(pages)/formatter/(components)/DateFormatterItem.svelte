<script lang="ts">
	import {
		dateddmmmmyyyyCust,
		dateddmmmyyyyCust,
		dateddmmyyyyCust,
		dateyyyymmddCust,
		getMonthENList,
		getMonthIDList,
		parseToDate
	} from '$lib/helpers/DateFormatter';
	import LabelTopLeft from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';

	let dateValue: string = '';

	const dateToFormat = {
		date1: '13-12-2021',
		date2: '13/12/2022',
		date3: '13 December 2022',
		date4: '13 Dec 2022',
		date5: '14 Desember 2020',
		date6: '14 Des 2020'
	};
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

<VerticalSpace height="48px" />
<LabelTopLeft label="Parse Date Formatter" labelColor="var(--text-primary)">
	<GridLayoutThreeColumn>
		<LabelTopLeft label={dateToFormat.date1}>
			<span>{parseToDate(dateToFormat.date1)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date2}>
			<span>{parseToDate(dateToFormat.date2)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date3}>
			<span>{parseToDate(dateToFormat.date3)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date4}>
			<span>{parseToDate(dateToFormat.date4)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date5}>
			<span>{parseToDate(dateToFormat.date5)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date6}>
			<span>{parseToDate(dateToFormat.date6)}</span>
		</LabelTopLeft>
	</GridLayoutThreeColumn>
</LabelTopLeft>
