<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import PrefixInput from '$lib/components/input/PrefixInput.svelte';
	import SuffixInput from '$lib/components/input/SuffixInput.svelte';
	import Input from '$lib/components/input/input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SvelteIcon from '$lib/images/svelte-logo.svg';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<div class="wrap">
	<Input placeholder="enter some text" />

	<Input placeholder="enter some text" />

	<PrefixInput prefixText="Rp" textBold={true}>
		<Input placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<Input placeholder="enter some text" />
	</PrefixInput>

	<PrefixInput>
		<Input placeholder="enter some text" />
	</PrefixInput>

	<SuffixInput suffixIcon={SvelteIcon}>
		<Input placeholder="enter some text" />
	</SuffixInput>

	<SuffixInput suffixText="Bulan">
		<Input placeholder="enter some text" />
	</SuffixInput>

	<PrefixInput prefixIcon={SvelteIcon}>
		<SuffixInput suffixIcon={SvelteIcon}>
			<Input placeholder="enter some text" />
		</SuffixInput>
	</PrefixInput>

	<SuffixInput suffixText="Bulan" textBold={true}>
		<PrefixInput prefixIcon={SvelteIcon}>
			<Input placeholder="enter some text" />
		</PrefixInput>
	</SuffixInput>

	<Select placeholder="pilih" />

	<PrefixInput>
		<Input placeholder="enter some text" />
	</PrefixInput>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
</style>
