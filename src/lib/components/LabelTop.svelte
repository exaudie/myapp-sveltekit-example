<script lang="ts">
	export let label: string;
	export let labelColor: string = 'var(--text-secondary)';
	export let labelAlign: 'start' | 'end' | 'center' = 'start';
	export let labelSize: string = '1em';
	export let forId: string = '';
	export let isBold: boolean = false;
</script>

<section>
	<label
		for={forId}
		class="label"
		class:text-bold={isBold}
		class:text-regular={!isBold}
		style="--label-color:{labelColor};
					--label-align:{labelAlign};
					--label-size:{labelSize};"
	>
		{label}
	</label>
	<slot />
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	label {
		color: var(--label-color);
		text-align: var(--label-align);
		font-size: var(--label-size);
	}

	section {
		box-sizing: border-box;
		flex-grow: 1;
		display: grid;
		gap: 0.1em;
	}
</style>
