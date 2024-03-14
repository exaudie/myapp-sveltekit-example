<script lang="ts">
	import NavPaging1 from '$lib/components/paging/NavPaging1.svelte';
</script>

<NavPaging1 lengthNavigate={6} itemsPerPage={5} dataList={Array.from({ length: 71 }, (_, idx) => idx + 1)} />
