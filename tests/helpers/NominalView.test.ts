import NominalView from '$lib/helpers/NominalView';
import { describe, expect, it } from 'vitest';

describe('NominalView : used to display nominal', () => {
	it('Input 1000000 result "1000000"', () => {
		const nominal = new NominalView('1000000');
		expect(nominal.value).toBe('1000000');
	});
});
