import type { ValidateType } from '$lib/types/ValidateType';
import { ZodObject, z } from 'zod';

export const zReuiredField = z.object({
	value: z.string().min(1, { message: 'Data is required' })
});

export const getZValidField = (p: { value: string; zScheme: ZodObject<any> }): ValidateType => {
	const parse = p.zScheme.safeParse({ value: p.value });

	if (!parse.success) {
		const errMsg = parse.error.format();

		return { isError: true, errorMessage: errMsg?.value?._errors[0] ?? '' };
	}

	return { isError: false, errorMessage: '' };
};
