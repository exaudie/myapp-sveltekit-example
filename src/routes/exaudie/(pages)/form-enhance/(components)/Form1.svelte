<script>
	import Button from '$lib/components/button/Button.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
</script>

<main>
	<div class="form-left-title-wrap">
		<InputDate value="" />

		<InputNumber value="" />
	</div>

	<div class="form-left-title-wrap">
		<InputDate value="" />

		<InputNumber value="" />
	</div>

	<div class="form-left-title-wrap">
		<InputDate value="" />

		<InputNumber value="" />
	</div>

	<div class="form-left-title-wrap">
		<div class="btn-wrap">
			<Button label="cancel" isOutline={true} />
			<Button label="save" />
		</div>
	</div>
</main>
