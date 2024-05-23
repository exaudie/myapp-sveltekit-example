<script lang="ts">
	import Backdrop from '../Backdrop.svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import Loading from './Loading.svelte';

	export let isShow: boolean;
</script>

<ShowHidden {isShow}>
	<Backdrop isShow={true}>
		<Loading />
	</Backdrop>
</ShowHidden>
