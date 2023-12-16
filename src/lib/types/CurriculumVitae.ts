import type { InputFieldScheme } from './InputFieldScheme';

export type CurrculumVitae = {
	personalInfo: PersonalInfo;
	contactPerson: ContactPerson;
	socialMedia: SocialMedia[];
	experience: Experience[];
	education: Education[];
	skills: Skills[];
};

export type PersonalInfo = {
	photo: string;
	firstName: string;
	lastName: string;
	dayOfBirth: string;
	currentJob: string;
	address: string;
	aboutMe: string;
};

export type ContactPerson = { phone: string; email: string };

export type SocialMedia = { sosmedName: string; sosmedLink: string };

export type Experience = {
	startDate: string;
	endDate: string;
	companyName: string;
	role: string;
	desc: string;
};

export type Education = {
	startDate: string;
	endDate: string;
	campusName: string;
	studyProgram: string;
	desc: string;
};

export type Skills = { skillName: string; skillLevel: number };

export type CurrculumVitaeScheme = {
	personalInfo: PersonalInfoScheme;
};

export type PersonalInfoScheme = {
	photo: InputFieldScheme;
	firstName: InputFieldScheme;
	lastName: InputFieldScheme;
	currentOccupation: InputFieldScheme;
};
