import type { NavButtonType } from '$lib/types/NavButtonType';

export default class NavButtonHelper {
	private static instance: NavButtonHelper;
	private active: number = 1;
	private navItems: NavButtonType[] = [];

	public static getInstance = () => this.instance || (this.instance = new this());

	public setItems(prm: { navItems: NavButtonType[] }): this {
		this.navItems = prm.navItems;

		return this;
	}

	public get getItems(): NavButtonType[] {
		return this.navItems;
	}

	public set setActive(active: number) {
		this.active = active;
	}

	public get getActive(): number {
		return this.active;
	}

	public isAvailableValue(value: number): boolean {
		let isAvailable: boolean = false;

		for (const elm of this.navItems) {
			if (elm.value === value) {
				isAvailable = true;

				break;
			}
		}

		return isAvailable;
	}
}
