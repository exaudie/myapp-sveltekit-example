import type { CurrculumVitae, PersonalInfo } from '$lib/types/CurriculumVitae';
import type {
	Content,
	ContentColumns,
	ContentText,
	TDocumentDefinitions
} from 'pdfmake/interfaces';
import { setColon, setHLine } from './TemplateHelper';
import { dateddmmmmyyyyCust, dateyyyyCust } from '$lib/helpers/DateFormatter';

export const setToTemplate1 = (data: string): TDocumentDefinitions => {
	const dt: CurrculumVitae = JSON.parse(data);

	return {
		pageSize: 'A4',
		pageMargins: [20, 20, 20, 20],
		content: [
			setPersonName(dt.personalInfo),
			setPersonInfo(dt.personalInfo),
			setContactPerson(),
			setAboutMe(),

			setTitleBig('Experience'),
			setHLine(),
			setExperiences(),

			setTitleBig('Education'),
			setHLine(),
			setEducations(),

			setTitleBig('Skills'),
			setHLine(),
			setSkills()
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

const setPersonName = (person: PersonalInfo): ContentColumns => ({
	columnGap: 10,
	columns: [
		{ image: 'src/assets/person_account.png', width: 50, height: 50 },
		[
			{
				marginTop: 8,
				text: `${person.firstName} ${person.lastName}`,
				style: 'textBig'
			},
			{ text: person.currentJob }
		]
	]
});

const setPersonInfo = (person: PersonalInfo): ContentColumns => ({
	marginTop: 5,
	columnGap: 3,
	columns: [
		{ text: 'Date Of Birth', width: 70, style: 'textBold' },
		setColon(),
		{ text: dateddmmmmyyyyCust(person.dayOfBirth), width: 130 },
		{ text: 'Address', width: 60, style: 'textBold' },
		setColon(),
		{
			text: `Jl. Jend. Sudirman No.99-101, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223`
		}
	]
});

const setContactPerson = (): ContentColumns => ({
	marginTop: 15,
	columnGap: 3,
	columns: [
		{
			width: 206,
			columnGap: 3,
			columns: [setContactPersonItem()]
		},
		{
			columnGap: 3,
			columns: [setSocialMediaItem()]
		}
	]
});

const setContactPersonItem = (): Content => [
	{ text: 'Contact Person', style: 'textSecond' },
	{
		columns: [{ text: 'Phone', width: 55, style: 'textBold' }, setColon(), { text: '+62823483834' }]
	},
	{
		columns: [
			{ text: 'Email', width: 55, style: 'textBold' },
			setColon(),
			{ text: 'exaudie@gmail.com' }
		]
	}
];

const setSocialMediaItem = (): Content => {
	const cosmedlist = [
		{ sosmedName: 'Github', sosmedLink: 'github.com/exaudie' },
		{ sosmedName: 'Facebook', sosmedLink: 'facebook.com/exaudie' },
		{ sosmedName: 'Linkedin', sosmedLink: 'linkedin.com/exaudie' }
	];

	return [
		{ text: 'Social Media', style: 'textSecond' },
		cosmedlist.map((val) => ({
			columns: [
				{ text: val.sosmedName, width: 60, style: 'textBold' },
				setColon(),
				{ text: val.sosmedLink }
			]
		}))
	];
};

const setAboutMe = (): ContentText => ({
	marginTop: 15,
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

const setExperiences = (): ContentColumns[] => {
	return [
		{
			columns: [
				{
					text: [
						`${dateyyyyCust('2011-11-21')} - ${dateyyyyCust('2015-11-21')}`,
						{ text: ' - PT. Wakanda - ', style: 'textBold' },
						'Teknologi developer'
					]
				}
			]
		}
	];
};

const setEducations = (): ContentText[] => {
	return [
		{
			text: [
				`${dateyyyyCust('2011-11-21')} - ${dateyyyyCust('2015-11-21')}`,
				{ text: ' - Universitas - ', style: 'textBold' },
				'Bachelor in Computer science'
			]
		},
		{ marginLeft: 20, text: 's' }
	];
};

const setSkills = (): ContentColumns[] => {
	const skills = [
		{ skillName: 'Android Native Developer', skillLevel: 8 },
		{ skillName: 'Flutter Mobile', skillLevel: 8 },
		{ skillName: 'Sveltekit', skillLevel: 8 },
		{ skillName: 'Analysis', skillLevel: 8 }
	];

	return skills.map((val) => ({
		columns: [{ text: val.skillName, width: 400, style: 'textBold' }, { text: val.skillLevel }]
	}));
};

const setTitleBig = (title: string): ContentText => ({
	marginTop: 15,
	text: title,
	style: 'textBig'
});
