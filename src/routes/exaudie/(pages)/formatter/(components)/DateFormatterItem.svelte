<script lang="ts">
	import {
		dateddmmmmyyyyCust,
		dateddmmmyyyyCust,
		dateddmmyyyyCust,
		dateyyyymmddCust,
		parseToDate
	} from '$lib/helpers/DateFormatter';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import LabelTopLeft from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';

	let dateValue: string = '';

	const dateToFormat = {
		date1: '20-12-2021',
		date2: '30/12/2022',
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
		<span>{isEmptyTo(parseToDate(dateValue), { defValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmmyyyyCust">
		<span>{dateddmmmyyyyCust(dateValue, { defValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmmmyyyyCust">
		<span>{dateddmmmmyyyyCust(dateValue, { defValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateddmmyyyyCust">
		<span>{dateddmmyyyyCust(dateValue, { defValue: '-' })}</span>
	</LabelTopLeft>

	<LabelTopLeft label="dateyyyymmddCust">
		<span>{dateyyyymmddCust(dateValue, { defValue: '-' })}</span>
	</LabelTopLeft>
</GridLayoutThreeColumn>

<VerticalSpace height="48px" />
<LabelTopLeft label="Parse Date Formatter" labelColor="var(--text-primary)">
	<GridLayoutThreeColumn>
		<LabelTopLeft label={dateToFormat.date1}>
			<span>
				{parseToDate(dateToFormat.date1, {
					fromFormatList: [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }],
					fromSeparator: '-',
					fromLocales: 'in'
				})}
			</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date2}>
			<span>
				{parseToDate(dateToFormat.date2, {
					fromFormatList: [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }],
					fromSeparator: '/',
					fromLocales: 'in'
				})}
			</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date3}>
			<span>{parseToDate(dateToFormat.date3)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date4}>
			<span>{parseToDate(dateToFormat.date4)}</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date5}>
			<span>
				{parseToDate(dateToFormat.date5, {
					fromFormatList: [{ day: '2-digit' }, { month: 'long' }, { year: '2-digit' }],
					fromSeparator: ' ',
					fromLocales: 'in'
				})}
			</span>
		</LabelTopLeft>

		<LabelTopLeft label={dateToFormat.date6}>
			<span>
				{parseToDate(dateToFormat.date6, {
					fromFormatList: [{ day: '2-digit' }, { month: 'short' }, { year: '2-digit' }],
					fromSeparator: ' ',
					fromLocales: 'in'
				})}
			</span>
		</LabelTopLeft>
	</GridLayoutThreeColumn>
</LabelTopLeft>
