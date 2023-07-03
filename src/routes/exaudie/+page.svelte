<script>
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>exaudie</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="card-wrap">
	<Card title="Button" />
	<Card title="Input Text" />
</div>

<style>
	.card-wrap {
		display: flex;
	}
</style>
