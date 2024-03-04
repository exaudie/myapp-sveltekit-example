<script lang="ts">
	import NominalExpand from '$lib/helpers/NominalExpand';

	const initValue: number = 123444555.79;
</script>

<p>Nilai awal : {initValue}</p>
<p>toSparator() : {new NominalExpand(`${initValue}`).addSeparator().value}</p>
