<script lang="ts">
	import type { ContactPersonScheme } from '$lib/types/CurriculumVitaeType';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import PrefixField from '$lib/components/input/PrefixField.svelte';

	export let scheme: ContactPersonScheme;
</script>

<HeaderExpand title="Contact Person" titleSize="1.2em" titleColor="--text-primary">
	<GridLayoutTwoColumn>
		<LabelTop label="Phone">
			<PrefixField>
				<InputBasic placeholder="Enter Phone Number" bind:value={scheme.phone.value} />
			</PrefixField>
		</LabelTop>

		<LabelTop label="Email">
			<PrefixField>
				<InputBasic placeholder="Enter Email" bind:value={scheme.email.value} />
			</PrefixField>
		</LabelTop>
	</GridLayoutTwoColumn>
</HeaderExpand>
