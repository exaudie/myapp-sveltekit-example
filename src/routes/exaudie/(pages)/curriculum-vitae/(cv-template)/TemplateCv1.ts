import type {
	ContactPerson,
	CurrculumVitae,
	Education,
	Experience,
	PersonalInfo,
	Skills,
	SocialMedia
} from '$lib/types/CurriculumVitaeType';
import type {
	Content,
	ContentColumns,
	ContentText,
	TDocumentDefinitions
} from 'pdfmake/interfaces';
import { dateddmmmmyyyyCust, dateyyyyCust } from '$lib/helpers/DateFormatter';
import { setColon, setHLine, setProgress } from './TemplateHelper';
import { getPersent } from '$lib/helpers/CommonHelpers';
import { isEmptyTo } from '$lib/helpers/DefaultValue';

const colorPrimary = '#03183b';
const colorSecondary = '#264d8c';

export const setToTemplate1 = (data: string): TDocumentDefinitions => {
	const dt: CurrculumVitae = JSON.parse(data);

	return {
		pageSize: 'A4',
		pageMargins: [20, 20, 20, 30],
		content: [
			setPersonName(dt.personalInfo),
			setPersonInfo(dt.personalInfo),
			setContactPerson({ contact: dt.contactPerson, sosmed: dt.socialMedia }),
			setAboutMe(dt.personalInfo),

			setTitleBig('Experience'),
			setHLine(),
			setExperiences(dt.experience),

			setTitleBig('Education'),
			setHLine(),
			setEducations(dt.education),

			setTitleBig('Skills'),
			setHLine(),
			setSkills(dt.skills)
		],
		footer: {
			alignment: 'right',
			marginRight: 20,
			text: [
				{ text: 'created using', style: 'textPrimary' },
				{ text: ' exaudie', style: 'textBig' },
				{ text: ' CV', style: 'textSecond' }
			]
		},
		defaultStyle: {
			font: 'Roboto',
			fontSize: 10
		},
		styles: {
			textPrimary: { color: colorPrimary, lineHeight: 1.3 },
			textSecond: { color: colorSecondary, lineHeight: 1.3 },
			textBold: { color: colorPrimary, bold: true, lineHeight: 1.3 },
			textBig: { fontSize: 14, color: colorPrimary, bold: true, lineHeight: 1.3 }
		}
	};
};

const setPersonName = (dt: PersonalInfo): ContentColumns => ({
	columnGap: 10,
	columns: [
		{
			image: isEmptyTo(dt.photo, { defValue: 'src/assets/person_account.png' }),
			width: 50,
			height: 50
		},
		[
			{
				marginTop: 8,
				text: `${dt.firstName} ${dt.lastName}`,
				style: 'textBig'
			},
			{ text: dt.currentJob, style: 'textPrimary' }
		]
	]
});

const setPersonInfo = (dt: PersonalInfo): ContentColumns => ({
	marginTop: 5,
	columnGap: 3,
	columns: [
		{ text: 'Date Of Birth', width: 70, style: 'textBold' },
		setColon({ style: 'textPrimary' }),
		{ text: dateddmmmmyyyyCust(dt.dayOfBirth), width: 130, style: 'textPrimary' },
		{ text: 'Address', width: 60, style: 'textBold' },
		setColon({ style: 'textPrimary' }),
		{ text: dt.address, style: 'textPrimary' }
	]
});

const setContactPerson = (dt: {
	contact: ContactPerson;
	sosmed: SocialMedia[];
}): ContentColumns => ({
	marginTop: 15,
	columnGap: 3,
	columns: [
		{
			width: 206,
			columnGap: 3,
			columns: [setContactPersonItem(dt.contact)]
		},
		{
			columnGap: 3,
			columns: [setSocialMediaItem(dt.sosmed)]
		}
	]
});

const setContactPersonItem = (dt: ContactPerson): Content => [
	{ text: 'Contact Person', style: 'textSecond' },
	{
		columns: [
			{ text: 'Phone', width: 55, style: 'textBold' },
			setColon({ style: 'textPrimary' }),
			{ text: dt.phone, style: 'textPrimary' }
		]
	},
	{
		columns: [
			{ text: 'Email', width: 55, style: 'textBold' },
			setColon({ style: 'textPrimary' }),
			{ text: dt.email, style: 'textPrimary' }
		]
	}
];

const setSocialMediaItem = (dt: SocialMedia[]): Content => [
	{ text: 'Social Media', style: 'textSecond' },
	Array.from(Array(maxShow5(dt.length)).keys()).map((i) => ({
		columns: [
			{ text: dt[i].sosmedName, width: 60, style: 'textBold' },
			setColon({ style: 'textPrimary' }),
			{ text: dt[i].sosmedLink, style: 'textPrimary' }
		]
	}))
];

const setAboutMe = (dt: PersonalInfo): ContentText => ({
	marginTop: 15,
	text: dt.aboutMe,
	style: 'textPrimary'
});

const setExperiences = (dt: Experience[]): Content[] => {
	return Array.from(Array(maxShow5(dt.length)).keys()).map((i) => [
		{
			marginTop: i > 0 ? 10 : 0,
			text: [
				{
					text: `${dateyyyyCust(dt[i].startDate)} - ${dateyyyyCust(dt[i].endDate)}`,
					style: 'textPrimary'
				},
				{ text: ` - ${dt[i].companyName} - `, style: 'textBold' },
				{ text: dt[i].role, style: 'textPrimary' }
			]
		},
		{ marginLeft: 20, text: dt[i].desc, style: 'textPrimary' }
	]);
};

const setEducations = (dt: Education[]): Content[] => {
	return Array.from(Array(maxShow5(dt.length)).keys()).map((i) => [
		{
			marginTop: i > 0 ? 10 : 0,
			text: [
				{
					text: `${dateyyyyCust(dt[i].startDate)} - ${dateyyyyCust(dt[i].graduateDate)}`,
					style: 'textPrimary'
				},
				{ text: ` - ${dt[i].schoolName} - `, style: 'textBold' },
				{ text: dt[i].degree, style: 'textPrimary' }
			]
		},
		{ marginLeft: 20, text: dt[i].desc, style: 'textPrimary' }
	]);
};

const setSkills = (dt: Skills[]): ContentColumns[] => {
	return Array.from(Array(maxShow5(dt.length)).keys()).map((i) => ({
		columns: [
			{ text: dt[i].skillName, width: 400, style: 'textBold' },
			setProgress(getPersent(dt[i].skillLevel, { from: 10 }))
		]
	}));
};

const setTitleBig = (title: string): ContentText => ({
	marginTop: 15,
	text: title,
	style: 'textBig'
});

const maxShow5 = (value: number) => (value <= 5 ? value : 5);
