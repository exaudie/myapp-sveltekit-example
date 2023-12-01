import type { ContentCanvas, ContentText } from 'pdfmake/interfaces';

export const setHLine = (): ContentCanvas => ({
	margin: [0, 3, 0, 3],
	canvas: [
		{
			type: 'line',
			x1: 0,
			y1: 0,
			x2: 555.35,
			y2: 0,
			lineWidth: 0.5,
			lineColor: '#7188ad'
		}
	]
});

export const setColon = () => ({ text: ':', width: 2 });
