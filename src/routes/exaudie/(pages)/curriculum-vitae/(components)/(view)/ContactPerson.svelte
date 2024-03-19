<script lang="ts">
	import type { ContactPerson } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	export let data: ContactPerson;
</script>

<HeaderAction title="Contact Person" titleSize="1.2em" titleColor="--text-primary" />

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="Phone">
		<span>{isEmptyTo(data.phone, { defValue: '-' })}</span>
	</LabelTop>

	<LabelTop label="Email">
		<span>{isEmptyTo(data.email, { defValue: '-' })}</span>
	</LabelTop>
</GridLayoutTwoColumn>
