import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import BlobStream, { type IBlobStream } from 'blob-stream';
import PdfPrinter from 'pdfmake';
import fs from 'fs';

export const generatePdfDataUrl = async (params: {
	fonts: TFontDictionary;
	template: TDocumentDefinitions;
}): Promise<string> => {
	const printer = new PdfPrinter(params.fonts);

	return new Promise((resolve, reject) => {
		const pdf = printer.createPdfKitDocument(params.template);

		pdf
			.pipe(BlobStream())
			.on('finish', async function (this: IBlobStream) {
				const blobPdf = this.toBlob('application/pdf');
				const arrayBuffer = await blobPdf.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer);

				console.log('finished generate ', blobPdf.type);

				resolve(`data:${blobPdf.type};base64,${buffer.toString('base64')}`);
			})
			.on('error', (err) => {
				console.log('err', err);

				reject(err);
			});

		pdf.end();
	});
};

export const generatePdfFile = async (prm: {
	fonts: TFontDictionary;
	template: TDocumentDefinitions;
}): Promise<string> => {
	const printer = new PdfPrinter(prm.fonts);

	return new Promise((resolve, reject) => {
		const pdf = printer.createPdfKitDocument(prm.template);

		pdf
			.pipe(fs.createWriteStream('src/assets/document.pdf'))
			.on('finish', async function () {
				console.log('finished generate PDF');

				resolve(``);
			})
			.on('error', (err) => {
				console.log('err', err);

				reject(err);
			});

		pdf.end();
	});
};
