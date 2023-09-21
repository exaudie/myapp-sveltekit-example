<script lang="ts">
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import PrefixInput from '$lib/components/input/PrefixInput.svelte';
	import SuffixInput from '$lib/components/input/SuffixInput.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SvelteIcon from '$lib/images/svelte-logo.svg';
</script>

<GridLayoutTwoColumn>
	<Input value="" placeholder="enter some text" />

	<Input value="" placeholder="enter some text" />

	<PrefixInput prefixText="Rp" textBold={true}>
		<Input value="" placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<Input value="" placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput>
		<Input value="" placeholder="enter some text" />
	</PrefixInput>

	<SuffixInput suffixIcon={SvelteIcon}>
		<Input value="" placeholder="enter some text" />
	</SuffixInput>

	<SuffixInput suffixText="Bulan">
		<Input value="" placeholder="enter some text" />
	</SuffixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<SuffixInput suffixIcon={SvelteIcon}>
			<Input value="" placeholder="enter some text" />
		</SuffixInput>
	</PrefixInput>

	<SuffixInput suffixText="Bulan" textBold={true}>
		<PrefixInput prefixIcon={SvelteIcon}>
			<Input value="" placeholder="enter some text" />
		</PrefixInput>
	</SuffixInput>

	<Select placeholder="pilih" />

	<PrefixInput>
		<Input value="" placeholder="enter some text" />
	</PrefixInput>
</GridLayoutTwoColumn>
