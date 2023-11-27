import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import { generatePdfDataUrl } from '$lib/helpers/PdfGenerator';
import { setToTemplate1 } from '../(cv-template)/TemplateCv1';

export const genCvPdf = async (data: string): Promise<string> => {
	const fonts: TFontDictionary = {
		Roboto: {
			normal: 'src/lib/fonts/Roboto-Regular.ttf',
			bold: 'src/lib/fonts/Roboto-Medium.ttf',
			italics: 'src/lib/fonts/Roboto-Italic.ttf',
			bolditalics: 'src/lib/fonts/Roboto-MediumItalic.ttf'
		}
	};
	const file: TDocumentDefinitions = setToTemplate1(data);

	return await generatePdfDataUrl({ fonts, template: file });
};
