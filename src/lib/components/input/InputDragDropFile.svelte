<script lang="ts">
	let filesUp: HTMLInputElement;
	let previewSrc: string = '';
</script>

<section>
	<label
		for="fileUploaded"
		id="dropContainer"
		on:dragover={(e) => {
			e.preventDefault();
		}}
		on:dragenter={(e) => {}}
		on:dragleave={(e) => {}}
		on:drop={(e) => {
			e.preventDefault();
			filesUp.files = e?.dataTransfer?.files ?? null;
		}}
		on:change={() => {
			if (filesUp && filesUp.files) {
				console.log('filesUp.files', filesUp.files);

				previewSrc = URL.createObjectURL(filesUp.files[0]);
			}
		}}
	>
		<span class="drop-title">Drop files here</span>
		or
		<input bind:this={filesUp} type="file" accept=".png, .jpg, .jpeg" id="fileUploaded" />
	</label>
</section>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	section,
	label {
		display: flex;
	}

	section {
		width: 50vw;
		justify-content: center;
		padding: 2em;
	}

	label {
		width: 70%;
		height: 12em;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
		padding: 20px;
		border-radius: 10px;
		border: 2px dashed #555;
		color: #444;
		cursor: pointer;
		transition:
			background 0.2s ease-in-out,
			border 0.2s ease-in-out;

		&:hover {
			background-color: #514f4f5a;
		}

		span,
		input {
			text-align: center;
			pointer-events: none;
			width: 100%;
		}

		input {
			border: 1px solid #222;
			border-radius: 0.5em;
		}
	}

	@media only screen and (max-width: 640px) {
		section,
		label {
			width: 100%;
		}
	}
</style>
