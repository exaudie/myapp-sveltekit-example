<script lang="ts">
	import type { PersonalInfoScheme } from '$lib/types/CurriculumVitaeType';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import PrefixField from '$lib/components/input/PrefixField.svelte';
	import TextArea from '$lib/components/input/TextArea.svelte';
	import SvelteIcon from '$lib/images/svelte-logo.svg';

	export let scheme: PersonalInfoScheme;
</script>

<HeaderExpand title="Personal Info" titleSize="1.2em" titleColor="--text-primary">
	<GridLayoutTwoColumn>
		<LabelTop label="First Name">
			<PrefixField prefixIcon={SvelteIcon}>
				<InputBasic placeholder="Enter First Name" bind:value={scheme.firstName.value} />
			</PrefixField>
		</LabelTop>

		<LabelTop label="Last Name">
			<PrefixField prefixText="Last">
				<InputBasic placeholder="Enter Last Name" bind:value={scheme.lastName.value} />
			</PrefixField>
		</LabelTop>

		<LabelTop label="Current Occupation">
			<PrefixField prefixIcon={SvelteIcon}>
				<InputBasic placeholder="Enter Current Occupation" bind:value={scheme.currentJob.value} />
			</PrefixField>
		</LabelTop>
	</GridLayoutTwoColumn>

	<VerticalSpace height="8px" />

	<GridLayoutTwoColumn>
		<LabelTop label="Place Of Bird">
			<PrefixField prefixIcon={SvelteIcon}>
				<InputBasic placeholder="Enter Place Of Bird" bind:value={scheme.placeOfBirth.value} />
			</PrefixField>
		</LabelTop>

		<LabelTop label="Date Of Bird">
			<PrefixField prefixIcon={SvelteIcon}>
				<InputDate placeholder="Enter Date Of Bird" bind:value={scheme.dayOfBirth.value} />
			</PrefixField>
		</LabelTop>
	</GridLayoutTwoColumn>

	<VerticalSpace height="8px" />
	<LabelTop label="Address">
		<PrefixField prefixIcon={SvelteIcon}>
			<InputBasic placeholder="Enter Address" bind:value={scheme.address.value} />
		</PrefixField>
	</LabelTop>

	<VerticalSpace height="8px" />
	<LabelTop label="About Me">
		<PrefixField prefixIcon={SvelteIcon}>
			<TextArea placeholder="Enter About Me" bind:value={scheme.aboutMe.value} />
		</PrefixField>
	</LabelTop>
</HeaderExpand>
