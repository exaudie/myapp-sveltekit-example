export default class NavPagingHelper {
	private static instance: NavPagingHelper;

	private dataList: DataList[] = [];
	private dataListPage: DataList[] = [];
	private startDataPage: number = 1;
	private endDataPage: number = 1;
	private totalData: number = 0;

	private currentPage: number = 1;
	private totalPage: number = 1;
	private itemsPerPage: number = 5;
	private lengthNavigate: number = 5;
	private startNavPage: number = 1;
	private endNavPage: number = 1;
	private navLength: number = 0;
	private navMedian: number = 0;
	private navExpanded: number = 0;
	private isWithDot: boolean = false;
	private isShowToEnd: boolean = false;
	private navItems: number[] = [];

	public static getInstance = () => this.instance || (this.instance = new this());

	public setLengthNavigate(lengthNavigate: number): this {
		this.lengthNavigate = lengthNavigate;

		return this;
	}

	public setTotalPage(totalPage: number): this {
		this.totalPage = totalPage;

		return this;
	}

	public setItemsPerPage(itemsPerPage: number): this {
		this.itemsPerPage = itemsPerPage;

		return this;
	}

	public setDataList(prm: { dataList: DataList[] }): this {
		this.dataList = prm.dataList;

		return this;
	}

	public buildNavPage(): this {
		this.setDependency();
		this.generateNav({ page: this.currentPage });
		this.setDataListPage({ page: this.currentPage });

		return this;
	}

	public get getDataListPage(): DataList[] {
		return this.dataListPage;
	}

	public get getStartDataPage(): number {
		return this.startDataPage;
	}

	public get getEndDataPage(): number {
		return this.endDataPage;
	}
	public get getTotalData(): number {
		return this.totalData;
	}

	public get getNavItems(): number[] {
		return this.navItems;
	}

	public set setCurrentPage(page: number) {
		this.currentPage = page;
		this.generateNav({ page: this.currentPage });
		this.setDataListPage({ page: this.currentPage });
	}

	public get getCurrentPage(): number {
		return this.currentPage;
	}

	public get getStartNavPage(): number {
		return this.startNavPage;
	}

	public get getEndNavPage(): number {
		return this.endNavPage;
	}

	public get getPrevPage(): number {
		if (this.isToFirst) return (this.currentPage -= 1);

		return this.currentPage;
	}

	public get getNextPage(): number {
		if (this.isToLast) return (this.currentPage += 1);

		return this.currentPage;
	}

	public get isToFirst(): boolean {
		return this.currentPage > 1;
	}

	public get isToLast(): boolean {
		return this.currentPage < this.endNavPage;
	}

	public withToEnd(isToEnd?: boolean): this {
		this.isShowToEnd = isToEnd ?? true;

		return this;
	}

	public get isToEnd(): boolean {
		return this.isShowToEnd;
	}

	private setDependency() {
		this.totalData = this.dataList.length;
		const dataListPages: number = Math.ceil(this.totalData / this.itemsPerPage);

		this.endNavPage = this.totalData > 0 ? dataListPages : this.totalPage;

		const fixNavLength1: number =
			this.lengthNavigate > this.endNavPage ? this.endNavPage : this.lengthNavigate;

		const fixNavLength2: number = fixNavLength1 % 2 === 0 ? fixNavLength1 - 1 : fixNavLength1;

		this.isWithDot = (!this.isToEnd && fixNavLength2 > 5) || (this.isToEnd && fixNavLength2 > 3);
		this.navLength = this.isWithDot && !this.isToEnd ? fixNavLength2 - 2 : fixNavLength2;
		this.navMedian = (this.navLength + 1) / 2;
		this.navExpanded = this.navMedian - this.startNavPage;
	}

	private setDataListPage(prm: { page: number }): this {
		let dataList: DataList[] = [];

		const startIdx = (prm.page - 1) * this.itemsPerPage;
		this.startDataPage = startIdx + 1;
		const endIdx = Math.min(prm.page * this.itemsPerPage, this.totalData);
		this.endDataPage = endIdx;

		for (let i = startIdx; i < endIdx; i++) {
			if (!this.dataList[i]) break;

			dataList = [...dataList, ...[this.dataList[i]]];
		}

		this.dataListPage = dataList;

		return this;
	}

	private generateNav(prm: { page: number }): this {
		const page: number = prm.page;

		let navList: number[] = this.isWithDot && !this.isToEnd ? [this.startNavPage] : [];

		let startNavCenter: number = this.currentPage - this.navExpanded;
		let endNavCenter: number = this.currentPage + this.navExpanded;

		if (page <= this.navMedian) {
			startNavCenter = this.isWithDot && !this.isToEnd ? this.startNavPage + 1 : this.startNavPage;
			endNavCenter = startNavCenter + (this.navLength - 1);
		}

		if (page > this.endNavPage - this.navMedian) {
			endNavCenter = this.isWithDot && !this.isToEnd ? this.endNavPage - 1 : this.endNavPage;
			startNavCenter = endNavCenter - (this.navLength - 1);
		}

		for (let i = startNavCenter; i <= endNavCenter; i++) {
			let item: number = i;

			const startNavDot = !this.isToEnd ? this.startNavPage + 1 : this.startNavPage;
			if (this.isWithDot && i === startNavCenter && i !== startNavDot) item = -1;

			const endNavDot = !this.isToEnd ? this.endNavPage - 1 : this.endNavPage;
			if (this.isWithDot && i === endNavCenter && i !== endNavDot) item = -1;

			navList = [...navList, ...[item]];
		}

		if (this.isWithDot && !this.isToEnd) navList = [...navList, ...[this.endNavPage]];

		this.navItems = navList;

		return this;
	}
}

type DataList = Record<string, string | number | boolean | null | undefined>;
