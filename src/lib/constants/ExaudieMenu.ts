export const menuItems = [
	{ title: 'Button', subtitle: '', page: '/button' },
	{ title: 'Input', subtitle: '', page: '/input' },
	{ title: 'Text Area', subtitle: '', page: '/textarea' },
	{ title: 'Select', subtitle: '', page: '/select' },
	{ title: 'Checkbox', subtitle: '', page: '/checkbox' },
	{ title: 'Dialog', subtitle: '', page: '/dialog' },
	{ title: 'Input Auto Load', subtitle: '', page: '/autoload' },
	{ title: 'Form Enhance', subtitle: '', page: '/formenhance' },
	{ title: 'Input Validate', subtitle: '', page: '/inputvalidate' },
	{ title: 'File Upload', subtitle: '', page: '/fileupload' },
	{ title: 'Simmer / Skeleton', subtitle: '', page: '/simmer' },
	{ title: 'SneckBar', subtitle: '', page: '/sneckbar' },
	{ title: 'Table', subtitle: '', page: '/table' },
	{ title: 'Table Freeze', subtitle: '', page: '/table-freeze' }
];

export const getMenuTitleFromPage = (page: string) => {
	let title = '';
	for (const itm of menuItems) {
		if (itm.page === page) {
			title = itm.title;
			break;
		}
	}

	return title;
};
