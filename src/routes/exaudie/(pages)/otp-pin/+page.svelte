<script lang="ts">
	import type { SubmitFunction } from './$types';
	import type { ActionResult } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import OtpPin from './(components)/OtpPin.svelte';
	import LoadingDialog from '$lib/components/loading/LoadingDialog.svelte';

	let confirmOtpSubmit: HTMLFormElement;
	let isErrorOtp: boolean = false;
	let isLoading: boolean = false;
	let otpValue: string[] = [];

	const parseErrorMsg = (result: ActionResult) => {
		switch (result.type) {
			case 'failure':
				return result?.data?.message ?? '';

			case 'error':
				return result?.error?.message ?? '';

			default:
				return 'Internal Server Error';
		}
	};

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
	<OtpPin isError={isErrorOtp} on:Input={(evn) => onConfirmOtp(evn)} />
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
</style>
