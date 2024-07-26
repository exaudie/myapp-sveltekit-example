export const parseToDate = (value?: string, prm?: { defValue?: string }) => {
	try {
		return dateParse(value);
	} catch (_) {
		return prm?.defValue ?? '';
	}
};

const dateParse = (value?: string) => {
	try {
		const dateValue = new Date(value ?? '');
		const dateUTC = new Date(dateValue.toLocaleString('en-US', { timeZone: 'UTC' }));

		if (isNaN(dateUTC.getTime())) throw new Error(`${dateUTC}`);

		return dateUTC;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}

		throw new Error(`${error}`);
	}
};

export const getDateISO = (date: Date) => {
	const dateUTC = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));

	const dff = date.getTime() - dateUTC.getTime();

	return new Date(date.getTime() + dff).toISOString();
};
