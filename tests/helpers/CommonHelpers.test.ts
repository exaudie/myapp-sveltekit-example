import { getPersent } from '$lib/helpers/CommonHelpers';
import { describe, expect, it } from 'vitest';

describe('getPersent : mengambil nilai persentase dari 100%', () => {
	it('Input 8 dari nilai total 10 result 80 atau 80%', () => {
		expect(getPersent(8, { from: 10 })).toBe(80);
	});
});
