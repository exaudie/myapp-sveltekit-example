import { dateyyyyCust } from '$lib/helpers/DateFormatter';
import { describe, expect, it } from 'vitest';

describe('DateFormatter : mengubah format tanggal', () => {
	it('Input 2024-02-03 result 2024', () => {
		expect(dateyyyyCust('2024-02-03')).toBe('2024');
	});
});
