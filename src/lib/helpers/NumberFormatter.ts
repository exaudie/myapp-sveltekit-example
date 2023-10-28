import { isEmptyTo } from './DefaultValue';

export const setIntlThousandSeparator = (
	value: string,
	params?: { separator?: '.' | ','; defValue?: string; toFixed?: number }
) => {
	if (isEmptyTo(value) == '') return params?.defValue ?? '';

	const numbValue = Number(value);

	if (isNaN(numbValue)) return params?.defValue ?? '';

	const locales = (params?.separator ?? '.') == '.' ? 'in' : 'en';
	const numbFormat = Intl.NumberFormat(locales, {
		maximumFractionDigits: params?.toFixed ?? 3
	});

	return numbFormat.format(numbValue);
};

export const setCustThousandSeparator = (
	value: string,
	params?: { separator?: '.' | ','; defValue?: string }
) => {
	if (isEmptyTo(value) == '') return params?.defValue ?? '';

	const separatorTo = params?.separator ?? '.';
	const comma = separatorTo === '.' ? ',' : '.';

	const newValue = value.toString().split(comma);
	newValue[0] = newValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, separatorTo);

	return newValue.join(comma);
};

export const setCust2ThousandSeparator = (
	value: string,
	params?: { separator?: '.' | ','; defValue?: string }
) => {
	if (isEmptyTo(value) == '') return params?.defValue ?? '';

	const separatorTo = params?.separator ?? '.';
	const comma = separatorTo === '.' ? ',' : '.';

	const newValue = value.toString().split(comma);
	newValue[0] = newValue[0].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separatorTo);

	return newValue.join(comma);
};

export const removeSeparator = (value: string, params?: { separator?: '.' | ',' }) => {
	return value.split(params?.separator ?? '.').join('');
};

export const switchSeparator = (value: string, separator?: { to?: '.' | ',' }) => {
	if (isEmptyTo(value) == '') return '';

	const separatorTo = separator?.to ?? '.';
	const comma = separatorTo === '.' ? ',' : '.';

	const splitComma = value.split(separatorTo);
	const switchInt = splitComma[0].replaceAll(comma, separatorTo);
	const newValue = splitComma.length > 1 ? [switchInt, splitComma[1]].join(comma) : switchInt;

	return newValue;
};
