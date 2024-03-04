export const getPersent = (value: number, prm: { from: number }) => (value / prm.from) * 100;

export const scrollTopElement = (prm: { elementId: string }) => {
	const elm = document.querySelector(prm.elementId);

	if (!elm) return;

	elm.scroll({ top: 0, behavior: 'smooth' });
};
