export const setValue = (value: string | number | null | undefined, defaultValue = ''): string => {
	if (value == null || value == undefined || value == '' || value == 0) return defaultValue;

	return `${value}`;
};
