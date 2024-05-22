<script lang="ts">
	import ErrorIcon from '$lib/images/icon/error_icon.svg';

	export let isError: boolean = false;
	export let message: string = '';
	export let icon: string = ErrorIcon;
</script>

{#if isError}
	<div class="error-preview">
		<img src={icon} alt="icon" class="error-icon" />

		<p class="error-message">{message}</p>
	</div>
{/if}

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-family: var(--font-body);
	}

	.error-preview {
		display: flex;
		column-gap: 0.3em;
		align-items: center;
		justify-content: start;

		img {
			display: block;
			width: 0.8em;
			height: 0.8em;
		}

		p {
			font-size: 0.8em;
			font-weight: 600;
			line-height: 1.2em;
		}
	}
</style>
