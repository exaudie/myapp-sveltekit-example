<script lang="ts">
	import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
	import { z, type ZodFormattedError } from 'zod';
	import { isDefine } from '$lib/helpers/DefaultValue';
	import { getZValidField, zReuiredField } from '$lib/helpers/InputValidation';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import InputText from '$lib/components/input/InputText.svelte';
	import SuffixField from '$lib/components/input/SuffixField.svelte';
	import FormLeftTitle from '$lib/components/layout-style/form-left-title/FormLeftTitle.svelte';
	import FormRightGrid from '$lib/components/layout-style/form-left-title/FormRightGrid.svelte';

	type FormSchemeType = {
		firstName: InputFieldScheme;
		lastName: InputFieldScheme;
		dayOfBirth: InputFieldScheme;
		age: InputFieldScheme;
	};

	let formScheme: FormSchemeType = {
		firstName: { value: '' },
		lastName: { value: '' },
		dayOfBirth: { value: '' },
		age: { value: '' }
	};

	const zFormScheme = z.object({
		firstName: zReuiredField,
		lastName: zReuiredField,
		dayOfBirth: zReuiredField,
		age: zReuiredField
	});

	const setError = (p?: {
		form?: FormSchemeType;
		err?: ZodFormattedError<FormSchemeType>;
	}): FormSchemeType => ({
		firstName: {
			value: p?.form?.firstName?.value ?? '',
			isError: isDefine(p?.err?.firstName?.value?._errors[0])
		},
		lastName: {
			value: p?.form?.lastName?.value ?? '',
			isError: isDefine(p?.err?.lastName?.value?._errors[0])
		},
		dayOfBirth: {
			value: p?.form?.dayOfBirth?.value ?? '',
			isError: isDefine(p?.err?.dayOfBirth?.value?._errors[0])
		},
		age: {
			value: p?.form?.age?.value ?? '',
			isError: isDefine(p?.err?.age?.value?._errors[0])
		}
	});

	const onSave = async () => {
		const parse = await zFormScheme.safeParseAsync(formScheme);

		if (!parse.success) {
			const errMsg = parse.error.format();

			formScheme = setError({ form: formScheme, err: errMsg });
		}
	};
</script>

<main>
	<FormLeftTitle title="Data Personal">
		<FormRightGrid>
			<LabelTop label="First Name">
				<InputText
					required
					placeholder="Enter First Name"
					bind:isError={formScheme.firstName.isError}
					bind:value={formScheme.firstName.value}
					onValidate={(value) => getZValidField({ value, zScheme: zReuiredField })}
				/>
			</LabelTop>

			<LabelTop label="Last Name">
				<InputText
					placeholder="Enter Last Name"
					bind:isError={formScheme.lastName.isError}
					bind:value={formScheme.lastName.value}
				/>
			</LabelTop>

			<LabelTop label="Day Of Birth">
				<InputDate
					bind:isError={formScheme.dayOfBirth.isError}
					bind:value={formScheme.dayOfBirth.value}
				/>
			</LabelTop>

			<LabelTop label="Age">
				<SuffixField suffixText="Year">
					<InputNumber
						placeholder="Year age"
						bind:isError={formScheme.age.isError}
						bind:value={formScheme.age.value}
					/>
				</SuffixField>
			</LabelTop>
		</FormRightGrid>
	</FormLeftTitle>

	<FormLeftTitle title="Alamat"></FormLeftTitle>

	<FormLeftTitle title="Pendidikan"></FormLeftTitle>

	<FormLeftTitle>
		<div class="btn-wrap">
			<div class="item1">
				<Button label="cancel" isOutline={true} />
			</div>

			<div class="item2">
				<Button label="save" on:Click={onSave} />
			</div>
		</div>
	</FormLeftTitle>
</main>

<style lang="less">
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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas: '. item1 item2';
		gap: 1em;

		.item1 {
			grid-area: item1;
		}

		.item2 {
			grid-area: item2;
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.btn-wrap {
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas: 'item1 item2';
		}
	}
</style>
