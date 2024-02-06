import { isDefine } from './DefaultValue';

export default class CameraHelper {
	private stream!: MediaStream;
	private video: HTMLVideoElement;

	constructor(params: { video: HTMLVideoElement }) {
		this.video = params.video;
	}

	public cameraAccess = async () => {
		try {
			this.stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			});

			this.video.srcObject = this.stream;
		} catch (err) {
			throw `${err}`;
		}
	};

	public cameraStop = () => {
		if (!isDefine(this.stream)) return;

		const tracks: MediaStreamTrack[] = this.stream.getVideoTracks();
		tracks.forEach((track) => track.stop());
	};

	public cameraCapture = () => {
		const canvas = document.createElement('canvas');
		const cntx = canvas.getContext('2d');

		if (!isDefine(cntx)) return;
		if (!this.video.videoWidth && !this.video.videoHeight) return;

		canvas.width = this.video.videoWidth;
		canvas.height = this.video.videoHeight;
		cntx!.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);

		return canvas.toDataURL('image/png');
	};
}
