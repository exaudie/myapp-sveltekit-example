<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const clickOutside = (elm: HTMLElement) => {
		const handleClick = (event: Event) => {
			const target = event.target as HTMLElement;

			if (elm && !elm.contains(target) && !event.defaultPrevented) {
				dispatch('ClickOutsite');
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
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
