<script lang="ts">
	import HeaderAction from '$lib/components/HeaderAction.svelte';
  import type { Experience } from '$lib/types/CurriculumVitaeType';
  export let data: Experience[];
</script>

<HeaderAction title="Experience" titleSize="1.2em" />
