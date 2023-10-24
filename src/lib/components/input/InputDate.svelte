<script lang="ts">
	import Input from './Input.svelte';

	export let type: 'date' | 'week' | 'time' | 'month' = 'date';
	export let value: string;
</script>

<div class="input-customize">
	<Input {type} bind:value />
</div>

<style>
	.input-customize {
	}
</style>
