export default class TimerHelper {
	private static instance: TimerHelper;

	private interval?: NodeJS.Timeout;

	private oneSecondInMilli: number = 1000;
	private oneMinuteInSecond: number = 60;
	private oneHourInSecond: number = this.oneMinuteInSecond ** 2;

	private duration: number = 0;
	private now: number = 0;
	private end: number = 0;
	private count: number = 0;

	public onCountdown: OnCountdown = () => {};
	public onFinish: OnFinish = () => {};

	public static getInstance = () => this.instance || (this.instance = new this());

	public setDuration(p?: { hour?: number; minute?: number; second?: number }) {
		const hour: number = p?.hour ?? 0;
		const minute: number = p?.minute ?? 0;
		const second: number = p?.second ?? 0;

		this.duration = [second, minute, hour].reduce(
			(acc, curr, idx) => acc + curr * this.oneMinuteInSecond ** idx,
			0
		);

		return this;
	}

	private genCountdown() {
		this.count = Math.round((this.end - this.now) / this.oneSecondInMilli);

		const hour = Math.floor(this.count / this.oneHourInSecond);
		const minute = Math.floor((this.count - hour * this.oneHourInSecond) / this.oneMinuteInSecond);
		const second = this.count - hour * this.oneHourInSecond - minute * this.oneMinuteInSecond;

		return { hour, minute, second };
	}

	private updateTimer() {
		this.now = Date.now();

		const { hour, minute, second } = this.genCountdown();
		this.onCountdown(hour, minute, second);

		if (this.interval && this.count === 0) {
			clearInterval(this.interval);
			this.onFinish();
		}
	}

	public run() {
		this.now = Date.now();
		this.end = this.now + this.duration * this.oneSecondInMilli;

		const { hour, minute, second } = this.genCountdown();
		this.onCountdown(hour, minute, second);

		if (this.end > this.now) {
			this.interval = setInterval(() => this.updateTimer(), this.oneSecondInMilli);
		}

		return this;
	}

	public destroy() {
		if (this.interval) clearInterval(this.interval);
	}
}

interface OnCountdown {
	(hour: number, minute: number, second: number): void;
}

interface OnFinish {
	(): void;
}
