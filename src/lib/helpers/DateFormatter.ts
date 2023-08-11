export const getMonthList = () => {
	const year = new Date().getFullYear();
	const monthIndex = [...Array(12).keys()];

	return monthIndex.map((idx) => manualFormatter(new Date(year, idx), [{ month: 'long' }], ''));
};

const manualFormatter = (
	date: Date,
	formatList: object[],
	separetor: string,
	locales: 'default' | 'in' = 'in'
) => formatList.map((e) => Intl.DateTimeFormat(locales, e).format(date)).join(separetor);
