<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';

	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let valueAlign: 'start' | 'end' | 'center' = 'start';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let isError: boolean = false;

	let isPlaceholder: boolean = true;

	const dispatch = createEventDispatcher();

	const onChange = () => {
		dispatch('Change');

		isPlaceholder = false;
	};

	const onFocus = () => dispatch('Focus');
</script>

<select
	{id}
	{name}
	{required}
	{disabled}
	bind:value
	class="customize"
	class:read-only={readonly}
	class:error-border={isError}
	class:empty-value={value === ''}
	style="--value-align:{valueAlign};"
	on:change={onChange}
	on:focus={onFocus}
>
	<ShowHidden isShow={isPlaceholder}>
		<option value="" disabled={true} selected={true} hidden={true}>{placeholder}</option>
	</ShowHidden>

	<slot />
</select>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-family: var(--font-body);
	}

	select {
		&.customize {
			width: 100%;
			display: inline-block;
			background-color: white;
			border: 1px solid rgba(128, 128, 128, 0.5);
			border-radius: 4px;
			padding: 0.7em 1em;

			text-overflow: ellipsis;
			color: var(--text-primary);
			text-align: var(--value-align);
			font-size: 1em;
		}

		& :global(option) {
			color: var(--text-primary);
		}

		&::placeholder,
		& :global(option:disabled),
		& :global(option[value='']) {
			color: var(--text-secondary);
			opacity: 1;
		}

		&:focus,
		&:hover {
			outline: none;
			border-color: royalblue;
		}

		&:disabled,
		&.read-only {
			background-color: rgba(128, 128, 128, 0.3);
			&:hover {
				border-color: rgba(128, 128, 128, 0.5);
			}
		}

		&.read-only {
			pointer-events: none;
		}

		&.error-border {
			border-color: var(--danger-state);
		}

		&.empty-value {
			color: var(--text-secondary);
		}
	}
</style>
