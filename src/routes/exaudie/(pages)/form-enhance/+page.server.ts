import type { PageServerLoad } from './$types';
import type { DataType, FormSchemeType, ResponseDataType } from './(helpers)/FormHelpers';

export const load: PageServerLoad = async ({ cookies, params }) => {
	const dataLoad: ResponseDataType = {
		success: true,
		status_code: 200,
		data: {
			first_name: '',
			last_name: '',
			day_of_birth: '',
			age: '',
			about_me: '',
			address: '',
			education: ''
		}
	};

	return { dataLoad };
};

export const actions = {
	saveData: async ({ cookies, request }) => {
		const data = await request.formData();
		const payload = await generatePayload(data);

		await new Promise((e) => setTimeout(e, 3000));

		const actionResponse: ResponseDataType = {
			success: false,
			status_code: 200,
			data: payload,
			message: 'Save data success'
		};

		return { actionResponse };
	}
};

const generatePayload = async (data: FormData): Promise<DataType> => {
	const formScheme = (data.get('formShceme') ?? '') as string;
	const formJson: FormSchemeType = await JSON.parse(atob(formScheme));

	return {
		first_name: formJson.firstName.value,
		last_name: formJson.lastName.value,
		day_of_birth: formJson.dayOfBirth.value,
		age: formJson.age.value,
		about_me: formJson.aboutMe.value,
		address: formJson.address.value,
		education: formJson.education.value
	};
};
