<script lang="ts">
	export let label: string;
	export let labelColor: string = 'var(--text-primary)';
	export let forId: string = '';
	export let isBold: boolean = false;
</script>

<section>
	<label
		for={forId}
		class="label"
		class:text-bold={isBold}
		class:text-regular={!isBold}
		style="--label-color:{labelColor};"
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
	}

	section {
		box-sizing: border-box;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
</style>
