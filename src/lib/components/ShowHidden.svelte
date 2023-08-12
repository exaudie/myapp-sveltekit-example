<script lang="ts">
	export let isShow: boolean = true;
</script>

<div class="displays" class:display-none={!isShow}>
	<slot />
</div>

<style>
	.display-none {
		display: none;
	}
</style>
