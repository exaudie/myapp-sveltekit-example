<script lang="ts">
	import type { SocialMedia } from '$lib/types/CurriculumVitaeType';
	import HeaderAction from '$lib/components/HeaderAction.svelte';

	export let data: SocialMedia[];
</script>

<HeaderAction title="Social Media" titleSize="1.2em" />
