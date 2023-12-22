export type ThemeButtonType = 'primary' | 'warning' | 'danger' | 'light';

export type ThemeButton = {
	primary: ThemeButtonColor;
	warning: ThemeButtonColor;
	danger: ThemeButtonColor;
	light: ThemeButtonColor;
};

export type ThemeButtonColor = {
	bgColor: string;
	borderColor: string;
	bgColorHov: string;
	borderColorHov: string;
	bgColorAct: string;
	borderColorAct: string;
};
