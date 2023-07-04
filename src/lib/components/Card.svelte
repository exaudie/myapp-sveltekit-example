<script lang="ts">
	import Clicker from './Clicker.svelte';
</script>

<div class="card">
	<slot />
</div>

<style>
	.card {
		width: 100%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		cursor: pointer;
	}

	.card :global(.clicker) {
		width: 100%;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
</style>
