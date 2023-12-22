<script lang="ts">
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import type { Education } from '$lib/types/CurriculumVitaeType';

	export let data: Education[];
</script>

<HeaderAction title="Education" titleSize="1.2em" titleColor="--text-primary" />
