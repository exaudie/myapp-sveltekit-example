import { isEmptyTo } from './DefaultValue';
export type SeparatorValue = ',' | '.';

export const setIntlThousandSeparator = (
	value: string,
	prm?: { separator?: SeparatorValue; defValue?: string; toFixed?: number }
) => {
	if (isEmptyTo(value) === '') return prm?.defValue ?? '';

	const numbValue = Number(value);

	if (isNaN(numbValue)) return prm?.defValue ?? '';

	const locales = (prm?.separator ?? '.') === '.' ? 'in' : 'en';
	const numbFormat = Intl.NumberFormat(locales, {
		maximumFractionDigits: prm?.toFixed ?? 3
	});

	return numbFormat.format(numbValue);
};

export const setCustThousandSeparator = (
	value: string,
	prm?: { separator?: SeparatorValue; defValue?: string }
) => {
	if (isEmptyTo(value) === '') return prm?.defValue ?? '';

	const separatorTo = prm?.separator ?? '.';
	const comma = separatorTo === '.' ? ',' : '.';

	const newValue = value.toString().split(comma);
	newValue[0] = newValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, separatorTo);

	return newValue.join(comma);
};

export const setCust2ThousandSeparator = (
	value: string,
	prm?: { separator?: SeparatorValue; defValue?: string }
) => {
	if (isEmptyTo(value) === '') return prm?.defValue ?? '';

	const separatorTo = prm?.separator ?? '.';
	const comma = separatorTo === '.' ? ',' : '.';

	const newValue = value.toString().split(comma);
	newValue[0] = newValue[0].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separatorTo);

	return newValue.join(comma);
};

export const removeSeparator = (value: string, prm?: { separator?: SeparatorValue }) => {
	return value.split(prm?.separator ?? '.').join('');
};

export const switchSeparator = (value: string, prm?: { to?: SeparatorValue }) => {
	if (isEmptyTo(value) === '') return '';

	const newSeparator: string = prm?.to ?? '.';
	const newComma: string = newSeparator === '.' ? ',' : '.';
	const oldSeparator: string = newComma;
	const oldComma: string = newSeparator;

	const newPattern = `^[-\\+]?(([1-9]{1}[\\d]{0,2}(${newSeparator}\\d{3})*)|\\d+)[${newComma}]?(\\d*)?$`;
	const regVNew: RegExp = new RegExp(newPattern);
	const isNew: boolean = regVNew.test(value);

	if (isNew) return value;

	const splitComma = value.split(oldComma);
	const switchInt = splitComma[0].replaceAll(oldSeparator, newSeparator);
	const newValue = splitComma.length > 1 ? [switchInt, splitComma[1]].join(newComma) : switchInt;

	return newValue;
};
