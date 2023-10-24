<script lang="ts">
	import Input from './Input.svelte';

	export let type: HTMLInputElement['type'] = 'text';
	export let value: string;
</script>

<div class="input-customize">
	<Input {type} bind:value />
</div>
