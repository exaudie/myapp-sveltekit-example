<script lang="ts">
	import NominalView from '$lib/helpers/NominalView';
	import {
		setCust2ThousandSeparator,
		setCustThousandSeparator,
		setIntlThousandSeparator,
		switchSeparator
	} from '$lib/helpers/NumberFormatter';
</script>

<p>{new NominalView('1222333444').toSparator().value}</p>
<p>{new NominalView('1.222.333.444').toSparator().removeSparator().value}</p>

<p>{switchSeparator('1222333.99', { to: '.' })}</p>
<p>{switchSeparator('1222333.99', { to: ',' })}</p>
