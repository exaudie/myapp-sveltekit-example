import { fail } from '@sveltejs/kit';

export const actions = {
	confirmOtp: async ({ request }) => {
		const data = await request.formData();
		const otp = data.get('otp') ?? '';

		await new Promise((e) => setTimeout(e, 1000));

		if (otp === '123456') return { message: 'otp valid' };

		return fail(401, { message: 'otp invalid' });
	}
};

/**
 * ActionResult example

{
  "type": "success",
  "status": 200,
  "data": {
    "message": "otp valid"
  }
}

 * 
 
{
  "type": "failure",
  "status": 400,
  "data": {
    "message": "otp invalid"
  }
}

*

{
  "type": "error",
  "error": {
    "message": "Internal Error"
  },
  "status": 500
}
*/
