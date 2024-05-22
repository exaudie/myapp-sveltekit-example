<script lang="ts">
	import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
	import { z, type ZodFormattedError } from 'zod';
	import { isDefine, isEmptyTo } from '$lib/helpers/DefaultValue';
	import { getZValidField, zReuiredField } from '$lib/helpers/InputValidation';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import InputNumber from '$lib/components/input/InputNumber.svelte';
	import InputText from '$lib/components/input/InputText.svelte';
	import SuffixField from '$lib/components/input/SuffixField.svelte';
	import FormLeftTitle from '$lib/components/layout-style/form-left-title/FormLeftTitle.svelte';
	import FormRightGrid from '$lib/components/layout-style/form-left-title/FormRightGrid.svelte';
	import moment from 'moment';
	import TextAreaCust from '$lib/components/input/TextAreaCust.svelte';
	import FormRightRow from '$lib/components/layout-style/form-left-title/FormRightRow.svelte';
	import SelectCust from '$lib/components/select/SelectCust.svelte';

	type FormSchemeType = {
		firstName: InputFieldScheme;
		lastName: InputFieldScheme;
		dayOfBirth: InputFieldScheme;
		age: InputFieldScheme;
		aboutMe: InputFieldScheme;
		education: InputFieldScheme;
	};

	let formScheme: FormSchemeType = {
		firstName: { value: '' },
		lastName: { value: '' },
		dayOfBirth: { value: '' },
		age: { value: '' },
		aboutMe: { value: '' },
		education: { value: '' }
	};

	const educationList: string[] = [
		'TK',
		'SD',
		'SMP',
		'SMA',
		'D1',
		'D2',
		'D3',
		'D4',
		'S1',
		'S2',
		'S3'
	];

	const zDayOfBirth = z.object({
		value: z.string().superRefine((val, ctx) => {
			if (val === '') {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Data is required'
				});
			}

			const dayOfBirth = moment(val);
			const toDay = moment(Date.now());

			const diff = toDay.diff(dayOfBirth, 'days', true);

			if (diff < 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `You'r not alive yet`
				});
			}
		})
	});

	const zLimitChar = (p?: { min?: number; max?: number }) =>
		z.object({
			value: z.string().superRefine((val, ctx) => {
				const min = p?.min ?? 0;
				const max = p?.max ?? 0;

				if (((val !== '' && min > 0) || min === 1) && val.length < min) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: `Min text of ${min} char`
					});
				}

				if (max !== 0 && val.length > max) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: `Max text of ${max} char`
					});
				}
			})
		});

	const zFormScheme = z.object({
		firstName: zReuiredField,
		lastName: zReuiredField,
		dayOfBirth: zDayOfBirth,
		age: zReuiredField,
		aboutMe: zLimitChar({ min: 20 }),
		education: zReuiredField
	});

	const setError = (p?: {
		form?: FormSchemeType;
		err?: ZodFormattedError<FormSchemeType>;
	}): FormSchemeType => ({
		firstName: {
			value: p?.form?.firstName?.value ?? '',
			isError: isDefine(p?.err?.firstName?.value?._errors[0]),

			errorMsg: isEmptyTo(p?.err?.firstName?.value?._errors[0])
		},
		lastName: {
			value: p?.form?.lastName?.value ?? '',
			isError: isDefine(p?.err?.lastName?.value?._errors[0]),
			errorMsg: isEmptyTo(p?.err?.lastName?.value?._errors[0])
		},
		dayOfBirth: {
			value: p?.form?.dayOfBirth?.value ?? '',
			isError: isDefine(p?.err?.dayOfBirth?.value?._errors[0]),
			errorMsg: isEmptyTo(p?.err?.dayOfBirth?.value?._errors[0])
		},
		age: {
			value: p?.form?.age?.value ?? '',
			isError: isDefine(p?.err?.age?.value?._errors[0]),
			errorMsg: isEmptyTo(p?.err?.age?.value?._errors[0])
		},
		aboutMe: {
			value: p?.form?.aboutMe?.value ?? '',
			isError: isDefine(p?.err?.aboutMe?.value?._errors[0]),
			errorMsg: isEmptyTo(p?.err?.aboutMe?.value?._errors[0])
		},
		education: {
			value: p?.form?.education?.value ?? '',
			isError: isDefine(p?.err?.education?.value?._errors[0]),
			errorMsg: isEmptyTo(p?.err?.education?.value?._errors[0])
		}
	});

	const onSave = async () => {
		const parse = await zFormScheme.safeParseAsync(formScheme);

		if (!parse.success) {
			const errMsg = parse.error.format();

			formScheme = setError({ form: formScheme, err: errMsg });
		}
	};

	const setAge = (p: { dayOfBirth: string }) => {
		const dayOfBirth = p.dayOfBirth;

		if (dayOfBirth === '') return '';

		const dayOfBirthMoment = moment(dayOfBirth);
		const toDay = moment(Date.now());

		const diffDay = toDay.diff(dayOfBirthMoment, 'days', true);
		const diffYear = toDay.diff(dayOfBirthMoment, 'years');

		if (diffDay < 0 || diffYear < 0) return '';

		return `${diffYear}`;
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
