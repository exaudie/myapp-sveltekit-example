<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import CameraHelper from '$lib/helpers/CameraHelper';
	import ShowHidden from '../ShowHidden.svelte';

	let video: HTMLVideoElement;
	let camera: CameraHelper;
	let errorMessage: string = '';

	const dispatch = createEventDispatcher();

	const setUpCamera = async () => {
		try {
			camera = new CameraHelper({ video });
			await camera.cameraAccess();
		} catch (err) {
			errorMessage = `${err}`;
		}
	};

	const onCapture = () => dispatch('Capture', { image: camera.cameraCapture() });

	onMount(async () => setUpCamera());

	onDestroy(() => camera.cameraStop());
</script>

<section>
	<ShowHidden isShow={errorMessage === ''}>
		<video bind:this={video} autoplay playsinline>
			<track kind="captions" />
		</video>

		<div class="footer-camera">
			<button on:click={onCapture}></button>
		</div>
	</ShowHidden>

	<ShowHidden isShow={errorMessage !== ''}>
		<p>{errorMessage}</p>
	</ShowHidden>
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

		p {
			margin: 3em 2em;
			text-align: center;
			min-height: 15em;
		}
	}

	video,
	section > p {
		width: 70%;
	}

	.footer-camera {
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;

		button {
			cursor: pointer;
			width: 43px;
			height: 43px;
			border-radius: 50%;
			border: 1px solid gray;
			background-color: rgba(237, 240, 243, 0.5);
		}
	}

	@media only screen and (max-width: 640px) {
		section,
		video,
		section > p {
			width: 100%;
		}
	}
</style>
