<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';
	import { setCurriculumVitaeScheme } from '../../(helpers)/CurriculumVitaeHelpers';

	let cv: CurrculumVitaeScheme = setCurriculumVitaeScheme();
</script>

<LabelTop label="Contact Person" isBold={true} labelColor="--text-primary">
	<VerticalSpace height="8px" />
	<GridLayoutTwoColumn>
		<LabelTop label="Phone">
			<InputBasic placeholder="Enter First Name" bind:value={cv.personalInfo.firstName.value} />
		</LabelTop>

		<LabelTop label="Email">
			<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
		</LabelTop>
	</GridLayoutTwoColumn>
</LabelTop>
