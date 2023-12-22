<script lang="ts">
	import type { Skills } from '$lib/types/CurriculumVitaeType';
	import HeaderAction from '$lib/components/HeaderAction.svelte';

	export let data: Skills[];
</script>

<HeaderAction title="Skills" titleSize="1.2em" />
