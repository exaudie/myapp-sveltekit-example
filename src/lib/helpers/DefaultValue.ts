/* eslint-disable @typescript-eslint/no-explicit-any */

export const getIsNumber = (value: any, params?: { defValue?: string }) => {
	const clearValue = isEmptyTo(value);
	const valueNumb = Number(clearValue);

	if (isNaN(valueNumb)) return params?.defValue ?? '';

	return valueNumb;
};

export const setZeroTo = (value: any, params?: { defValue?: string }) => {
	const clearValue = isEmptyTo(value);
	const valueNumb = Number(clearValue);

	if (isNaN(valueNumb)) return params?.defValue ?? '';
	if (valueNumb === 0) return params?.defValue ?? '';

	return `${valueNumb}`;
};

export const isEmptyTo = (value: any, params?: { defValue?: string }) => {
	const newVal = typeof value === 'string' ? value.trim() : value;

	if (newVal === '' || newVal === null || newVal === undefined) return params?.defValue ?? '';

	return `${newVal}`;
};

export const isDefine = (value: any) => {
	return !(value === null || value === undefined);
};
