<script lang="ts">
	import type { PersonalInfo } from '$lib/types/CurriculumVitaeType';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import { dateddmmmmyyyyCust } from '$lib/helpers/DateFormatter';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	export let data: PersonalInfo;
</script>

<HeaderAction title="Personal Info" titleSize="1.2em" />

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="First Name">
		<span>{isEmptyTo(data.firstName, { defValue: '-' })}</span>
	</LabelTop>

	<LabelTop label="Last Name">
		<span>{isEmptyTo(data.lastName, { defValue: '-' })}</span>
	</LabelTop>

	<LabelTop label="Current Occupation">
		<span>{isEmptyTo(data.currentJob, { defValue: '-' })}</span>
	</LabelTop>
</GridLayoutTwoColumn>

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="Place Of Birth">
		<span>{isEmptyTo(data.placeOfBirth, { defValue: '-' })}</span>
	</LabelTop>

	<LabelTop label="Day Of Birth">
		<span>{dateddmmmmyyyyCust(data.dayOfBirth, { defValue: '-' })}</span>
	</LabelTop>
</GridLayoutTwoColumn>

<VerticalSpace height="1em" />
<LabelTop label="Address">
	<span>{isEmptyTo(data.address, { defValue: '-' })}</span>
</LabelTop>

<VerticalSpace height="1em" />
<LabelTop label="About Me">
	<span>{isEmptyTo(data.aboutMe, { defValue: '-' })}</span>
</LabelTop>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>
