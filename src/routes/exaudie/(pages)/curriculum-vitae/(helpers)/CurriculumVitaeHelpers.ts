import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitaeType';
import { getPersent } from '$lib/helpers/CommonHelpers';
import { toastNotify } from '$lib/stores/ToastNotifyStore';
import { dateyyyymmddCust } from '$lib/helpers/DateFormatter';

export const initCvData: CurrculumVitae = {
	personalInfo: {
		photo: '',
		firstName: '',
		lastName: '',
		placeOfBirth: '',
		dayOfBirth: '',
		currentJob: '',
		address: '',
		aboutMe: ''
	},
	contactPerson: { phone: '', email: '' },
	socialMedia: [{ sosmedName: '', sosmedLink: '' }],
	experience: [
		{
			companyName: '',
			role: '',
			location: '',
			startDate: '',
			endDate: '',
			isWorkHere: false,
			desc: ''
		}
	],
	education: [
		{
			schoolName: '',
			degree: '',
			major: '',
			grade: '',
			startDate: '',
			graduateDate: '',
			isStudyHere: false,
			desc: ''
		}
	],
	skills: [{ skillName: '', skillLevel: 0 }]
};

export const setCurriculumVitaeScheme = (params?: {
	cvData?: CurrculumVitae | null;
}): CurrculumVitaeScheme => ({
	personalInfo: {
		photo: { value: params?.cvData?.personalInfo?.photo ?? '' },
		firstName: { value: params?.cvData?.personalInfo?.firstName ?? '' },
		lastName: { value: params?.cvData?.personalInfo?.lastName ?? '' },
		currentJob: { value: params?.cvData?.personalInfo?.currentJob ?? '' },
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

export const setCurriculumVitaeData = (params?: {
	cvScheme?: CurrculumVitaeScheme | null;
}): CurrculumVitae => ({
	personalInfo: {
		photo: params?.cvScheme?.personalInfo?.photo?.value ?? '',
		firstName: params?.cvScheme?.personalInfo?.firstName?.value ?? '',
		lastName: params?.cvScheme?.personalInfo?.lastName?.value ?? '',
		currentJob: params?.cvScheme?.personalInfo?.currentJob?.value ?? '',
		placeOfBirth: params?.cvScheme?.personalInfo?.placeOfBirth?.value ?? '',
		dayOfBirth: params?.cvScheme?.personalInfo?.dayOfBirth?.value ?? '',
		address: params?.cvScheme?.personalInfo?.address?.value ?? '',
		aboutMe: params?.cvScheme?.personalInfo?.aboutMe?.value ?? ''
	},
	contactPerson: {
		phone: params?.cvScheme?.contactPerson?.phone?.value ?? '',
		email: params?.cvScheme?.contactPerson?.email?.value ?? ''
	},
	socialMedia: (params?.cvScheme?.socialMedia ?? []).map((elm) => ({
		sosmedName: elm.sosmedName.value,
		sosmedLink: elm.sosmedLink.value
	})),
	experience: (params?.cvScheme?.experience ?? []).map((elm) => ({
		role: elm.role.value,
		companyName: elm.companyName.value,
		location: elm.location.value,
		startDate: elm.startDate.value,
		endDate: elm.endDate.value,
		isWorkHere: elm.isWorkHere.checked ?? false,
		desc: elm.desc.value
	})),
	education: (params?.cvScheme?.education ?? []).map((elm) => ({
		schoolName: elm.schoolName.value,
		degree: elm.degree.value,
		major: elm.major.value,
		grade: elm.grade.value,
		startDate: elm.startDate.value,
		graduateDate: elm.graduateDate.value,
		isStudyHere: elm.isStudyHere.checked ?? false,
		desc: elm.desc.value
	})),
	skills: (params?.cvScheme?.skills ?? []).map((elm) => ({
		skillName: elm.skillName.value,
		skillLevel: Number(elm.skillLevel.value)
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
