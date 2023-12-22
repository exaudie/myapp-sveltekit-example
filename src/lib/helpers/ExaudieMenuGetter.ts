import type { MenuItems } from '$lib/types/MenuSchemeType';

export const getMenuTitleFromPage = (menuItems: MenuItems[], pagePath: string) => {
	let title = '';

	const pathSplit = pagePath.split('/');
	const page = `/${pathSplit.at(pathSplit.length - 1) ?? ''}`;

	for (const itm of menuItems) {
		if (itm.page === page) {
			title = itm.title;
			break;
		}
	}

	return title;
};
