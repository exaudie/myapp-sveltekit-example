import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitaeType';
import { getPersent } from '$lib/helpers/CommonHelpers';
import { toastNotify } from '$lib/stores/ToastNotifyStore';
import { dateyyyymmddCust } from '$lib/helpers/DateFormatter';

const today = new Date().toString();

export const initCvData: CurrculumVitae = {
	personalInfo: {
		photo: 'src/assets/person_account.png',
		firstName: 'Nama',
		lastName: 'Lengkap',
		placeOfBirth: 'City',
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
			companyName: 'PT. Company',
			role: 'Software Developer',
			location: '',
			startDate: today,
			endDate: today,
			isWorkHere: false,
			desc: 'Fullstack development internal application'
		},
		{
			role: 'Software Developer',
			companyName: 'PT. Company',
			location: '',
			startDate: today,
			endDate: today,
			isWorkHere: false,
			desc: 'Fullstack development internal application'
		}
	],
	education: [
		{
			schoolName: 'Universitas',
			degree: 'Bachelor in Computer science',
			major: 'Teknik',
			grade: '3.35',
			startDate: today,
			graduateDate: today,
			isStudyHere: false,
			desc: 'Visualisasi produk pada katalog pemasaran meubel berbasis augmented reality'
		}
	],
	skills: [
		{ skillName: 'Android Native Developer', skillLevel: getPersent(5, { from: 10 }) },
		{ skillName: 'Flutter Mobile', skillLevel: getPersent(8, { from: 10 }) },
		{ skillName: 'Sveltekit', skillLevel: getPersent(9, { from: 10 }) },
		{ skillName: 'Analysis', skillLevel: getPersent(10, { from: 10 }) }
	]
};

export const setCurriculumVitaeScheme = (params?: {
	cvData?: CurrculumVitae;
}): CurrculumVitaeScheme => ({
	personalInfo: {
		photo: { value: params?.cvData?.personalInfo?.photo ?? '' },
		firstName: { value: params?.cvData?.personalInfo?.firstName ?? '' },
		lastName: { value: params?.cvData?.personalInfo?.lastName ?? '' },
		currentJob: { value: params?.cvData?.personalInfo?.lastName ?? '' },
		placeOfBirth: { value: dateyyyymmddCust(params?.cvData?.personalInfo?.placeOfBirth ?? '') },
		dayOfBirth: { value: params?.cvData?.personalInfo?.dayOfBirth ?? '' },
		address: { value: params?.cvData?.personalInfo?.address ?? '' },
		aboutMe: { value: params?.cvData?.personalInfo?.aboutMe ?? '' }
	},
	contactPerson: {
		phone: { value: params?.cvData?.contactPerson?.phone ?? '' },
		email: { value: params?.cvData?.contactPerson?.email ?? '' }
	},
	socialMedia: (params?.cvData?.socialMedia ?? []).map((elm) => ({
		sosmedName: { value: elm.sosmedName },
		sosmedLink: { value: elm.sosmedLink }
	})),
	experience: (params?.cvData?.experience ?? []).map((elm) => ({
		role: { value: elm.role },
		companyName: { value: elm.companyName },
		location: { value: elm.location },
		startDate: { value: dateyyyymmddCust(elm.startDate) },
		endDate: { value: dateyyyymmddCust(elm.endDate) },
		isWorkHere: { value: '', checked: elm.isWorkHere },
		desc: { value: elm.desc }
	})),
	education: (params?.cvData?.education ?? []).map((elm) => ({
		schoolName: { value: elm.schoolName },
		degree: { value: elm.degree },
		major: { value: elm.major },
		grade: { value: elm.grade },
		startDate: { value: dateyyyymmddCust(elm.startDate) },
		graduateDate: { value: dateyyyymmddCust(elm.graduateDate) },
		isStudyHere: { value: '', checked: elm.isStudyHere },
		desc: { value: elm.desc }
	})),
	skills: (params?.cvData?.skills ?? []).map((elm) => ({
		skillName: { value: elm.skillName },
		skillLevel: { value: `${elm.skillLevel}` }
	}))
});

export const downloadPdf = async (params: { fileName: string; src: string }) => {
	if (params.src == '') return;

	const link: HTMLAnchorElement = document.createElement('a');
	link.href = params.src;
	link.download = params.fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	toastNotify.success({ message: 'Download cv berhasil' });
};
