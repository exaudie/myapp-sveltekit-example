<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onClickDocument = (p: { evn: MouseEvent; elm: HTMLElement }) => {
		const target = p.evn.target as HTMLElement;

		if (p.elm && !p.elm.contains(target) && !p.evn.defaultPrevented) dispatch('ClickOutsite');
	};

	const clickOutside = (elm: HTMLElement) => {
		document.addEventListener('click', (evn) => onClickDocument({ evn, elm }), true);

		const destroy = () => {
			document.removeEventListener('click', (evn) => onClickDocument({ evn, elm }), true);
		};

		return { destroy };
	};
</script>

<div use:clickOutside>
	<slot />
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>
