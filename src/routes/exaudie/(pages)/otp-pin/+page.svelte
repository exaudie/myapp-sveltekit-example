<script lang="ts">
	import type { ContentConfirmType } from '$lib/types/ ContentConfirmType';
	import type { SubmitFunction } from './$types';
	import { enhance } from '$app/forms';
	import { parseErrorMsg } from '$lib/helpers/ContentConfirmHelpers';
	import LoadingDialog from '$lib/components/loading/LoadingDialog.svelte';
	import OtpPin from './(components)/OtpPin.svelte';
	import Timer from '../../../../lib/components/timer/Timer.svelte';
	import TimerHelper from '$lib/components/timer/TimerHelper';

	let confirmOtpSubmit: HTMLFormElement;
	let isErrorOtp: boolean = false;
	let isLoading: boolean = false;
	let isResend: boolean = false;
	let otpValue: string[] = [];
	let contentConfirm: ContentConfirmType;

	let timerHelper = new TimerHelper().setDuration({ second: 10 }).run();
	timerHelper.onFinish = () => (isResend = true);

	const confirmOtpEnhance: SubmitFunction = ({ formData }) => {
		isLoading = true;

		formData.append('otp', otpValue.join(''));

		return async ({ result }) => {
			isLoading = false;

			if (result.type === 'success') {
				isErrorOtp = false;

				return;
			}

			isErrorOtp = true;
			parseErrorMsg(result);
		};
	};

	const onConfirmOtp = (evn: CustomEvent) => {
		otpValue = evn?.detail?.otpValue ?? [];
		const someAreEmpty = otpValue.some((elm) => (elm ?? '') === '');

		if (!someAreEmpty) confirmOtpSubmit.requestSubmit();
	};

	const onResend = () => {
		timerHelper.run();
		isResend = false;
	};
</script>

<form
	bind:this={confirmOtpSubmit}
	method="post"
	action="?/confirmOtp"
	use:enhance={confirmOtpEnhance}
	hidden={true}
/>

<LoadingDialog isShow={isLoading} />

<article>
	<h4>Verifikasi OTP</h4>

	<OtpPin isError={isErrorOtp} on:Input={(evn) => onConfirmOtp(evn)} />

	<div class="resend-timer">
		<button type="button" class:resend={isResend} on:click={() => (isResend ? onResend() : null)}>
			Resend Code
		</button>

		<Timer bind:timerHelper />
	</div>
</article>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}

	.resend-timer {
		display: flex;
		gap: 0.5em;

		button {
			all: unset;

			&.resend {
				cursor: pointer;
				color: blue;
				font-weight: 700;
			}
		}
	}
</style>
