<script lang="ts">
	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let isError: boolean = false;
</script>

<select
	{id}
	{name}
	bind:value
	class="customize"
	class:error-border={isError}
	class:text-empty={value == ''}
>
	<option value="" disabled={true} selected={true} hidden={true}>{placeholder}</option>
	<slot />
</select>

<style>
	select {
		background-color: white;
		border: thin solid #99a0af;
		border-radius: 4px;
		color: var(--text-primary);
		display: inline-block;
		font: inherit;
		line-height: 1.5em;
		padding: 0.5em 3.5em 0.5em 1em;
		text-overflow: ellipsis;
	}

	.error-border {
		border: 1px solid var(--danger-state);
	}

	.text-empty {
		color: var(--text-scondary);
	}
</style>
