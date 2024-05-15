<script lang="ts">
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import PrefixField from '$lib/components/input/PrefixField.svelte';
</script>

<div class="left-title-component">
	<div class="left-title-wrap">
		<h3 class="left-title">Title</h3>
		<p class="left-subtitle">Subtitle</p>
	</div>

	<div class="right-content">
		<input type="text" placeholder="text 1" />
		<input type="text" placeholder="text 2" />
	</div>
</div>

<div class="left-title-component">
	<div class="left-title-wrap">
		<h3 class="left-title">Title</h3>
		<p class="left-subtitle">Subtitle</p>
	</div>

	<div class="right-content">
		<input type="text" placeholder="text 1" />
	</div>
</div>

<div class="left-title-component">
	<div class="left-title-wrap">
		<h3 class="left-title">Title</h3>
		<p class="left-subtitle">Subtitle</p>
	</div>

	<div class="right-content">
		<input type="text" placeholder="text 1" />
		<InputBasic value="" />
	</div>
</div>

<div class="left-title-component">
	<div class="left-title-wrap">
		<h3 class="left-title">Title</h3>
		<p class="left-subtitle">Subtitle</p>
	</div>

	<div class="right-content">
		<PrefixField prefixText="Rp">
			<input type="text" placeholder="text 1" />
		</PrefixField>

		<textarea>aa</textarea>
	</div>
</div>

<div class="left-title-component">
	<div class="left-title-wrap">
		<h3 class="left-title">Title</h3>
		<p class="left-subtitle">Subtitle</p>
	</div>

	<div class="right-content">
		<input type="text" placeholder="text 1" />
		<select>
			<option value="">qwe</option>
		</select>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.left-title-component {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1em;
		border: 1px dashed green;
	}

	.left-title-wrap {
		width: 100%;
		display: grid;

		border: 1px dashed goldenrod;
	}

	.right-content {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;

		border: 1px dashed blueviolet;
	}

	input {
		width: 100%;
	}

	@media only screen and (max-width: 480px) {
		.left-title-component {
			grid-template-columns: auto;
		}
	}
</style>
