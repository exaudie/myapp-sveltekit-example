<script lang="ts">
	import type Quill from 'quill';
	import { getZValidField, zReuiredField } from '$lib/helpers/InputValidation';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import ErrorMessageField from '../ErrorMessageField.svelte';

	export let placeholder: string = '';
	export let value: string;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let isErrorReactive: boolean = false;
	export let isError: boolean = false;
	export let errorMessage: string = '';

	let editor: HTMLElement;
	let quill: Quill;
	let valueText: string = '';

	const dispatch = createEventDispatcher();

	const onChange = () => {
		valueText = quill.getText().trim();
		value = quill.getSemanticHTML().trim();

		dispatch('Change', { text: valueText, html: value });
	};

	const onFocus = (elm?: HTMLElement | null) => {
		if (!elm) return;
		const e: HTMLElement | null = elm && elm.querySelector('.ql-editor');

		if (!e) return;

		e.onfocus = () => {
			isErrorReactive = true;
		};
	};

	const init = async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			readOnly: readonly,
			theme: 'snow',
			placeholder
		});
		quill.enable(!disabled);
		quill.on('text-change', onChange);

		onFocus(editor);
	};

	$: if (required && isErrorReactive)
		({ isError, errorMessage } = getZValidField({ value: valueText, zScheme: zReuiredField }));

	onMount(async () => init());
	onDestroy(() => quill && quill.off('text-change', onChange));
</script>

<div class="input-customize">
	<div class="editor-wrap" class:error-border={isError}>
		<div bind:this={editor} />
	</div>

	<ErrorMessageField {isError} message={errorMessage} />
</div>

<style lang="less">
	@import 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css';

	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-family: var(--font-body);
	}

	.input-customize {
		width: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		row-gap: 0.2em;
	}

	.editor-wrap {
		background-color: #fff;
		border-radius: 4px;

		& :global(.ql-toolbar) {
			border-radius: 4px 4px 0 0;
			border-color: rgba(128, 128, 128, 0.5);
		}

		& :global(.ql-container) {
			border-radius: 0 0 4px 4px;
			border-color: rgba(128, 128, 128, 0.5);
			color: var(--text-primary);
			font-size: 1em;
		}

		& :global(.ql-editor.ql-blank::before) {
			color: var(--text-secondary);
			opacity: 1;
			font-style: normal;
		}

		&:has(.ql-editor:focus) {
			& :global(.ql-toolbar) {
				border-color: royalblue royalblue rgba(128, 128, 128, 0.5) royalblue;
			}

			& :global(.ql-container) {
				border-color: rgba(128, 128, 128, 0.5) royalblue royalblue royalblue;
			}
		}
	}

	.error-border {
		& :global(.ql-toolbar) {
			border-color: var(--danger-state) var(--danger-state) rgba(128, 128, 128, 0.5)
				var(--danger-state) !important;
		}

		& :global(.ql-container) {
			border-color: rgba(128, 128, 128, 0.5) var(--danger-state) var(--danger-state)
				var(--danger-state) !important;
		}
	}
</style>
