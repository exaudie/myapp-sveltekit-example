<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const clickOutside = (elm: HTMLElement) => {
		
		const handleClick = (event: Event) => {
			const target = event.target as HTMLElement;

			if (elm && !elm.contains(target) && !event.defaultPrevented) {
				dispatch('onClickOutsite');
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
