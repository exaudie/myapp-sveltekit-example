export const getPersent = (value: number, params: { from: number }) => (value / params.from) * 100;

export const scrollTopElement = (params: { elementId: string }) => {
	const elm = document.querySelector(params.elementId);

	if (!elm) return;

	elm.scroll({ top: 0, behavior: 'smooth' });
};
