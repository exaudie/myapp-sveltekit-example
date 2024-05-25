import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
import { z, type ZodFormattedError } from 'zod';
import { isDefine, isEmptyTo } from '$lib/helpers/DefaultValue';
import { zReuiredField } from '$lib/helpers/InputValidation';
import moment from 'moment';

export const educationList: string[] = [
	'TK',
	'SD',
	'SMP',
	'SMA',
	'D1',
	'D2',
	'D3',
	'D4',
	'S1',
	'S2',
	'S3'
];

export type ResponseDataType = {
	success: boolean;
	status_code: number;
	data?: DataType;
	message?: string;
};

export type DataType = {
	first_name?: string;
	last_name?: string;
	day_of_birth?: string;
	age?: string;
	about_me?: string;
	address?: string;
	education?: string;
};

export type FormSchemeType = {
	firstName: InputFieldScheme;
	lastName: InputFieldScheme;
	dayOfBirth: InputFieldScheme;
	age: InputFieldScheme;
	aboutMe: InputFieldScheme;
	address: InputFieldScheme;
	education: InputFieldScheme;
};

export const zDayOfBirth = z.object({
	value: z.string().superRefine((val, ctx) => {
		if (val === '') {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Data is required'
			});
		}

		const dayOfBirth = moment(val);
		const toDay = moment(Date.now());

		const diff = toDay.diff(dayOfBirth, 'days', true);

		if (diff < 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `You'r not alive yet`
			});
		}
	})
});

export const zLimitChar = (p?: { required?: boolean; min?: number; max?: number }) =>
	z.object({
		value: z.string().superRefine((val, ctx) => {
			const min = p?.min ?? 0;
			const max = p?.max ?? 0;

			if ((p?.required ?? false) && val === '') {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `Data is required`
				});
			}

			if (((val !== '' && min > 0) || min === 1) && val.length < min) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `Min text of ${min} char`
				});
			}

			if (max !== 0 && val.length > max) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `Max text of ${max} char`
				});
			}
		})
	});

export const setFormScheme = (p?: {
	data?: DataType;
	form?: FormSchemeType;
	err?: ZodFormattedError<FormSchemeType>;
}): FormSchemeType => ({
	firstName: {
		value: p?.data?.first_name ?? isEmptyTo(p?.form?.firstName?.value),
		isError: isDefine(p?.err?.firstName?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.firstName?.value?._errors[0])
	},
	lastName: {
		value: p?.data?.last_name ?? isEmptyTo(p?.form?.lastName?.value),
		isError: isDefine(p?.err?.lastName?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.lastName?.value?._errors[0])
	},
	dayOfBirth: {
		value: p?.data?.day_of_birth ?? isEmptyTo(p?.form?.dayOfBirth?.value),
		isError: isDefine(p?.err?.dayOfBirth?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.dayOfBirth?.value?._errors[0])
	},
	age: {
		value: p?.data?.age ?? isEmptyTo(p?.form?.age?.value),
		isError: isDefine(p?.err?.age?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.age?.value?._errors[0])
	},
	aboutMe: {
		value: p?.data?.about_me ?? isEmptyTo(p?.form?.aboutMe?.value),
		isError: isDefine(p?.err?.aboutMe?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.aboutMe?.value?._errors[0])
	},
	address: {
		value: p?.data?.address ?? isEmptyTo(p?.form?.address?.value),
		isError: isDefine(p?.err?.address?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.address?.value?._errors[0])
	},
	education: {
		value: p?.data?.education ?? isEmptyTo(p?.form?.education?.value),
		isError: isDefine(p?.err?.education?.value?._errors[0]),
		errorMsg: isEmptyTo(p?.err?.education?.value?._errors[0])
	}
});

export const zFormScheme = z.object({
	firstName: zReuiredField,
	lastName: zReuiredField,
	dayOfBirth: zDayOfBirth,
	age: zReuiredField,
	aboutMe: zLimitChar({ required: true, min: 20 }),
	address: zLimitChar({ min: 20 }),
	education: zReuiredField
});

export const setAge = (p: { dayOfBirth: string }) => {
	const dayOfBirth = p.dayOfBirth;

	if (dayOfBirth === '') return '';

	const dayOfBirthMoment = moment(dayOfBirth);
	const toDay = moment(Date.now());

	const diffDay = toDay.diff(dayOfBirthMoment, 'days', true);
	const diffYear = toDay.diff(dayOfBirthMoment, 'years');

	if (diffDay < 0 || diffYear < 0) return '';

	return `${diffYear}`;
};
