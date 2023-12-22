<script lang="ts">
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputNegativeDisplay from '$lib/components/input/InputNegativeDisplay.svelte';

	let value1: string = '';
	let sum1: string = '';
	let sum2: string = '';
</script>

<GridLayoutThreeColumn>
	<LabelTop label="Nominal Negative">
		<div class="box">
			<p>Real value : {value1}</p>
			<InputNegativeDisplay placeholder="0" bind:value={value1} />
		</div>
	</LabelTop>

	<LabelTop label="Always Negative">
		<div class="box">
			<p>Real value : {value1}</p>
			<InputNegativeDisplay placeholder="0" bind:value={value1} />
		</div>
	</LabelTop>

	<LabelTop label="Summation">
		<div class="box">
			<p>
				{isEmptyTo(sum1, { defValue: '0' })} + {isEmptyTo(sum2, { defValue: '0' })} = {Number(
					sum1
				) + Number(sum2)}
			</p>
			<InputNegativeDisplay placeholder="0" bind:value={sum1} />

			<InputNegativeDisplay placeholder="0" bind:value={sum2} />
		</div>
	</LabelTop>
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
