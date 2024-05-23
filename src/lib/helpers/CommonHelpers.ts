export const getPersent = (value: number, prm: { from: number }) => (value / prm.from) * 100;

export const scrollTopElement = (prm: { elementId: string }) => {
	const elm = document.querySelector(prm.elementId);

	if (!elm) return;

	elm.scroll({ top: 0, behavior: 'smooth' });
};

export const lockScroll = () => {
	const x = window.scrollX;
	const y = window.scrollY;
	window.onscroll = () => window.scroll(x, y);
};

export const unLockScroll = () => (window.onscroll = null);
