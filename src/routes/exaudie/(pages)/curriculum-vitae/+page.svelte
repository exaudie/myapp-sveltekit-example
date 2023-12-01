<script lang="ts">
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';
	import type { PageData } from './$types';
	import { setCurriculumVitaeScheme } from './(helpers)/CurriculumVitaeHelpers';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import MainForm from './(components)/(form)/MainForm.svelte';
	import MainView from './(components)/(view)/MainView.svelte';

	export let data: PageData;

	let isEdit: boolean = false;
	let cv: CurrculumVitaeScheme = setCurriculumVitaeScheme();
</script>

<ShowHidden isShow={isEdit}>
	<MainForm bind:isEdit />
</ShowHidden>

<ShowHidden isShow={!isEdit}>
	<MainView bind:isEdit />
</ShowHidden>
