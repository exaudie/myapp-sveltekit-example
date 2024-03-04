import NominalExpand from '$lib/helpers/NominalExpand';
import { describe, expect, it } from 'vitest';

describe('NominalExpand : used to display nominal', () => {
	it(`Input 11333777.88 result "11333777.88"`, () => {
		const nominal = new NominalExpand('11333777.88');
		expect(nominal.value).toBe('11333777.88');
	});

	it(`Input 11333777.88 result "11.333.777,88"`, () => {
		const nominal = new NominalExpand('11333777.88');
		expect(nominal.addSeparator().value).toBe('11.333.777,88');
	});

	it(`Input 11333777,88 result ""`, () => {
		const nominal = new NominalExpand('11333777,88');
		expect(nominal.addSeparator().value).toBe('');
	});

	it(`Input 11333777,88 result "" | switchSeparator to .`, () => {
		const nominal = new NominalExpand('');
		expect(nominal.switchSeparator({ to: '.' }).addSeparator().value).toBe('');
	});

	it(`Input 11333777,88 result "11.333.777,88"`, () => {
		const nominal = new NominalExpand('11333777,88');
		expect(nominal.switchSeparator({ to: ',' }).addSeparator().value).toBe('11.333.777,88');
	});

	it(`Input 11333777.88 result "Rp11.333.777,88" | prefix:Rp`, () => {
		const nominal = new NominalExpand('11333777.88');
		expect(nominal.addSeparator().addPrefix({ prefix: 'Rp' }).value).toBe('Rp11.333.777,88');
	});

	it(`Input 11333777.88 result "Rp11,333,777.88" | prefix:Rp`, () => {
		const nominal = new NominalExpand('11333777.88');
		expect(nominal.addSeparator({separator:','}).addPrefix({ prefix: 'Rp' }).value).toBe('Rp11,333,777.88');
	});

	it(`Input Rp11.333.777,885 result "Rp11.333.777,88" | prefix:Rp | toFixed:2`, () => {
		const nominal = new NominalExpand('Rp11.333.777,884');
		expect(
			nominal
				.cleanFrom({ search: 'Rp' })
				.removeSeparator({ separator: '.' })
				.switchSeparator({ to: ',' })
				.addSeparator({ toFixed: 2 })
				.addPrefix({ prefix: 'Rp' }).value
		).toBe('Rp11.333.777,88');
	});

	it(`Input Rp11.333.777,88 result number 1333777.88`, () => {
		const nominal = new NominalExpand('Rp11.333.777,88');
		expect(
			nominal
				.cleanFrom({ search: 'Rp' })
				.removeSeparator({ separator: '.' })
				.switchSeparator({ to: ',' }).valueNum
		).toBe(11333777.88);
	});

	it(`Input 88 result "88%" | suffix:%`, () => {
		const nominal = new NominalExpand('88');
		expect(nominal.addSuffix({ suffix: '%' }).value).toBe('88%');
	});
});
