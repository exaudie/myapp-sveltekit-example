import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { eee: 'tess', ere: 'tetete' };
};

export const actions = {
	generatePdf: async () => {
		generate();

		return { success: true };
	}
};

const generate = async () => {
	console.log('generate');
};
