import { isDefine } from './DefaultValue';

export const dateddmmmmyyyyCust = (value: string | Date, params: { defaultValue: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'long' }, { year: 'numeric' }],
		separator: ' ',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateddmmmyyyyCust = (value: string | Date, params: { defaultValue: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'short' }, { year: 'numeric' }],
		separator: ' ',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateddmmyyyyCust = (value: string | Date, params: { defaultValue: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }],
		separator: '/',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateyyyymmddCust = (value: string | Date, params: { defaultValue: string }) => {
	return dateToFormat(value, {
		formatList: [{ year: 'numeric' }, { month: '2-digit' }, { day: '2-digit' }],
		separator: '-',
		defValue: params?.defaultValue ?? ''
	});
};

type DateParse = {
	year?: 'numeric' | '2-digit';
	month?: 'numeric' | '2-digit' | 'long' | 'short';
	day?: 'numeric' | '2-digit';
};
type PropKey = { [propKey: string]: number };

export const parseToDate = (
	value: string | number | Date,
	params?: {
		fromFormat: DateParse[];
		fromSeparator?: string;
		locales?: 'in' | 'en';
	}
) => {
	try {
		const newDateFormat = new Date(value);

		if (newDateFormat instanceof Date && !isNaN(newDateFormat.getTime())) return newDateFormat;

		const tempToParse: PropKey = { day: 0, month: 0, year: 0 };

		if (isDefine(params) && typeof value === 'string') {
			const valSplit = value.split(params?.fromSeparator ?? ' ');

			(params?.fromFormat ?? []).forEach((elm, idx) => {
				const keys = Object.keys(elm)[0];
				const format = Object.values(elm)[0];
				const val = valSplit[idx];
				tempToParse[keys] = Number(val);

				if (keys === 'month') {
					if (!['long', 'short'].includes(format)) {
						console.log('');
					}

					tempToParse[keys] = Number(val) - 1;
				}
			});

			console.log('tempToParse', tempToParse);

			return new Date(tempToParse.year, tempToParse.month, tempToParse.day);
		}

		return null;
	} catch (_) {
		return null;
	}
};

export const dateToFormat = (
	value: string | Date,
	params: { formatList: Intl.DateTimeFormatOptions[]; separator: string; defValue?: string }
) => {
	try {
		if (value === '') return params?.defValue ?? '';

		const newValue = typeof value === 'string' ? parseToDate(value) : value;

		if (newValue === null) return params?.defValue ?? '';

		return manualFormatter({
			date: newValue,
			formatList: params.formatList,
			separator: params.separator
		});
	} catch (err) {
		return `${err}`;
	}
};

export const getMonthIDList = (monthFormat?: 'long' | 'short') => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({
			date: new Date(year, idx),
			formatList: [{ month: monthFormat ?? 'long' }],
			locales: 'in'
		})
	);
};

export const getMonthENList = (monthFormat?: 'long' | 'short') => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({
			date: new Date(year, idx),
			formatList: [{ month: monthFormat ?? 'long' }],
			locales: 'en'
		})
	);
};

const manualFormatter = (params: {
	date: Date;
	formatList: Intl.DateTimeFormatOptions[];
	separator?: string;
	locales?: 'default' | 'in' | 'en';
}) =>
	params.formatList
		.map((e) => Intl.DateTimeFormat(params?.locales ?? 'in', e).format(params.date))
		.join(params?.separator ?? '');
