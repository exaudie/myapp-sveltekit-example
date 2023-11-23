import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import BlobStream, { type IBlobStream } from 'blob-stream';
import PdfPrinter from 'pdfmake';

const fonts: TFontDictionary = {
	Roboto: {
		normal: 'src/lib/fonts/Roboto-Regular.ttf',
		bold: 'src/lib/fonts/Roboto-Medium.ttf',
		italics: 'src/lib/fonts/Roboto-Italic.ttf',
		bolditalics: 'src/lib/fonts/Roboto-MediumItalic.ttf'
	}
};

const printer = new PdfPrinter(fonts);

export const genCvPdf = async (data: string): Promise<string> => {
	const file: TDocumentDefinitions = {
		content: ['hello word', data],
		defaultStyle: {
			font: 'Roboto'
		}
	};

	return new Promise((resolve, reject) => {
		const pdf = printer.createPdfKitDocument(file);

		pdf
			.pipe(BlobStream())
			.on('finish', async function (this: IBlobStream) {
				console.log('finished generate PDF');

				const blobPdf = this.toBlob('application/pdf');
				const arrayBuffer = await blobPdf.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer);

				resolve('data:' + blobPdf.type + ';base64,' + buffer.toString('base64'));
			})
			.on('error', (err) => {
				console.log('err', err);

				reject(err);
			});

		pdf.end();
	});
};
