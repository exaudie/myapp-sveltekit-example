<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';

	export let isShow: boolean = false;
	export let menuList: string[] = [];

	type FeedBack = { id: number; name: string };

	const dispatch = createEventDispatcher();

	const onClick = (feedBack: FeedBack) => dispatch('MenuClick', feedBack);
</script>

<section>
	<slot />

	<ShowHidden isShow={isShow && menuList.length > 0}>
		<article>
			{#each menuList as menu, index}
				<button on:click={() => onClick({ id: index, name: menu })}>{menu}</button>
			{/each}
		</article>
	</ShowHidden>
</section>

<style lang="less">
	section {
		display: block;
		position: relative;
	}

	article {
		margin-top: 0.5em;
		background-color: white;
		width: max-content;
		display: flex;
		flex-direction: column;
		gap: 0.6em;
		padding: 1em;
		position: absolute;
		border-radius: 8px;
		box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);

		button {
			all: unset;
			cursor: pointer;
		}
	}
</style>
