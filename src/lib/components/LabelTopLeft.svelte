<script lang="ts">
	export let label: string;
</script>

<article>
	<h5 class="label">{label}</h5>
	<slot />
</article>

<style>
	h5 {
		padding: 0;
		margin: 0;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
</style>
