import {
	removeSeparator,
	setIntlThousandSeparator,
	switchSeparator,
	type SeparatorValue
} from './NumberFormatter';

export default class NominalExpand {
	private nominal: string;
	private separatorTo: SeparatorValue;

	public constructor(value: string, p?: { currentSeparator?: SeparatorValue }) {
		this.nominal = value;
		this.separatorTo = p?.currentSeparator ?? '.';
	}

	public get value(): string {
		return this.nominal;
	}

	public get valueNum(): number {
		return +this.nominal;
	}

	public removeSeparator(prm?: { separator?: SeparatorValue }): this {
		this.nominal = removeSeparator(this.nominal, { separator: prm?.separator ?? this.separatorTo });

		return this;
	}

	public switchSeparator(prm?: { to?: SeparatorValue }): this {
		this.nominal = switchSeparator(this.nominal, { to: prm?.to ?? this.separatorTo });

		return this;
	}

	public addSeparator(prm?: {
		separator?: SeparatorValue;
		defValue?: string;
		toFixed?: number;
	}): this {
		this.nominal = setIntlThousandSeparator(this.nominal, {
			separator: prm?.separator ?? this.separatorTo,
			defValue: prm?.defValue,
			toFixed: prm?.toFixed
		});

		return this;
	}

	public addPrefix(prm?: { prefix?: string }): this {
		this.nominal = (prm?.prefix ?? '') + this.nominal;

		return this;
	}

	public addSuffix(prm?: { suffix?: string }): this {
		this.nominal = this.nominal + (prm?.suffix ?? '');

		return this;
	}

	public cleanFrom(prm?: { search?: string }): this {
		this.nominal = this.nominal.replaceAll(prm?.search ?? '', '');

		return this;
	}
}
