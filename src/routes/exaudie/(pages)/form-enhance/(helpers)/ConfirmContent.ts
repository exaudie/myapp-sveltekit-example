import FailedIcon from '$lib/images/icon/failed_icon.svg';
import SuccessIcon from '$lib/images/icon/success_icon.svg';

export type ContentConfirmType = {
	contentCode?: string;
	confirm: boolean;
	success?: boolean;
	title: string;
	desc: string;
	illust?: string;
	primaryText?: string;
	secondaryText?: string;
};

export const saveConfirm = {
	contentCode: 'saveConfirm',
	confirm: true,
	success: false,
	title: 'Confirmation Save',
	desc: 'Is your data correct?',
	primaryText: 'Ya',
	secondaryText: 'Tidak'
};

export const internalError = {
	contentCode: 'internalError',
	confirm: false,
	success: false,
	title: 'Error',
	desc: 'Intrnal server error',
	illust: FailedIcon,
	primaryText: 'Ok'
};

export const failedState = {
	contentCode: 'failedState',
	confirm: false,
	success: false,
	title: 'Warning',
	desc: 'Data failed to save',
	illust: FailedIcon,
	primaryText: 'Ok'
};

export const successState = {
	contentCode: 'successConfirm',
	confirm: false,
	success: true,
	title: 'Success',
	desc: 'Data saved successfully',
	illust: SuccessIcon
};
