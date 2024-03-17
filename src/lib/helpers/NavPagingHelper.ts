export default class NavPagingHelper {
	private static instance: NavPagingHelper;

	private dataList: object[] = [];
	private totalPage: number = 1;
	private currentPage: number = 1;
	private itemsPerPage: number = 5;
	private dataListPages: number = 0;
	private lengthNavigate: number = 5;
	private startPage: number = 1;
	private endPage: number = 1;
	private fixNavLength1: number = 0;
	private fixNavLength2: number = 0;
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

	public get getItemsPerPage(): number {
		return this.itemsPerPage;
	}

	public setDataList(prm: { dataList: object[] }): this {
		this.dataList = prm.dataList;

		return this;
	}

	public buildNavPage(): this {
		this.setDependency();
		this.generateNav({ page: this.currentPage });

		return this;
	}

	public get getItems(): number[] {
		return this.navItems;
	}

	public set setCurrentPage(page: number) {
		this.currentPage = page;
		this.generateNav({ page: this.currentPage });
	}

	public get getCurrentPage(): number {
		return this.currentPage;
	}

	public get getStartPage(): number {
		return this.startPage;
	}

	public get getEndPage(): number {
		return this.endPage;
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
		return this.currentPage < this.endPage;
	}

	public withToEnd(isToEnd?: boolean): this {
		this.isShowToEnd = isToEnd ?? true;

		return this;
	}

	public get isToEnd(): boolean {
		return this.isShowToEnd;
	}

	private setDependency() {
		this.dataListPages = Math.ceil(this.dataList.length / this.itemsPerPage);
		this.endPage = this.dataList.length > 0 ? this.dataListPages : this.totalPage;
		this.fixNavLength1 = this.lengthNavigate > this.endPage ? this.endPage : this.lengthNavigate;
		this.fixNavLength2 = this.fixNavLength1 % 2 === 0 ? this.fixNavLength1 - 1 : this.fixNavLength1;
		this.isWithDot = (!this.isToEnd && this.fixNavLength2 > 5) || this.isToEnd;
		this.navLength = this.isWithDot && !this.isToEnd ? this.fixNavLength2 - 2 : this.fixNavLength2;
		this.navMedian = (this.navLength + 1) / 2;
		this.navExpanded = this.navMedian - this.startPage;
	}

	private generateNav(prm: { page: number }): this {
		const page: number = prm.page;

		let navList: number[] = this.isWithDot && !this.isToEnd ? [this.startPage] : [];

		let startNavCenter: number = this.currentPage - this.navExpanded;
		let endNavCenter: number = this.currentPage + this.navExpanded;

		if (page <= this.navMedian) {
			startNavCenter = this.isWithDot && !this.isToEnd ? this.startPage + 1 : this.startPage;
			endNavCenter = startNavCenter + (this.navLength - 1);
		}

		if (page > this.endPage - this.navMedian) {
			endNavCenter = this.isWithDot && !this.isToEnd ? this.endPage - 1 : this.endPage;
			startNavCenter = endNavCenter - (this.navLength - 1);
		}

		for (let i = startNavCenter; i <= endNavCenter; i++) {
			let item: number = i;

			const startNavDot = !this.isToEnd ? this.startPage + 1 : this.startPage;
			if (this.isWithDot && i === startNavCenter && i !== startNavDot) item = -1;

			const endNavDot = !this.isToEnd ? this.endPage - 1 : this.endPage;
			if (this.isWithDot && i === endNavCenter && i !== endNavDot) item = -1;

			navList = [...navList, ...[item]];
		}

		if (this.isWithDot && !this.isToEnd) navList = [...navList, ...[this.endPage]];

		this.navItems = navList;

		return this;
	}
}
