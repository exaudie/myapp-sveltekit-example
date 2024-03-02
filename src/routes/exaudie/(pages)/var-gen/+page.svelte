<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import Select from '$lib/components/select/Select.svelte';

	let sourceTypeSelected: string;

	const optsSource: { [key: number]: string } = {
		1: 'Label',
		2: 'Pascal Case',
		3: 'Camel Case',
		4: 'Snacke Case',
		5: 'Kebab Case'
	};

	const optsPlaceholder: { [key: number]: string } = {
		1: 'Label Top Left | {"Label Top Left","Label Top Left",...}',
		2: 'Pascal Case',
		3: 'Camel Case',
		4: 'Snacke Case',
		5: 'Kebab Case'
	};
</script>

<main>
	<LabelTop label="Source Type options">
		<Select placeholder="Select Source Type" bind:value={sourceTypeSelected}>
			{#each Object.keys(optsSource) as key}
				<option value={key}>{optsSource[+key]}</option>
			{/each}
		</Select>
	</LabelTop>

	<LabelTop label="Source Text Input">
		<textarea name="" id="" cols="30" rows="10" placeholder={optsPlaceholder[+sourceTypeSelected]}
		></textarea>
	</LabelTop>

	<LabelTop label={optsSource[2]}>
		<textarea name="" id="" cols="30" rows="10"></textarea>
	</LabelTop>

	<LabelTop label={optsSource[3]}>
		<textarea name="" id="" cols="30" rows="10"></textarea>
	</LabelTop>

	<LabelTop label={optsSource[4]}>
		<textarea name="" id="" cols="30" rows="10"></textarea>
	</LabelTop>

	<LabelTop label={optsSource[5]}>
		<textarea name="" id="" cols="30" rows="10"></textarea>
	</LabelTop>
</main>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
</style>
