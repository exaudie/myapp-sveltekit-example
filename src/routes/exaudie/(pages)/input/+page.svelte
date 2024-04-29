<script lang="ts">
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';

	import Select from '$lib/components/select/Select.svelte';
	import SvelteIcon from '$lib/images/svelte-logo.svg';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import PrefixField from '$lib/components/input/PrefixField.svelte';
	import SuffixField from '$lib/components/input/SuffixField.svelte';
</script>

<GridLayoutTwoColumn>
	<InputBasic value="" placeholder="enter some text" />

	<InputBasic value="" placeholder="enter some text" />

	<PrefixField prefixText="Rp" prefixBold={true}>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixField>

	<PrefixField prefixIcon={SvelteIcon}>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixField>

	<PrefixField>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixField>

	<SuffixField suffixIcon={SvelteIcon}>
		<InputBasic value="" placeholder="enter some text" />
	</SuffixField>

	<SuffixField suffixText="Bulan">
		<InputBasic value="" placeholder="enter some text" />
	</SuffixField>

	<PrefixField prefixIcon={SvelteIcon}>
		<SuffixField suffixIcon={SvelteIcon}>
			<InputBasic value="" placeholder="enter some text" />
		</SuffixField>
	</PrefixField>

	<SuffixField suffixText="Bulan" suffixBold={true}>
		<PrefixField prefixIcon={SvelteIcon}>
			<InputBasic value="" placeholder="enter some text" />
		</PrefixField>
	</SuffixField>

	<Select placeholder="pilih" />

	<PrefixField>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixField>
</GridLayoutTwoColumn>
