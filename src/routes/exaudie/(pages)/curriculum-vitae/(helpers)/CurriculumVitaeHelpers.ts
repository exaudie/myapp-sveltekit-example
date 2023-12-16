import { toastNotify } from '$lib/stores/ToastNotifyStore';
import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';

const today = new Date().toString();

export const currculumVitaeData: CurrculumVitae = {
	personalInfo: {
		photo: 'src/assets/person_account.png',
		firstName: 'Nama',
		lastName: 'Lengkap',
		dayOfBirth: '2023-12-01',
		currentJob: 'Current Job',
		address:
			'Jl. Jend. Sudirman No.99-101, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223',
		aboutMe:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	contactPerson: { phone: '+6281234567890', email: 'exaudie@gmail.com' },
	socialMedia: [
		{ sosmedName: 'Github', sosmedLink: 'github.com/exaudie' },
		{ sosmedName: 'Facebook', sosmedLink: 'facebook.com/exaudie' },
		{ sosmedName: 'Linkedin', sosmedLink: 'linkedin.com/exaudie' }
	],
	experience: [
		{
			startDate: today,
			endDate: today,
			companyName: 'PT. Company',
			role: 'Software Developer',
			desc: 'Fullstack development internal application'
		}
	],
	education: [
		{
			startDate: today,
			endDate: today,
			campusName: 'Universitas',
			studyProgram: 'Bachelor in Computer science',
			desc: 'Visualisasi produk pada katalog pemasaran meubel berbasis augmented reality'
		}
	],
	skills: [
		{ skillName: 'Android Native Developer', skillLevel: 8 },
		{ skillName: 'Flutter Mobile', skillLevel: 8 },
		{ skillName: 'Sveltekit', skillLevel: 8 },
		{ skillName: 'Analysis', skillLevel: 8 }
	]
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
