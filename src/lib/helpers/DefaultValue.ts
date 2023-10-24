export const setValue = (
	value: string | number | null | undefined,
	params?: { defValue?: string }
): string => {
	const valNumb = Number(value);

	if (!isNaN(valNumb) && valNumb == 0) return params?.defValue ?? '';

	if ([null, undefined, '', 0].includes(value)) return params?.defValue ?? '';

	return `${value}`;
};

export const emptyTo = (value: string, params?: { defValue?: string }) => {
	if (value === '' || value === null || value === undefined) return params?.defValue ?? '';

	return value;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDefine = (value: any) => {
	return !(value === null || value === undefined);
};
