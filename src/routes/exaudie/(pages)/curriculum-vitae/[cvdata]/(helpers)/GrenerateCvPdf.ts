import BlobStream, { type IBlobStream } from 'blob-stream';
import PdfPrinter from 'pdfmake';
import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';

const fonts: TFontDictionary = {
	Roboto: {
		normal: 'src/lib/fonts/Roboto-Regular.ttf',
		bold: 'src/lib/fonts/Roboto-Medium.ttf',
		italics: 'src/lib/fonts/Roboto-Italic.ttf',
		bolditalics: 'src/lib/fonts/Roboto-MediumItalic.ttf'
	}
};

const printer = new PdfPrinter(fonts);

async function genCvPdf(data: string): Promise<Blob> {
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
			.on('finish', function (this: IBlobStream) {
				console.log('finished generate PDF');
        const url =this.toBlobURL('application/pdf')
				console.log('finishe',url);
        

				resolve(this.toBlob('application/pdf'));
			})
			.on('error', (err) => {
				console.log('err', err);

				reject(err);
			});

		pdf.end();
	});
}

export default genCvPdf;
