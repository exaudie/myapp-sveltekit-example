import { toastNotify } from '$lib/stores/ToastNotifyStore';
import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';

export const currculumVitaeData: CurrculumVitae = {
	personalInfo: {
		photo: '',
		firstName: 'Nama',
		lastName: 'Lengkap',
		dayOfBirth: '2023-12-01',
		currentJob: 'Current Job'
	},
	contactPerson: '',
	socialMedia: '',
	verticalSpace: '',
	education: '',
	skills: ''
};

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

export const downloadPdf = async (params: { fileName: string; src: string }) => {
	if (params.src == '') return;

	const blob = await (await fetch(params.src)).blob();
	const file = new File([blob], params.fileName, { type: blob.type });
	const dataUrl = URL.createObjectURL(file);

	const link: HTMLAnchorElement = document.createElement('a');
	link.href = dataUrl;
	link.download = file.name;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(dataUrl);

	toastNotify.success({ message: 'Download cv berhasil' });
};
