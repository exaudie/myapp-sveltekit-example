<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import InputText from '$lib/components/input/InputText.svelte';
	import TextArea from '$lib/components/input/TextArea.svelte';
	import FormLeftTitle from '$lib/components/layout-style/form-left-title/FormLeftTitle.svelte';
	import FormRightColumn from '$lib/components/layout-style/form-left-title/FormRightColumn.svelte';
	import FormRightRow from '$lib/components/layout-style/form-left-title/FormRightRow.svelte';
	import Select from '$lib/components/select/Select.svelte';

	const selection = [];
</script>

<main>
	<FormLeftTitle title="Title" subtitle="subtitle">
		<FormRightRow padding="0 0 1em 0" lineBottom="1px solid var(--text-secondary)">
			<FormRightColumn>
				<InputDate value="" />

				<InputNumber value="" placeholder="0.00" />
			</FormRightColumn>

			<InputNumber value="" placeholder="0.00" />
		</FormRightRow>
	</FormLeftTitle>

	<FormLeftTitle
		title="Bank Penerima Pembayaran"
		subtitle="Lengkapi informasi bank penerima pembayaran sesuai yang tercantum dalam dokumen."
	>
		<FormRightColumn>
			<InputDate value="" />

			<InputNumber value="" />
		</FormRightColumn>
	</FormLeftTitle>

	<FormLeftTitle title="Title" subtitle="subtitle">
		<FormRightColumn>
			<InputDate value="" />
			<Select value="selectio" />
		</FormRightColumn>
	</FormLeftTitle>

	<FormLeftTitle title="Title" subtitle="subtitle">
		<FormRightRow>
			<FormRightColumn>
				<InputDate value="" />

				<InputText value="" placeholder="Enter a texts" />

				<InputNumber value="" placeholder="0.00" />
			</FormRightColumn>

			<Select value="selectio" />

			<TextArea value="textarea" />
		</FormRightRow>
	</FormLeftTitle>

	<FormLeftTitle>
		<div class="btn-wrap">
			<Button label="cancel" isOutline={true} />
			<Button label="save" />
		</div>
	</FormLeftTitle>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.btn-wrap {
		display: flex;
		justify-content: end;
		gap: 1em;
	}
</style>
