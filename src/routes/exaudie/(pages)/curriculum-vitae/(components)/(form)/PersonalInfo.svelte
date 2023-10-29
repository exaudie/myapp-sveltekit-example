<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';
	import { setCurriculumVitaeScheme } from '../../(helpers)/CurriculumVitaeHelpers';

	let cv: CurrculumVitaeScheme  = setCurriculumVitaeScheme();
</script>

<LabelTop label="Personal Info" isBold={true} labelColor="--text-primary">
	<VerticalSpace height="8px" />
	<GridLayoutTwoColumn>
		<LabelTop label="First Name">
			<InputBasic placeholder="Enter First Name" bind:value={cv.personalInfo.firstName.value} />
		</LabelTop>

		<LabelTop label="Last Name">
			<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
		</LabelTop>

		<LabelTop label="Current Occupation">
			<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
		</LabelTop>
	</GridLayoutTwoColumn>

	<VerticalSpace height="8px" />

	<GridLayoutTwoColumn>
		<LabelTop label="Place Of Bird">
			<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
		</LabelTop>

		<LabelTop label="Date Of Bird">
			<InputDate placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
		</LabelTop>
	</GridLayoutTwoColumn>

	<VerticalSpace height="8px" />
	<LabelTop label="Address">
		<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
	</LabelTop>

	<VerticalSpace height="8px" />
	<LabelTop label="About Me">
		<InputBasic placeholder="Enter Last Name" bind:value={cv.personalInfo.lastName.value} />
	</LabelTop>
</LabelTop>
