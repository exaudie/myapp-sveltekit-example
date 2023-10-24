export const setValue = (
	value: string | number | null | undefined,
	params?: { defaultValue?: string }
): string => {
	const valNumb = Number(value);

	if (!isNaN(valNumb) && valNumb == 0) return params?.defaultValue ?? '';

	if ([null, undefined, '', 0].includes(value)) return params?.defaultValue ?? '';

	return `${value}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDefine = (value: any) => {
	return !(value === null || value === undefined);
};
