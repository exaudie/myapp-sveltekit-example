<script lang="ts">
	import Backdrop from '../Backdrop.svelte';
	import Loading from './Loading.svelte';

	export let isShow: boolean;
</script>

<Backdrop {isShow}>
	<Loading />
</Backdrop>
