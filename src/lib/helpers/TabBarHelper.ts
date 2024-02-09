import type { TabItem } from '$lib/types/TabItemType';

export default class TabBarHelper {
	private static instance: TabBarHelper;
	private active: number = 1;
	private navItems: TabItem[] = [];

	public static getInstance = () => this.instance || (this.instance = new this());

	public set setItems(params: { navItems: TabItem[] }) {
		this.navItems = params.navItems;
	}

	public get getItems(): TabItem[] {
		return this.navItems;
	}

	public set setActive(active: number) {
		this.active = active;
	}

	public get getActive(): number {
		return this.active;
	}
}
