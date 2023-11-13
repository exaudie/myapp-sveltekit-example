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

export const parseToDate = (
	value: string | number | Date,
	params?: {
		fromFormat?: Intl.DateTimeFormatOptions[];
		fromSeparator?: string;
		locales?: 'in' | 'en';
	}
) => {
	try {
		const newDateFormat = new Date(value);

		if (newDateFormat instanceof Date && !isNaN(newDateFormat.getTime())) return newDateFormat;

		return new Date(2022, 0, 12);
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
