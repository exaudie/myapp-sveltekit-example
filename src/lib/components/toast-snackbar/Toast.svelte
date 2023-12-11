<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '../icon-svelte/CloseIcon.svelte';
	import ErrorIcon from '../icon-svelte/ErrorIcon.svelte';
	import InfoIcon from '../icon-svelte/InfoIcon.svelte';
	import SuccessIcon from '../icon-svelte/SuccessIcon.svelte';
	import ShowHidden from '../ShowHidden.svelte';

	export let type: 'error' | 'success' | 'info' = 'info';
	export let dismissible: boolean = true;
	export let message: string = 'Enter a message';

	const dispatch = createEventDispatcher();

	const onDismiss = () => dispatch('Dismiss');
</script>

<article class={type} role="alert">
	<ShowHidden isShow={type === 'success'}>
		<SuccessIcon width="1.1em" />
	</ShowHidden>

	<ShowHidden isShow={type === 'error'}>
		<ErrorIcon width="1.1em" />
	</ShowHidden>

	<ShowHidden isShow={type === 'info'}>
		<InfoIcon width="1.1em" />
	</ShowHidden>

	<p class="message">
		<slot>{message}</slot>
	</p>

	<ShowHidden isShow={dismissible}>
		<button class="close" on:click={onDismiss}>
			<CloseIcon width="0.8em" />
		</button>
	</ShowHidden>
</article>

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	article {
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.2rem;
		display: flex;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 25rem;
		pointer-events: auto;
	}

	.error {
		background: IndianRed;
	}

	.success {
		background: MediumSeaGreen;
	}

	.info {
		background: SkyBlue;
	}

	.message {
		margin-left: 1rem;
	}

	button {
		cursor: pointer;
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
