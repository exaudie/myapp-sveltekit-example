import type { InputFieldScheme } from './InputFieldScheme';

export type CurrculumVitae = {
	personalInfo: PersonalInfo;
	contactPerson: any;
	socialMedia: any;
	verticalSpace: any;
	education: any;
	skills: any;
};

export type PersonalInfo = {
	photo: string;
	firstName: string;
	lastName: string;
	dayOfBirth: string;
	currentJob: string;
};

export type CurrculumVitaeScheme = {
	personalInfo: PersonalInfoScheme;
};

export type PersonalInfoScheme = {
	photo: InputFieldScheme;
	firstName: InputFieldScheme;
	lastName: InputFieldScheme;
	currentOccupation: InputFieldScheme;
};
