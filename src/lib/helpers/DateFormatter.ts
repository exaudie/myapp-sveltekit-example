export const getMonthIDList = () => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({ date: new Date(year, idx), formatList: [{ month: 'long' }] })
	);
};

export const getMonthENList = () => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) =>
		manualFormatter({ date: new Date(year, idx), formatList: [{ month: 'long' }], locales: 'en' })
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
