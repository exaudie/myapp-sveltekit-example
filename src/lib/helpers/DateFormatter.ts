import { isDefine } from './DefaultValue';

export const dateyyyyCust = (value: string | Date, params?: { defaultValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ year: 'numeric' }],
		defValue: params?.defaultValue ?? ''
	});
};

export const dateddmmmmyyyyCust = (value: string | Date, params?: { defaultValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'long' }, { year: 'numeric' }],
		separator: ' ',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateddmmmyyyyCust = (value: string | Date, params?: { defaultValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'short' }, { year: 'numeric' }],
		separator: ' ',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateddmmyyyyCust = (value: string | Date, params?: { defaultValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }],
		separator: '/',
		defValue: params?.defaultValue ?? ''
	});
};

export const dateyyyymmddCust = (value: string | Date, params?: { defaultValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ year: 'numeric' }, { month: '2-digit' }, { day: '2-digit' }],
		separator: '-',
		defValue: params?.defaultValue ?? ''
	});
};

type DateParseOpts = {
	year?: 'numeric' | '2-digit';
	month?: 'numeric' | '2-digit' | 'long' | 'short';
	day?: 'numeric' | '2-digit';
};

type PropKey = { [propKey: string]: number };

const getMonthNameIdx = (
	value: string,
	params: { locales: 'in' | 'en'; formatOpts: 'long' | 'short' }
) => {
	let monthIndex = 0;

	const year = new Date().getFullYear();

	for (const key in [...Array(12).keys()]) {
		const idx = Number(key);
		const newDate = new Date(year, idx);
		const monthFormat = Intl.DateTimeFormat(params.locales, { month: params.formatOpts }).format(
			newDate
		);

		if (value == monthFormat) {
			monthIndex = idx;
			break;
		}
	}

	return monthIndex;
};

/**
 * Mendapatkan index bualan dalam tahun
 * @param value 
 * @param params 
 * @returns 
 */
const getMonthIdx = (
	value: string,
	params: { locales: 'in' | 'en'; formatOpts: 'numeric' | '2-digit' | 'long' | 'short' }
) => {
	if (params.formatOpts === '2-digit' || params.formatOpts === 'numeric') return Number(value) - 1;

	return getMonthNameIdx(value, { locales: params.locales, formatOpts: params.formatOpts });
};

/**
 * Menguraikan tanggal dari format tanggal tertentu menjadi date
 * @param value 
 * @param params 
 * @returns 
 */
export const parseToDateFrom = (
	value: string,
	params?: {
		fromFormatList: DateParseOpts[];
		fromSeparator: string;
		fromLocales: 'in' | 'en';
	}
) => {
	const tempToParse: PropKey = { day: 0, month: 0, year: 0 };
	const valSplit: string[] = value.split(params?.fromSeparator ?? ' ');

	(params?.fromFormatList ?? []).forEach((elm, idx) => {
		const keys = Object.keys(elm)[0];
		const formatOpts = Object.values(elm)[0];
		const val = valSplit[idx];

		tempToParse[keys] =
			keys === 'month'
				? getMonthIdx(val, { locales: params?.fromLocales ?? 'in', formatOpts })
				: Number(val);
	});

	return new Date(tempToParse.year, tempToParse.month, tempToParse.day);
};

export const parseToDate = (
	value: string | number,
	params?: {
		fromFormatList: DateParseOpts[];
		fromSeparator: string;
		fromLocales: 'in' | 'en';
	}
) => {
	try {
		const newDateFormat = new Date(value);

		if (newDateFormat instanceof Date && !isNaN(newDateFormat.getTime())) return newDateFormat;

		if (isDefine(params) && typeof value === 'string') return parseToDateFrom(value, params);

		return null;
	} catch (_) {
		return null;
	}
};

export const dateToFormat = (
	value: string | Date,
	params: { formatList: Intl.DateTimeFormatOptions[]; separator?: string; defValue?: string }
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

const manualFormatter = (params: {
	date: Date;
	formatList: Intl.DateTimeFormatOptions[];
	separator?: string;
	locales?: 'default' | 'in' | 'en';
}) =>
	params.formatList
		.map((e) => Intl.DateTimeFormat(params?.locales ?? 'in', e).format(params.date))
		.join(params?.separator ?? '');

export const getMonthList = (params?: {
	monthFormat?: 'long' | 'short';
	locales?: 'in' | 'en';
}) => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({
			date: new Date(year, idx),
			formatList: [{ month: params?.monthFormat ?? 'long' }],
			locales: params?.locales ?? 'in'
		})
	);
};
