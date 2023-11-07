import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import genCvPdf from './(helpers)/GrenerateCvPdf';

export const GET = (async ({ params, setHeaders }) => {
	if (!params.cvdata) {
		throw error(404, { message: 'not found' });
	}

	const pdf = await genCvPdf(params.cvdata);

	setHeaders({
		'Content-Type': 'application/pdf',
		'Content-Length': pdf.size.toString(),
		'Last-Modified': new Date().toUTCString(),
		'Cache-Control': 'public, max-age=600'
	});

	const respon = new Response(pdf);
	console.log('respon', respon);

	return respon;
}) satisfies RequestHandler;
