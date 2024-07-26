<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let isError: boolean = false;

	let otpValue: string[] = Array(6).fill('');

	const regNominal = new RegExp(`^[\\d]{1}`);

	const dispatch = createEventDispatcher();

	const setNominalOnly = (value: string) => {
		let newValue: string = '';
		let tempValue: string = '';

		for (const elm of Array.from(value)) {
			tempValue += elm;

			const isMatch = regNominal.test(tempValue);
			if (!isMatch) tempValue = tempValue.substring(0, tempValue.length - 1);

			newValue = tempValue;
		}

		return newValue;
	};

	const setFieldFocus = (key: string) => {
		const elm: HTMLElement | null = document.querySelector(`#pin${key}`);

		if (elm) elm.focus();
	};

	const onInput = (idx: number) => {
		otpValue[idx] = setNominalOnly(otpValue[idx]);

		if (idx < otpValue.length) setFieldFocus(`${idx + 1}`);

		dispatch('Input', { otpValue });
	};

	const onFocus = () => {
		const someAreEmpty = otpValue.some((elm) => (elm ?? '') === '');

		if (!someAreEmpty) {
			setFieldFocus(`${otpValue.length - 1}`);

			return;
		}

		for (const key in otpValue) {
			if ((otpValue[key] ?? '') === '') {
				setFieldFocus(key);

				break;
			}
		}
	};

	const onKeydown = (evn: KeyboardEvent, idx: number) => {
		if (evn.metaKey) return;
		if (evn.key !== 'Backspace') return;

		if (isError) {
			otpValue.fill('');
			setFieldFocus('0');
			isError = false;

			return;
		}

		const someAreEmpty = otpValue.some((elm) => (elm ?? '') === '');
		if (!someAreEmpty) {
			setFieldFocus(`${otpValue.length - 1}`);

			return;
		}

		const nidx = idx > 0 ? idx - 1 : 0;
		otpValue[nidx] = '';
		setFieldFocus(`${nidx}`);
	};
</script>

<section class="otp-pin">
	{#each otpValue as val, idx}
		<div class="otp-pin-box" class:error={isError}>
			<input
				id="pin{idx}"
				type="text"
				maxlength="1"
				pattern="[0-9]*"
				inputmode="numeric"
				bind:value={val}
				on:input={() => onInput(idx)}
				on:focus={onFocus}
				on:keydown={(evn) => onKeydown(evn, idx)}
			/>
		</div>
	{/each}
</section>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	.otp-pin {
		display: flex;
		gap: 0.5em;
	}

	.otp-pin-box {
		width: 100%;
		max-width: 55px;
		height: 45px;
		padding: 0.3em;
		background-color: white;
		border: 1px solid silver;
		border-radius: 0.3em;

		input {
			width: 100%;
			height: 100%;
			outline: none;
			border: none;
			font-size: 1em;
			text-align: center;
			background-color: white;
			border-bottom: 2px solid transparent;

			&:focus {
				border-color: blue;
			}
		}

		&.error {
			border-color: red;
		}
	}
</style>
