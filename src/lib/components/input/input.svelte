<script lang="ts">
	export let type: string = 'text';
	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let isError: boolean = false;

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

<input use:typeAction {id} {name} {placeholder} bind:value class:error-border={isError} />

<style>
	input {
		padding: 12px 16px;
		border-radius: 4px;
		border: 1px solid #99a0af;
		text-overflow: ellipsis;
	}
	.error-border {
		border: 1px solid red;
	}
</style>
