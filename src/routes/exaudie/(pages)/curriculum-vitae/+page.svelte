<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';
	import type { PageData } from './$types';
	import MainForm from './(components)/(form)/MainForm.svelte';
	import MainView from './(components)/(view)/MainView.svelte';
	import { setCurriculumVitaeScheme } from './(helpers)/CurriculumVitaeHelpers';

	export let data: PageData;
	console.log('data', data);

	let isEdit: boolean = false;
	let cv: CurrculumVitaeScheme = setCurriculumVitaeScheme();
</script>

<ShowHidden isShow={isEdit}>
	<MainForm bind:isEdit />
</ShowHidden>

<ShowHidden isShow={!isEdit}>
	<MainView bind:isEdit />
</ShowHidden>
