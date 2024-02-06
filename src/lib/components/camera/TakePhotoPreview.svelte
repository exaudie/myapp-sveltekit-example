<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let imageSrc: string;

	const dispatch = createEventDispatcher();

	const onTakeItAgain = () => (imageSrc = '');

	const onSave = () => dispatch('Save');
</script>

<section>
	<img src={imageSrc} alt="preview" />

	<div class="footer-preview">
		<button class="take-again-btn" on:click={onTakeItAgain}>Take it again</button>

		<button class="save-btn" on:click={onSave}>Save</button>
	</div>
</section>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	section {
		width: 50vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		display: block;
		width: 70%;
	}

	.footer-preview {
		width: 70%;
		display: flex;
		justify-content: space-between;

		button {
			all: unset;
			cursor: pointer;
			width: 100%;
			text-align: center;
			height: 48px;
			font-weight: 600;

			&.save-btn {
				background-color: var(--primary-bgcolor);
				color: white;
			}

			&.take-again-btn {
				background-color: var(--secondary-bgcolor);
			}
		}
	}

	@media only screen and (max-width: 640px) {
		section,
		img,
		.footer-preview {
			width: 100%;
		}
	}
</style>
