import type { InputFieldScheme } from './InputFieldSchemeType';

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
	placeOfBirth: string;
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
	location: string;
	desc: string;
	isWorkHere: boolean;
};

export type Education = {
	startDate: string;
	graduateDate: string;
	schoolName: string;
	major: string;
	degree: string;
	grade: string;
	desc: string;
	isStudyHere: boolean;
};

export type Skills = { skillName: string; skillLevel: number };

/**
 * Form Scheme
 */
export type CurrculumVitaeScheme = {
	personalInfo: PersonalInfoScheme;
	contactPerson: ContactPersonScheme;
	socialMedia: SocialMediaScheme[];
	experience: ExperienceScheme[];
	education: EducationScheme[];
	skills: SkillsScheme[];
};

export type PersonalInfoScheme = {
	photo: InputFieldScheme;
	firstName: InputFieldScheme;
	lastName: InputFieldScheme;
	placeOfBirth: InputFieldScheme;
	dayOfBirth: InputFieldScheme;
	currentJob: InputFieldScheme;
	address: InputFieldScheme;
	aboutMe: InputFieldScheme;
};

export type ContactPersonScheme = { phone: InputFieldScheme; email: InputFieldScheme };

export type SocialMediaScheme = { sosmedName: InputFieldScheme; sosmedLink: InputFieldScheme };

export type ExperienceScheme = {
	startDate: InputFieldScheme;
	endDate: InputFieldScheme;
	companyName: InputFieldScheme;
	role: InputFieldScheme;
	location: InputFieldScheme;
	desc: InputFieldScheme;
	isWorkHere: InputFieldScheme;
};

export type EducationScheme = {
	startDate: InputFieldScheme;
	graduateDate: InputFieldScheme;
	schoolName: InputFieldScheme;
	major: InputFieldScheme;
	degree: InputFieldScheme;
	grade: InputFieldScheme;
	desc: InputFieldScheme;
	isStudyHere: InputFieldScheme;
};

export type SkillsScheme = { skillName: InputFieldScheme; skillLevel: InputFieldScheme };
