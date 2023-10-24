import { isEmptyTo } from './DefaultValue';

export const setThousandSeparator = (
	value: string,
	params?: { separator?: '.' | ','; defValue?: string }
) => {
	if (isEmptyTo(value) == '') return params?.defValue ?? '';

	const clearValue = removeSepaarator(value, { separator: params?.separator ?? '.' });

	const newValue = clearValue;

	return newValue;
};

export const removeSepaarator = (value: string, params?: { separator?: '.' | ',' }) => {
	return value.split(params?.separator ?? '.').join('');
};

export const switchSeparator = (value: string, separator?: { from: '.' | ','; to?: '.' | ',' }) => {
	if (isEmptyTo(value) == '') return '';
	if (separator !== undefined && separator?.from === separator?.to) return '';

	const separatorFrom = separator?.from ?? ',';
	const separatorTo = separator?.to ?? (separatorFrom == ',' ? '.' : ',');
	const comma = separatorTo === '.' ? ',' : '.';

	const splitComma = value.split(separatorFrom);
	const switchInt = splitComma[0].replaceAll(comma, separatorTo);
	const newValue = splitComma.length > 1 ? [switchInt, splitComma[1] ?? []].join(comma) : switchInt;

	return newValue;
};
