import { removeSeparator, setCustThousandSeparator } from './NumberFormatter';

export default class NominalView {
	private nominal: string;
	private separatorTo: '.' | ',';
	private comma: '.' | ',';

	constructor(value: string, p?: { separator?: '.' | ',' }) {
		this.nominal = value;
		this.separatorTo = p?.separator ?? '.';
		this.comma = this.separatorTo === '.' ? ',' : '.';
	}

	get value(): string {
		return this.nominal;
	}

	removeSparator(): this {
		this.nominal = removeSeparator(this.nominal, { separator: this.separatorTo });
		return this;
	}

	toSparator(): this {
		this.nominal = setCustThousandSeparator(this.nominal);
		return this;
	}
}
