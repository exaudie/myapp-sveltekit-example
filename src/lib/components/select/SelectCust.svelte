<script lang="ts">
	import type { OptionsItemType } from '$lib/types/OptionsItemType';
	import type { ValidateType } from '$lib/types/ValidateType';
	import { createEventDispatcher, onMount } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import SelectBasic from './SelectBasic.svelte';
	import ErrorMessageField from '../ErrorMessageField.svelte';

	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let valueAlign: 'start' | 'end' | 'center' = 'start';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let options: OptionsItemType[] | String[] = [];
	export let emptyOptions: string = '';
	export let isErrorReactive: boolean = false;
	export let isError: boolean = false;
	export let errorMessage: string = '';
	export let onValidate = (value: string): ValidateType => ({ isError: false, errorMessage: '' });

	let optionList: OptionsItemType[] = [];

	const dispatch = createEventDispatcher();

	const onChange = () => dispatch('Change');

	const onFocus = () => {
		dispatch('onFocus');

		isErrorReactive = true;
	};

	const setOptionList = (options: OptionsItemType[] | String[]): OptionsItemType[] => {
		if (typeof options[0] === 'string') {
			return (options as string[]).map((val): OptionsItemType => ({ value: val, label: val }));
		}

		return options as OptionsItemType[];
	};

	$: if (isErrorReactive) ({ isError, errorMessage } = onValidate(value));

	onMount(() => (optionList = setOptionList(options)));
</script>

<div class="select-customize">
	<SelectBasic
		{id}
		{name}
		{required}
		{disabled}
		{readonly}
		{placeholder}
		{valueAlign}
		bind:value
		bind:isError
		on:Change={onChange}
		on:Focus={onFocus}
	>
		<ShowHidden isShow={emptyOptions !== ''}>
			<option value="">{emptyOptions}</option>
		</ShowHidden>

		{#each optionList as opt}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</SelectBasic>

	<ErrorMessageField {isError} message={errorMessage} />
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.select-customize {
		width: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		row-gap: 0.2em;
	}
</style>
