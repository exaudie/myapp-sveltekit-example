<script lang="ts">
	import {
		educationList,
		setAge,
		setFormScheme,
		zDayOfBirth,
		zFormScheme,
		zLimitChar,
		type FormSchemeType
	} from '../(helpers)/FormHelpers';
	import { getZValidField, zReuiredField } from '$lib/helpers/InputValidation';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import InputText from '$lib/components/input/InputText.svelte';
	import SuffixField from '$lib/components/input/SuffixField.svelte';
	import TextAreaCust from '$lib/components/input/TextAreaCust.svelte';
	import FormLeftTitle from '$lib/components/layout-style/form-left-title/FormLeftTitle.svelte';
	import FormRightGrid from '$lib/components/layout-style/form-left-title/FormRightGrid.svelte';
	import FormRightRow from '$lib/components/layout-style/form-left-title/FormRightRow.svelte';
	import SelectCust from '$lib/components/select/SelectCust.svelte';

	let formScheme: FormSchemeType = setFormScheme();

	const onSave = async () => {
		const parse = await zFormScheme.safeParseAsync(formScheme);

		if (!parse.success) {
			const errMsg = parse.error.format();

			formScheme = setFormScheme({ form: formScheme, err: errMsg });
		}
	};

	$: formScheme.age.value = setAge({ dayOfBirth: formScheme.dayOfBirth.value });
</script>

<main>
	<FormLeftTitle title="Data Personal">
		<FormRightRow>
			<FormRightGrid>
				<LabelTop label="First Name">
					<InputText
						required
						placeholder="Enter First Name"
						bind:isError={formScheme.firstName.isError}
						bind:errorMessage={formScheme.firstName.errorMsg}
						bind:value={formScheme.firstName.value}
						onValidate={(value) => getZValidField({ value, zScheme: zReuiredField })}
					/>
				</LabelTop>

				<LabelTop label="Last Name">
					<InputText
						placeholder="Enter Last Name"
						bind:isError={formScheme.lastName.isError}
						bind:errorMessage={formScheme.lastName.errorMsg}
						bind:value={formScheme.lastName.value}
					/>
				</LabelTop>

				<LabelTop label="Day Of Birth">
					<InputDate
						bind:isError={formScheme.dayOfBirth.isError}
						bind:errorMessage={formScheme.dayOfBirth.errorMsg}
						bind:value={formScheme.dayOfBirth.value}
						onValidate={(value) => getZValidField({ value, zScheme: zDayOfBirth })}
					/>
				</LabelTop>

				<LabelTop label="Age">
					<SuffixField suffixText="Year">
						<InputNumber
							placeholder="Year age"
							readonly={true}
							isErrorReactive={formScheme.age.value !== ''}
							bind:isError={formScheme.age.isError}
							bind:errorMessage={formScheme.age.errorMsg}
							bind:value={formScheme.age.value}
							onValidate={(value) => getZValidField({ value, zScheme: zReuiredField })}
						/>
					</SuffixField>
				</LabelTop>
			</FormRightGrid>

			<LabelTop label="About Me">
				<TextAreaCust
					placeholder="Enter Last Name"
					bind:isError={formScheme.aboutMe.isError}
					bind:errorMessage={formScheme.aboutMe.errorMsg}
					bind:value={formScheme.aboutMe.value}
					onValidate={(value) => getZValidField({ value, zScheme: zLimitChar({ min: 20 }) })}
				/>
			</LabelTop>
		</FormRightRow>
	</FormLeftTitle>

	<FormLeftTitle title="Alamat"></FormLeftTitle>

	<FormLeftTitle title="Pendidikan">
		<FormRightGrid>
			<LabelTop label="Last Education">
				<SelectCust
					placeholder="Select Education"
					emptyOptions="Empty"
					options={educationList}
					bind:isError={formScheme.education.isError}
					bind:errorMessage={formScheme.education.errorMsg}
					bind:value={formScheme.education.value}
				/>
			</LabelTop>
		</FormRightGrid>
	</FormLeftTitle>

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
