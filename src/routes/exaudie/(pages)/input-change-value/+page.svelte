<script lang="ts">
	import LabelTopLeft from '$lib/components/LabelTopLeft.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputNegativeDisplay from '$lib/components/input/InputNegativeDisplay.svelte';
	import { setValue } from '$lib/helpers/DefaultValue';

	let value1: string = '';
	let sum1: string = '';
	let sum2: string = '';
</script>

<GridLayoutThreeColumn>
	<LabelTopLeft label="Nominal Negative">
		<div class="box">
			<p>Real value : {value1}</p>
			<InputNegativeDisplay placeholder="0" bind:value={value1} />
		</div>
	</LabelTopLeft>

	<LabelTopLeft label="Always Negative">
		<div class="box">
			<p>Real value : {value1}</p>
			<InputNegativeDisplay placeholder="0" alwaysNegative={true} bind:value={value1} />
		</div>
	</LabelTopLeft>

	<LabelTopLeft label="Summation">
		<div class="box">
			<p>
				{setValue(sum1, '0')} + {setValue(sum2, '0')} = {Number(sum1) + Number(sum2)}
			</p>
			<InputNegativeDisplay placeholder="0" bind:value={sum1} />

			<InputNegativeDisplay placeholder="0" bind:value={sum2} />
		</div>
	</LabelTopLeft>
</GridLayoutThreeColumn>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	.box {
		border-radius: 0.3em;
		background-color: white;
		padding: 1em;
	}
</style>
