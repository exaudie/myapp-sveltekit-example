<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import OutsiteClicker from '../clicker/OutsiteClicker.svelte';

	export let isShow: boolean = false;
	export let menuList: string[] = [];

	type FeedBack = { index: number; name: string };

	let triggerHeight: number;

	const dispatch = createEventDispatcher();

	const onClick = (feedBack: FeedBack) => {
		dispatch('MenuClick', feedBack);

		isShow = false;
	};

	const onClickOutsite = () => {
		dispatch('ClickOutsite');

		isShow = false;
	};
</script>

<section>
	<div bind:offsetHeight={triggerHeight}>
		<slot />
	</div>

	<div class="content-menu" style="--trigger-height:{triggerHeight}">
		<ShowHidden isShow={isShow && menuList.length > 0}>
			<OutsiteClicker on:ClickOutsite={onClickOutsite}>
				<article>
					{#each menuList as menu, index}
						<button on:click={() => onClick({ index, name: menu })}>{menu}</button>
					{/each}
				</article>
			</OutsiteClicker>
		</ShowHidden>
	</div>
</section>

<style lang="less">
	section {
		position: relative;
	}

	article {
		background-color: white;
		width: max-content;
		display: flex;
		flex-direction: column;

		border-radius: 8px;
		box-shadow:
			0px 0px 2px rgba(40, 41, 61, 0.04),
			0px 4px 8px rgba(96, 97, 112, 0.16);

		button {
			all: unset;
			cursor: pointer;
			padding: 0.3em 0.6em;

			&:hover {
				background-color: rgb(244, 243, 243);
			}

			&:first-child {
				padding-top: 0.6em !important;
				border-radius: 8px 8px 0 0;
			}

			&:last-child {
				padding-bottom: 0.6em !important;
				border-radius: 0 0 8px 8px;
			}
		}
	}

	.content-menu {
		top: 0;
		position: absolute;
		padding-top: calc((var(--trigger-height) * 1px) + 0.2em) !important;
	}
</style>
