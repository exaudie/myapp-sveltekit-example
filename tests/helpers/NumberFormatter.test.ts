import {
	removeSeparator,
	setCust2ThousandSeparator,
	setCustThousandSeparator,
	setIntlThousandSeparator,
	switchSeparator
} from '$lib/helpers/NumberFormatter';
import { describe, expect, it } from 'vitest';

describe('setIntlThousandSeparator : menyesuaikan format nominal sesuai', () => {
	it('Input 1.222.333 result "', () => {
		expect(setIntlThousandSeparator('1.222.333')).toBe('');
	});

	it('Input 1222333 result 1.222.333', () => {
		expect(setIntlThousandSeparator('1222333')).toBe('1.222.333');
	});

	it('Input 1222333.45 result 1.222.333,45', () => {
		expect(setIntlThousandSeparator('1222333.45')).toBe('1.222.333,45');
	});

	it('Input 1222333.00 result 1.222.333', () => {
		expect(setIntlThousandSeparator('1222333.00')).toBe('1.222.333');
	});

	it('Input -1222333.00 result -1.222.333', () => {
		expect(setIntlThousandSeparator('-1222333.00')).toBe('-1.222.333');
	});

	it('Input 1222333.00 result 1,222,333', () => {
		expect(setIntlThousandSeparator('1222333.00', { separator: ',' })).toBe('1,222,333');
	});

	it('Input 1222333.66 result 1,222,333.66', () => {
		expect(setIntlThousandSeparator('1222333.66', { separator: ',' })).toBe('1,222,333.66');
	});

	it('Input -1222333.66 result -1,222,333.66', () => {
		expect(setIntlThousandSeparator('-1222333.66', { separator: ',' })).toBe('-1,222,333.66');
	});
});

describe('setCustThousandSeparator : menyesuaikan format nominal sesuai', () => {
	it('Input 1222333 result 1.222.333', () => {
		expect(setCustThousandSeparator('1222333')).toBe('1.222.333');
	});

	it('Input 1222333.45 result 1.222.333.45', () => {
		expect(setCustThousandSeparator('1222333.45')).toBe('1.222.333.45');
	});

	it('Input 1222333.00 result 1.222.333.00', () => {
		expect(setCustThousandSeparator('1222333.00')).toBe('1.222.333.00');
	});

	it('Input 1222333.00 result 1,222,333.00', () => {
		expect(setCustThousandSeparator('1222333.00', { separator: ',' })).toBe('1,222,333.00');
	});

	it('Input 1222333.66 result 1,222,333.66', () => {
		expect(setCustThousandSeparator('1222333.66', { separator: ',' })).toBe('1,222,333.66');
	});

	it('Input -1222333.66 result -1,222,333.66', () => {
		expect(setCustThousandSeparator('-1222333.66', { separator: ',' })).toBe('-1,222,333.66');
	});
});

describe('setCust2ThousandSeparator : menyesuaikan format nominal sesuai', () => {
	it('Input 1222333 result 1.222.333', () => {
		expect(setCust2ThousandSeparator('1222333')).toBe('1.222.333');
	});

	it('Input 1222333.45 result 1.222.333.45', () => {
		expect(setCust2ThousandSeparator('1222333.45')).toBe('1.222.333.45');
	});

	it('Input 1222333.00 result 1.222.333.00', () => {
		expect(setCust2ThousandSeparator('1222333.00')).toBe('1.222.333.00');
	});

	it('Input 1222333.00 result 1,222,333.00', () => {
		expect(setCust2ThousandSeparator('1222333.00', { separator: ',' })).toBe('1,222,333.00');
	});

	it('Input 1222333.66 result 1,222,333.66', () => {
		expect(setCust2ThousandSeparator('1222333.66', { separator: ',' })).toBe('1,222,333.66');
	});

	it('Input -1222333.66 result -1,222,333.66', () => {
		expect(setCust2ThousandSeparator('-1222333.66', { separator: ',' })).toBe('-1,222,333.66');
	});
});

describe('removeSeparator : Menghapus separator format nominal', () => {
	it('Input 1.222.333 result 1222333', () => {
		expect(removeSeparator('1.222.333')).toBe('1222333');
	});

	it('Input 1.222.333.45 result 122233345', () => {
		expect(removeSeparator('1.222.333.45')).toBe('122233345');
	});

	it('Input 1.222.333,00 result 1222333,00', () => {
		expect(removeSeparator('1.222.333,00')).toBe('1222333,00');
	});

	it('Input 1,222,333.00 result 1222333.00', () => {
		expect(removeSeparator('1,222,333.00', { separator: ',' })).toBe('1222333.00');
	});

	it('Input -1,222,333.00 result -1222333.00', () => {
		expect(removeSeparator('-1,222,333.00', { separator: ',' })).toBe('-1222333.00');
	});
});

describe('switchSeparator : Mengganti separator dari , menjadi . dan sebaliknya', () => {
	it('Input 1222333 result 1222333 | to: . ', () => {
		expect(switchSeparator('1222333', { to: '.' })).toBe('1222333');
	});

	it('Input 1222333 result 1222333 | to: , ', () => {
		expect(switchSeparator('1222333', { to: ',' })).toBe('1222333');
	});

	it('Input 1222333.99 result 1222333,99 | to: . ', () => {
		expect(switchSeparator('1222333.99', { to: '.' })).toBe('1222333,99');
	});

	it('Input 1222333.99 result 1222333.99 | to: , ', () => {
		expect(switchSeparator('1222333.99', { to: ',' })).toBe('1222333.99');
	});

	it('Input 1.222.333 result 1.222.333 | to: . ', () => {
		expect(switchSeparator('1.222.333', { to: '.' })).toBe('1.222.333');
	});

	it('Input 1.222.333 result 1,222,333 | to: , ', () => {
		expect(switchSeparator('1.222.333', { to: ',' })).toBe('1,222,333');
	});

	it('Input 1.222.333,77 result 1.222.333,77 | to: . ', () => {
		expect(switchSeparator('1.222.333,77', { to: '.' })).toBe('1.222.333,77');
	});

	it('Input 1.222.333,77 result 1,222,333.77 | to: , ', () => {
		expect(switchSeparator('1.222.333,77', { to: ',' })).toBe('1,222,333.77');
	});

	it('Input 111.222.333,77 result 111.222.333,77 | to: . ', () => {
		expect(switchSeparator('111.222.333,77', { to: '.' })).toBe('111.222.333,77');
	});

	it('Input 111.222.333,77 result 111,222,333.77 | to: , ', () => {
		expect(switchSeparator('111.222.333,77', { to: ',' })).toBe('111,222,333.77');
	});

	it('Input 111,222,333.77 result 111.222.333,77 | to: . ', () => {
		expect(switchSeparator('111,222,333.77', { to: '.' })).toBe('111.222.333,77');
	});

	it('Input 111,222,333.77 result 111,222,333.77 | to: , ', () => {
		expect(switchSeparator('111,222,333.77', { to: ',' })).toBe('111,222,333.77');
	});

	it('Input 11,222,333.77 result 11.222.333,77 | to: . ', () => {
		expect(switchSeparator('11,222,333.77', { to: '.' })).toBe('11.222.333,77');
	});

	it('Input 11,222,333.77 result 11,222,333.77 | to: , ', () => {
		expect(switchSeparator('11,222,333.77', { to: ',' })).toBe('11,222,333.77');
	});

	it('Input 11222333,77 result 11222333,77 | to: . ', () => {
		expect(switchSeparator('11222333,77', { to: '.' })).toBe('11222333,77');
	});

	it('Input 11222333.77 result 11222333.77 | to: , ', () => {
		expect(switchSeparator('11222333.77', { to: ',' })).toBe('11222333.77');
	});

	it('Input -11222333.77 result -11222333.77 | to: , ', () => {
		expect(switchSeparator('-11222333.77', { to: ',' })).toBe('-11222333.77');
	});
});

describe('kombinasi setSeparator dan switchSeparator : Mengganti separator dari , menjadi . dan sebaliknya', () => {
	it('Input setIntlThousandSeparator(switchSeparator(\'1222333.88\')) result "" ', () => {
		expect(setIntlThousandSeparator(switchSeparator('1222333.88', { to: '.' }))).toBe('');
	});

	it("Input setIntlThousandSeparator(switchSeparator('1222333.88')) result 1.222.333,88 ", () => {
		const nominal: string = setIntlThousandSeparator(switchSeparator('1222333.88', { to: ',' }));
		expect(nominal).toBe('1.222.333,88');
	});

	it("Input setIntlThousandSeparator(switchSeparator('1222333,88')) result 1.222.333,88 ", () => {
		const nominal: string = setIntlThousandSeparator(switchSeparator('1222333,88', { to: ',' }));
		expect(nominal).toBe('1.222.333,88');
	});

	it("Input setIntlThousandSeparator(switchSeparator('1222333.88')) result '' ", () => {
		expect(setIntlThousandSeparator(switchSeparator('1222333.88', { to: '.' }))).toBe('');
	});
});
