import { isDefine } from './DefaultValue';

export const dateyyyyCust = (value: string | Date, prm?: { defValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ year: 'numeric' }],
		defValue: prm?.defValue ?? ''
	});
};

export const dateddmmmmyyyyCust = (value: string | Date, prm?: { defValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'long' }, { year: 'numeric' }],
		separator: ' ',
		defValue: prm?.defValue ?? ''
	});
};

export const dateddmmmyyyyCust = (value: string | Date, prm?: { defValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: 'short' }, { year: 'numeric' }],
		separator: ' ',
		defValue: prm?.defValue ?? ''
	});
};

export const dateddmmyyyyCust = (value: string | Date, prm?: { defValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ day: '2-digit' }, { month: '2-digit' }, { year: 'numeric' }],
		separator: '/',
		defValue: prm?.defValue ?? ''
	});
};

export const dateyyyymmddCust = (value: string | Date, prm?: { defValue?: string }) => {
	return dateToFormat(value, {
		formatList: [{ year: 'numeric' }, { month: '2-digit' }, { day: '2-digit' }],
		separator: '-',
		defValue: prm?.defValue ?? ''
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
	prm: { locales: 'in' | 'en'; formatOpts: 'long' | 'short' }
) => {
	let monthIndex = 0;

	const year = new Date().getFullYear();

	for (const key in [...Array(12).keys()]) {
		const idx = Number(key);
		const newDate = new Date(year, idx);
		const monthFormat = Intl.DateTimeFormat(prm.locales, { month: prm.formatOpts }).format(newDate);

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
 * @param prm
 * @returns
 */
const getMonthIdx = (
	value: string,
	prm: { locales: 'in' | 'en'; formatOpts: 'numeric' | '2-digit' | 'long' | 'short' }
) => {
	if (prm.formatOpts === '2-digit' || prm.formatOpts === 'numeric') return Number(value) - 1;

	return getMonthNameIdx(value, { locales: prm.locales, formatOpts: prm.formatOpts });
};

/**
 * Menguraikan tanggal dari format tanggal tertentu menjadi date
 * @param value
 * @param prm
 * @returns
 */
export const parseToDateFrom = (
	value: string,
	prm?: {
		fromFormatList: DateParseOpts[];
		fromSeparator: string;
		fromLocales: 'in' | 'en';
	}
) => {
	const tempToParse: PropKey = { day: 0, month: 0, year: 0 };
	const valSplit: string[] = value.split(prm?.fromSeparator ?? ' ');

	(prm?.fromFormatList ?? []).forEach((elm, idx) => {
		const keys = Object.keys(elm)[0];
		const formatOpts = Object.values(elm)[0];
		const val = valSplit[idx];

		tempToParse[keys] =
			keys === 'month'
				? getMonthIdx(val, { locales: prm?.fromLocales ?? 'in', formatOpts })
				: Number(val);
	});

	return new Date(tempToParse.year, tempToParse.month, tempToParse.day);
};

export const parseToDate = (
	value: string | number,
	prm?: {
		fromFormatList: DateParseOpts[];
		fromSeparator: string;
		fromLocales: 'in' | 'en';
	}
) => {
	try {
		const newDateFormat = new Date(value);

		if (newDateFormat instanceof Date && !isNaN(newDateFormat.getTime())) return newDateFormat;

		if (isDefine(prm) && typeof value === 'string') return parseToDateFrom(value, prm);

		return null;
	} catch (_) {
		return null;
	}
};

export const dateToFormat = (
	value: string | Date,
	prm: { formatList: Intl.DateTimeFormatOptions[]; separator?: string; defValue?: string }
) => {
	try {
		if (value === '') return prm?.defValue ?? '';

		const newValue = typeof value === 'string' ? parseToDate(value) : value;

		if (newValue === null) return prm?.defValue ?? '';

		return manualFormatter({
			date: newValue,
			formatList: prm.formatList,
			separator: prm.separator
		});
	} catch (err) {
		return `${err}`;
	}
};

const manualFormatter = (prm: {
	date: Date;
	formatList: Intl.DateTimeFormatOptions[];
	separator?: string;
	locales?: 'default' | 'in' | 'en';
}) =>
	prm.formatList
		.map((e) => Intl.DateTimeFormat(prm?.locales ?? 'in', e).format(prm.date))
		.join(prm?.separator ?? '');

export const getMonthList = (prm?: { monthFormat?: 'long' | 'short'; locales?: 'in' | 'en' }) => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({
			date: new Date(year, idx),
			formatList: [{ month: prm?.monthFormat ?? 'long' }],
			locales: prm?.locales ?? 'in'
		})
	);
};
