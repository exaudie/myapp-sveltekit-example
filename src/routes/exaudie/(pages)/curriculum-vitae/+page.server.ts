import type { PageServerLoad } from './$types';
import { genCvPdf } from './(helpers)/GrenerateCvPdf';

export const load: PageServerLoad = async () => {
	return;
};

export const actions = {
	generatePdf: async ({ request }) => {
		const data = await request.formData();
		const cvData = atob((data.get('cvData') ?? '') as string);

		const genCv = await genCvPdf(cvData);

		return { success: true, data: { genCv } };
	}
};
