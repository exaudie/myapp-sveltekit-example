import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';

export const setCurriculumVitaeScheme = (params?: {
	cvData?: CurrculumVitae;
}): CurrculumVitaeScheme => ({
	personalInfo: {
		photo: { value: params?.cvData?.personalInfo?.photo ?? '' },
		firstName: { value: params?.cvData?.personalInfo?.firstName ?? '' },
		lastName: { value: params?.cvData?.personalInfo?.lastName ?? '' },
		currentOccupation: { value: params?.cvData?.personalInfo?.lastName ?? '' }
	}
});

export const downloadPdf = (params: { fileName: string; src: string }) => {
	if (params.src == '') return;

	const link: HTMLAnchorElement = document.createElement('a');
	link.href = params.src;
	link.download = params.fileName + '.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
