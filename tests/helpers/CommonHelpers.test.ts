import { getPersent } from '$lib/helpers/CommonHelpers';
import { describe, test, it, expect } from 'vitest';

describe('Common helpers', () => {
	it('getPersent', () => {
		expect(getPersent(8, { from: 10 })).toBe(80);
	});
});
