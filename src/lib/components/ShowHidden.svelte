<script lang="ts">
	export let isShow: boolean = true;
</script>

{#if isShow}
	<slot />
{/if}
