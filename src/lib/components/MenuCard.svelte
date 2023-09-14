<script lang="ts">
	import Card from './card/Card.svelte';
	import CardWithHover from './card/CardWithHover.svelte';

	export let title: string;
	export let subtitle: string = '';
	export let link: string = '';
</script>

<CardWithHover>
	<a href={link}>
		<div class="container">
			<h4><b>{title}</b></h4>
			<p>{subtitle}</p>
		</div>
	</a>
</CardWithHover>

<style>
	.container {
		padding: 2px 16px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
