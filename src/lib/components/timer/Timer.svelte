<script lang="ts">
	import type TimerHelper from './TimerHelper';
	import { onDestroy } from 'svelte';

	export let timerHelper: TimerHelper;

	let hour: number = 0;
	let minute: number = 0;
	let second: number = 0;

	const padView = (value: number, length: number = 2, char: string = '0') => {
		const { length: valLength } = `${value}`;

		if (valLength >= length) return `${value}`;

		return `${char.repeat(length - valLength)}${value}`;
	};

	timerHelper.onCountdown = (h, m, s) => ((hour = h), (minute = m), (second = s));

	onDestroy(() => timerHelper.destroy());
</script>

<p>({padView(hour)}:{padView(minute)}:{padView(second)})</p>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	p {
		font-weight: 700;
	}
</style>
