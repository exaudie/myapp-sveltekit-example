<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '$lib/images/icon/close_icon.svg';
	import Backdrop from '../Backdrop.svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import Dialog from './Dialog.svelte';

	export let isShow: boolean = false;
	export let title: string = '';
	export let titleColor: string = 'var(--text-primary)';
	export let desc: string = '';
	export let primaryText: string = '';
	export let primaryBgColor: string = 'var(--color-primary)';
	export let secondaryText: string = '';
	export let secondaryBgColor: string = 'var(--color-secondary)';

	const dispatch = createEventDispatcher();

	const onClose = () => {
		dispatch('Close');

		isShow = false;
	};

	const onCancel = () => {
		dispatch('Cancel');

		isShow = false;
	};

	const onConfirm = () => {
		dispatch('Confirm');

		isShow = false;
	};
</script>

<ShowHidden bind:isShow>
	<Backdrop bind:isShow withCloseEsc={true}>
		<div
			class="dialog-customize"
			style="--title-color:{titleColor};
							--primary-bgcolor:{primaryBgColor};
							--secondary-bgcolor:{secondaryBgColor};"
		>
			<Dialog bind:isShow>
				<article>
					<div class="header-title">
						<h3>{title}</h3>

						<button class="close" on:click={onClose}>
							<img src={CloseIcon} alt="close" />
						</button>
					</div>

					<div class="content-dialog">
						<slot>
							<p>{desc}</p>
						</slot>
					</div>

					<ShowHidden isShow={primaryText !== '' || secondaryText !== ''}>
						<div class="footer-btn">
							<ShowHidden isShow={secondaryText !== ''}>
								<button on:click={onCancel} class="secondary-btn">{secondaryText}</button>
							</ShowHidden>

							<ShowHidden isShow={primaryText !== ''}>
								<button on:click={onConfirm} class="primary-btn">{primaryText}</button>
							</ShowHidden>
						</div>
					</ShowHidden>
				</article>
			</Dialog>
		</div>
	</Backdrop>
</ShowHidden>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	button {
		all: unset;
		cursor: pointer;
		color: var(--text-primary);
	}

	.dialog-customize :global(dialog) {
		min-width: 25vw;
		border-radius: 0.4em;
		overflow: hidden;
	}

	.header-title {
		height: 48px;
		display: flex;
		align-items: center;
		padding-left: 1em;
		border-bottom: 1px solid grey;

		h3 {
			flex-grow: 1;
			text-align: center;
			color: var(--title-color);
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			margin-bottom: 1px;

			&:hover {
				background-color: rgba(237, 240, 243, 0.5);
			}

			img {
				display: block;
				width: 24px;
				height: 24px;
			}
		}
	}

	.content-dialog {
		color: var(--text-secondary);
		max-height: 75vh;
		overflow: auto;

		p {
			padding: 1em;
		}
	}

	.footer-btn {
		display: flex;
		justify-content: space-between;

		button {
			flex-grow: 1;
			text-align: center;
			height: 48px;
			font-weight: 600;

			&.primary-btn {
				background-color: var(--primary-bgcolor);
				color: white;
			}

			&.secondary-btn {
				background-color: var(--secondary-bgcolor);
			}
		}
	}
</style>
