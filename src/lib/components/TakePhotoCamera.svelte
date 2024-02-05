<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	let video: HTMLVideoElement;
	let click_button = document.querySelector('#click-photo');
	let canvas = document.querySelector('#canvas');

	const dispatch = createEventDispatcher();

	const cameraAccess = async () => {
		try {
			let stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			});
			video.srcObject = stream;

			stream.getVideoTracks();
		} catch (err) {}
	};

	const cameraStop = () => {
		const stream: MediaProvider = video.srcObject as MediaStream;

		if (stream === null) return;

		const tracks: MediaStreamTrack[] = stream.getVideoTracks();
		tracks.forEach((track) => track.stop());
		video.srcObject = null;
	};

	// click_button.addEventListener('click', function () {
	// 	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	// 	let image_data_url = canvas.toDataURL('image/jpeg');

	// 	// data url of the image
	// 	console.log(image_data_url);
	// });

	onMount(async () => {
		await cameraAccess();
	});

	onDestroy(() => {
		cameraStop();
	});
</script>

<section>
	<video bind:this={video} autoplay playsinline>
		<track kind="captions" />
	</video>

	<div class="footer-camera">
		<button on:click={() => {}}></button>
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
	}

	video {
		height: 55vh;
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
		section {
			width: 100%;
		}
	}
</style>
