/* eslint-disable @typescript-eslint/no-explicit-any */

export const getIsNumber = (value: any, prm?: { defValue?: string }) => {
	const clearValue = isEmptyTo(value);
	const valueNumb = Number(clearValue);

	if (isNaN(valueNumb)) return prm?.defValue ?? '';

	return valueNumb;
};

export const setZeroTo = (value: any, prm?: { defValue?: string }) => {
	const clearValue = isEmptyTo(value);
	const valueNumb = Number(clearValue);

	if (isNaN(valueNumb)) return prm?.defValue ?? '';
	if (valueNumb === 0) return prm?.defValue ?? '';

	return `${valueNumb}`;
};

export const isEmptyTo = (value: any, prm?: { defValue?: string }) => {
	const newVal = typeof value === 'string' ? value.trim() : value;

	if (newVal === '' || newVal === null || newVal === undefined) return prm?.defValue ?? '';

	return `${newVal}`;
};

export const isDefine = (value: any) => {
	return !(value === null || value === undefined);
};
