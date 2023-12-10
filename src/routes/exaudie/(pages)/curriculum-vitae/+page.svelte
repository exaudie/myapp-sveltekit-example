<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import MainForm from './(components)/(form)/MainForm.svelte';
	import MainView from './(components)/(view)/MainView.svelte';

	let isEdit: boolean = false;
</script>

<ShowHidden isShow={isEdit}>
	<MainForm bind:isEdit />
</ShowHidden>

<ShowHidden isShow={!isEdit}>
	<MainView bind:isEdit />
</ShowHidden>
