<script lang="ts">
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import PrefixInput from '$lib/components/input/PrefixInput.svelte';
	import SuffixInput from '$lib/components/input/SuffixInput.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SvelteIcon from '$lib/images/svelte-logo.svg';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
</script>

<GridLayoutTwoColumn>
	<InputBasic value="" placeholder="enter some text" />

	<InputBasic value="" placeholder="enter some text" />

	<PrefixInput prefixText="Rp" textBold={true}>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixInput>

	<SuffixInput suffixIcon={SvelteIcon}>
		<InputBasic value="" placeholder="enter some text" />
	</SuffixInput>

	<SuffixInput suffixText="Bulan">
		<InputBasic value="" placeholder="enter some text" />
	</SuffixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<SuffixInput suffixIcon={SvelteIcon}>
			<InputBasic value="" placeholder="enter some text" />
		</SuffixInput>
	</PrefixInput>

	<SuffixInput suffixText="Bulan" textBold={true}>
		<PrefixInput prefixIcon={SvelteIcon}>
			<InputBasic value="" placeholder="enter some text" />
		</PrefixInput>
	</SuffixInput>

	<Select placeholder="pilih" />

	<PrefixInput>
		<InputBasic value="" placeholder="enter some text" />
	</PrefixInput>
</GridLayoutTwoColumn>
