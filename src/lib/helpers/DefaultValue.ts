/* eslint-disable @typescript-eslint/no-explicit-any */

export const setValue = (value: any, params?: { defValue?: string }): string => {
	const valNumb = Number(value);

	if (!isNaN(valNumb) && valNumb === 0) return params?.defValue ?? '';

	if ([null, undefined, '', 0].includes(value)) return params?.defValue ?? '';

	return `${value}`;
};

export const isEmptyTo = (value: any, params?: { defValue?: string }) => {
	if (value === '' || value === null || value === undefined) return params?.defValue ?? '';

	return value;
};

export const isDefine = (value: any) => {
	return !(value === null || value === undefined);
};
