import type { ContentCanvas } from 'pdfmake/interfaces';

export const setHLine = (params?: { length?: number; lineColor?: string }): ContentCanvas => ({
	margin: [0, 3, 0, 3],
	canvas: [
		{
			type: 'line',
			x1: 0,
			y1: 0,
			x2: params?.length ?? 555.35,
			y2: 0,
			lineWidth: 0.5,
			lineColor: params?.lineColor ?? '#7188ad'
		}
	]
});

export const setColon = (params?: { style?: string }) => ({
	text: ':',
	width: 2,
	style: params?.style
});

export const setProgress = (
	value: number,
	params?: { foreground?: string; background?: string }
): ContentCanvas => {
	return {
		canvas: [
			{
				type: 'line',
				x1: 10,
				y1: 10,
				x2: 100,
				y2: 10,
				lineWidth: 5,
				lineColor: params?.background ?? '#ebf1fa',
				lineCap: 'round'
			},
			{
				type: 'line',
				x1: 10,
				y1: 10,
				x2: value,
				y2: 10, // percent completion
				lineWidth: 5,
				lineColor: params?.foreground ?? '#3e86fa',
				lineCap: 'round'
			}
		]
	};
};
