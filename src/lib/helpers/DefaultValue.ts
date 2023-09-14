export const setValue = (value: string | number | null | undefined, defaultValue = ''): string => {
	const valNumb = Number(value);

	if (!isNaN(valNumb) && valNumb == 0) return defaultValue;

	if ([null, undefined, '', 0].includes(value)) return defaultValue;

	return `${value}`;
};
