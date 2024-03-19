<script lang="ts">
	import type { SocialMedia } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	export let datas: SocialMedia[];
</script>

<HeaderAction title="Social Media" titleSize="1.2em" />

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="Social Media Name" />
	<LabelTop label="Link account" />

	{#each datas as data}
		<span>{isEmptyTo(data.sosmedName, { defValue: '-' })}</span>

		<span>{isEmptyTo(data.sosmedLink, { defValue: '-' })}</span>
	{/each}
</GridLayoutTwoColumn>
