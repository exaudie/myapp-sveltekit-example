import type { CurrculumVitae, CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';

export const setCurriculumVitaeScheme = (params?: {
	dataCv?: CurrculumVitae;
}): CurrculumVitaeScheme => ({
	personalInfo: {
		photo: { value: params?.dataCv?.personalInfo.photo ?? '' },
		firstName: { value: params?.dataCv?.personalInfo.firstName ?? '' },
		lastName: { value: params?.dataCv?.personalInfo.lastName ?? '' },
		currentOccupation: { value: params?.dataCv?.personalInfo.lastName ?? '' }
	}
});
