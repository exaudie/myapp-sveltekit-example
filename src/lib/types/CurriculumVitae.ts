import type { InputFieldScheme } from './InputField';

export type CurrculumVitae = {
	personalInfo: PersonalInfo;
};

export type PersonalInfo = { photo: string; firstName: string; lastName: string };

export type CurrculumVitaeScheme = {
	personalInfo: PersonalInfoScheme;
};

export type PersonalInfoScheme = {
	photo: InputFieldScheme;
	firstName: InputFieldScheme;
	lastName: InputFieldScheme;
	currentOccupation: InputFieldScheme;
};
