import type {
	ContactPerson,
	CurrculumVitae,
	Education,
	Experience,
	PersonalInfo,
	Skills,
	SocialMedia
} from '$lib/types/CurriculumVitae';
import type {
	Content,
	ContentColumns,
	ContentText,
	TDocumentDefinitions
} from 'pdfmake/interfaces';
import { dateddmmmmyyyyCust, dateyyyyCust } from '$lib/helpers/DateFormatter';
import { setColon, setHLine } from './TemplateHelper';

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
			text: ['created using', { text: ' exaudie-cv', style: 'textBig' }]
		},
		defaultStyle: {
			font: 'Roboto',
			fontSize: 10
		},
		styles: {
			textBold: { bold: true },
			textSecond: { color: '#7188ad' },
			textBig: { fontSize: 14, bold: true }
		}
	};
};

const setPersonName = (dt: PersonalInfo): ContentColumns => ({
	columnGap: 10,
	columns: [
		{ image: dt.photo, width: 50, height: 50 },
		[
			{
				marginTop: 8,
				text: `${dt.firstName} ${dt.lastName}`,
				style: 'textBig'
			},
			{ text: dt.currentJob }
		]
	]
});

const setPersonInfo = (dt: PersonalInfo): ContentColumns => ({
	marginTop: 5,
	columnGap: 3,
	columns: [
		{ text: 'Date Of Birth', width: 70, style: 'textBold' },
		setColon(),
		{ text: dateddmmmmyyyyCust(dt.dayOfBirth), width: 130 },
		{ text: 'Address', width: 60, style: 'textBold' },
		setColon(),
		{ text: dt.address }
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
		columns: [{ text: 'Phone', width: 55, style: 'textBold' }, setColon(), { text: dt.phone }]
	},
	{
		columns: [{ text: 'Email', width: 55, style: 'textBold' }, setColon(), { text: dt.email }]
	}
];

const setSocialMediaItem = (dt: SocialMedia[]): Content => [
	{ text: 'Social Media', style: 'textSecond' },
	Array.from(Array(dt.length).keys()).map((i) => ({
		columns: [
			{ text: dt[i].sosmedName, width: 60, style: 'textBold' },
			setColon(),
			{ text: dt[i].sosmedLink }
		]
	}))
];

const setAboutMe = (dt: PersonalInfo): ContentText => ({
	marginTop: 15,
	text: dt.aboutMe
});

const setExperiences = (dt: Experience[]): Content[] => {
	return Array.from(Array(dt.length).keys()).map((i) => [
		{
			text: [
				`${dateyyyyCust(dt[i].startDate)} - ${dateyyyyCust(dt[i].endDate)}`,
				{ text: ` - ${dt[i].companyName} - `, style: 'textBold' },
				dt[i].role
			]
		},
		{ marginLeft: 20, text: dt[i].desc }
	]);
};

const setEducations = (dt: Education[]): Content[] => {
	return Array.from(Array(dt.length).keys()).map((i) => [
		{
			text: [
				`${dateyyyyCust(dt[i].startDate)} - ${dateyyyyCust(dt[i].endDate)}`,
				{ text: ` - ${dt[i].campusName} - `, style: 'textBold' },
				dt[i].studyProgram
			]
		},
		{ marginLeft: 20, text: dt[i].desc }
	]);
};

const setSkills = (dt: Skills[]): ContentColumns[] => {
	return Array.from(Array(dt.length).keys()).map((i) => ({
		columns: [{ text: dt[i].skillName, width: 400, style: 'textBold' }, { text: dt[i].skillLevel }]
	}));
};

const setTitleBig = (title: string): ContentText => ({
	marginTop: 15,
	text: title,
	style: 'textBig'
});
