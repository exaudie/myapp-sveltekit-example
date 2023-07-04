<script lang="ts">
	import Card from './Card.svelte';
	import Clicker from './Clicker.svelte';

	export let title: string;
	export let subtitle: string = '';
</script>

<Card>
	<Clicker on:onClick class="clicker">
		<div class="container">
			<h4><b>{title}</b></h4>
			<p>{subtitle}</p>
		</div>
	</Clicker>
</Card>

<style>
	.container {
		padding: 2px 16px;
	}
</style>
