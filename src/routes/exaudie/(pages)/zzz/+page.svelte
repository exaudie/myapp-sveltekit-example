<script lang="ts">
	import { parseToDate } from '$lib/helpers/DateFormatter';
	import NominalExpand from '$lib/helpers/NominalExpand';
	import moment from 'moment';

	const initValue: number = 123444555.79;

	const isoToDateUTC = (p: { isoDate: string }) => {
		try {
			const sourceDate = new Date(p.isoDate);
			return new Date(sourceDate.toLocaleString('en-US', { timeZone: 'UTC' }));
		} catch (err) {
			return null;
		}
	};

	const source = '2024-07-18T00:46:08.327Z';
	const sourceDate = new Date(source);
	const dateUtc = new Date(sourceDate.toLocaleString('en-US', { timeZone: 'UTC' }));
	const opt: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
		hourCycle: 'h24',
		hour12: true
	};
	const newFormat = new Intl.DateTimeFormat('default', opt).format(dateUtc);
</script>

<p>Nilai awal : {initValue}</p>
<p>toSparator() : {new NominalExpand(`${initValue}`).addSeparator().value}</p>

<p>source: {source}</p>
<p>sourceDate: {sourceDate}</p>
<p>dateUtc: {dateUtc}</p>
<p>newFormat: {newFormat}</p>
<p>parseToDate: {parseToDate(source)}</p>
<p>isoToDateUTC: {isoToDateUTC({ isoDate: '' })}</p>
<p>moment: {moment(source).format('LLLL')}</p>
