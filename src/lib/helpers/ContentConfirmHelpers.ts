import type { ActionResult } from '@sveltejs/kit';

export const parseErrorMsg = (result: ActionResult) => {
	switch (result.type) {
		case 'failure':
			return result?.data?.message ?? '';

		case 'error':
			return result?.error?.message ?? '';

		default:
			return 'Internal Server Error';
	}
};
