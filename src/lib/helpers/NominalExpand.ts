import {
	removeSeparator,
	setIntlThousandSeparator,
	switchSeparator,
	type SeparatorValue
} from './NumberFormatter';

export default class NominalExpand {
	private nominal: string;
	private separatorTo: SeparatorValue;

	constructor(value: string, p?: { currentSeparator?: SeparatorValue }) {
		this.nominal = value;
		this.separatorTo = p?.currentSeparator ?? '.';
	}

	get value(): string {
		return this.nominal;
	}

	get valueNum(): number {
		return +this.nominal;
	}

	removeSparator(p?: { separator?: SeparatorValue }): this {
		this.nominal = removeSeparator(this.nominal, { separator: p?.separator ?? this.separatorTo });

		return this;
	}

	switchSeparator(p?: { to?: SeparatorValue }): this {
		this.nominal = switchSeparator(this.nominal, { to: p?.to ?? this.separatorTo });

		return this;
	}

	toSparator(prm?: { separator?: SeparatorValue; defValue?: string; toFixed?: number }): this {
		this.nominal = setIntlThousandSeparator(this.nominal, {
			separator: prm?.separator ?? this.separatorTo,
			defValue: prm?.defValue,
			toFixed: prm?.toFixed
		});

		return this;
	}

	addPrefix(p?: { prefix?: string }): this {
		this.nominal = (p?.prefix ?? '') + this.nominal;

		return this;
	}

	addSuffix(p?: { suffix?: string }): this {
		this.nominal = this.nominal + (p?.suffix ?? '');

		return this;
	}

	cleanFrom(p?: { search?: string }): this {
		this.nominal = this.nominal.replaceAll(p?.search ?? '', '');

		return this;
	}
}
