<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import InputText from '$lib/components/input/InputText.svelte';
	import PrefixField from '$lib/components/input/PrefixField.svelte';
	import SuffixField from '$lib/components/input/SuffixField.svelte';
	import TextAreaBasic from '$lib/components/input/TextAreaBasic.svelte';
	import TextAreaCust from '$lib/components/input/TextAreaCust.svelte';
	import FormLeftTitle from '$lib/components/layout-style/form-left-title/FormLeftTitle.svelte';
	import FormRightGrid from '$lib/components/layout-style/form-left-title/FormRightGrid.svelte';
	import FormRightRow from '$lib/components/layout-style/form-left-title/FormRightRow.svelte';
	import SelectBasic from '$lib/components/select/SelectBasic.svelte';
	import SelectCust from '$lib/components/select/SelectCust.svelte';

	let formScheme = {
		selectValue: '',
		textAreaVelue: '',
		inputText: '',
		inputNumber: '10000',
		inputDate: ''
	};

	const options: string[] = Array.from({ length: 10 }, (_, idx) => idx + 1).map(
		(val) => 'Pilihan ' + val
	);

	const onFieldValidate = (val: string) => {
		if (val === '') return { isError: true, errorMessage: 'Field tidak boleh kosong' };

		return { isError: false, errorMessage: '' };
	};
</script>

<main>
	<FormLeftTitle title="Basic Form" subtitle="subtitle">
		<FormRightGrid>
			<InputBasic value="" placeholder="input basic" />

			<SelectBasic value="" placeholder="select basic">
				{#each options as opt}
					<option value={opt}>{opt}</option>
				{/each}
			</SelectBasic>

			<TextAreaBasic value="" placeholder="textarea" />

			<TextAreaBasic value="" autoHeight={true} placeholder="Please enter a text" />
		</FormRightGrid>
	</FormLeftTitle>

	<FormLeftTitle title="Form Customize" subtitle="subtitle">
		<FormRightGrid>
			<InputDate bind:value={formScheme.inputDate} onValidate={onFieldValidate} />

			<PrefixField prefixText="Rp">
				<InputNumber
					placeholder="0.00"
					withSeparator={true}
					bind:value={formScheme.inputNumber}
					onValidate={onFieldValidate}
				/>
			</PrefixField>

			<SelectCust
				emptyOptions="Select Empty"
				{options}
				placeholder="Please Choose.."
				bind:value={formScheme.selectValue}
				onValidate={onFieldValidate}
			/>

			<SelectCust
				emptyOptions="Select Empty"
				{options}
				valueAlign="center"
				readonly={true}
				placeholder="Please Choose.."
			/>

			<SelectCust
				emptyOptions="Select Empty"
				{options}
				valueAlign="end"
				disabled={true}
				placeholder="Please Choose.."
			/>

			<SuffixField suffixText="M">
				<InputText
					placeholder="Enter a texts"
					bind:value={formScheme.inputText}
					onValidate={onFieldValidate}
				/>
			</SuffixField>

			<SuffixField suffixText="M">
				<TextAreaCust placeholder="Text area" value="" />
			</SuffixField>

			<PrefixField prefixText="Rp">
				<TextAreaCust
					placeholder="Textarea cust"
					autoHeight={true}
					bind:value={formScheme.textAreaVelue}
					onValidate={onFieldValidate}
				/>
			</PrefixField>
		</FormRightGrid>
	</FormLeftTitle>

	<FormLeftTitle
		title="Bank Penerima Pembayaran"
		subtitle="Lengkapi informasi bank penerima pembayaran sesuai yang tercantum dalam dokumen."
	>
		<FormRightRow padding="0 0 1em 0" lineBottom="1px solid var(--text-secondary)">
			<FormRightGrid>
				<LabelTop label="Date">
					<InputDate value="" />
				</LabelTop>

				<LabelTop label="Nominal">
					<PrefixField prefixText="Rp">
						<InputNumber value="" withSeparator={true} placeholder="0.00" />
					</PrefixField>
				</LabelTop>
			</FormRightGrid>

			<LabelTop label="Coverage">
				<SuffixField suffixText="%">
					<InputNumber value="" placeholder="0.00" />
				</SuffixField>
			</LabelTop>
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
