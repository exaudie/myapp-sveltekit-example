<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import QuillEditor from '$lib/components/input/QuillEditor.svelte';
	import TextAreaBasic from '$lib/components/input/TextAreaBasic.svelte';
	import TextAreaCust from '$lib/components/input/TextAreaCust.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';

	let value = '';
</script>

<GridLayoutTwoColumn>
	<QuillEditor
		readonly={false}
		disabled={false}
		required={true}
		placeholder="Enter a text"
		bind:value
	/>

	<LabelTop label="Editor value">
		<p>{@html value}</p>
	</LabelTop>

	<TextAreaBasic placeholder="Enter a text" value="" />

	<TextAreaCust value="" />

	<TextAreaCust autoHeight={true} value="" />
</GridLayoutTwoColumn>
