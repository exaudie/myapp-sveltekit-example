<script lang="ts">
	import type { PageData } from './$types';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import TabBarHelper from '$lib/components/tabs/TabBarHelper';
	import Form1 from './(components)/Form1.svelte';
	import Form2 from './(components)/Form2.svelte';
	import Form3 from './(components)/Form3.svelte';

	export let data: PageData;

	let navHelper: TabBarHelper = new TabBarHelper();
	navHelper.setItems({
		navItems: [
			{ label: 'Form Basic', value: 1 },
			{ label: 'Form Validation', value: 2 },
			{ label: 'Form Enhance', value: 3 }
		]
	});

	const { dataLoad } = data;
</script>

<TabBar bind:navHelper>
	<ShowHidden isShow={navHelper.getActive === 1}>
		<Form1 />
	</ShowHidden>

	<ShowHidden isShow={navHelper.getActive === 2}>
		<Form2 />
	</ShowHidden>

	<ShowHidden isShow={navHelper.getActive === 3}>
		<Form3 data={dataLoad?.data} />
	</ShowHidden>
</TabBar>

<style>
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
	}
</style>
