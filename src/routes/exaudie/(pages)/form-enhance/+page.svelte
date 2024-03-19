<script lang="ts">
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import TabBarHelper from '$lib/helpers/TabBarHelper';
	import Form1 from './(components)/Form1.svelte';

	let navHelper: TabBarHelper = new TabBarHelper();
	navHelper.setItems({
		navItems: Array.from({ length: 5 }, (_, idx) => idx + 1).map((v) => ({
			label: 'Form' + v,
			value: v
		}))
	});
</script>

<TabBar bind:navHelper>
	<ShowHidden isShow={navHelper.getActive === 1}><Form1 /></ShowHidden>
</TabBar>
