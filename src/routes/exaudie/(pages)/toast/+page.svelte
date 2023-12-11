<script lang="ts">
	import { toastNotify } from '$lib/stores/ToastNotifyStore';
	import Button from '$lib/components/button/Button.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';

	const onSuccess = () => toastNotify.success({ message: 'Toast success' });

	const onError = () => toastNotify.error({ message: 'Toast error' });

	const onInfo = () => toastNotify.info({ message: 'Toast info' });
</script>

<GridLayoutThreeColumn>
	<Button on:Click={onSuccess}>Toast Success</Button>

	<Button on:Click={onError}>Toast Error</Button>

	<Button on:Click={onInfo}>Toast Info</Button>
</GridLayoutThreeColumn>
