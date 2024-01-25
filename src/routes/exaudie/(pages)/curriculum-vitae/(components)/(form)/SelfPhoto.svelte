<script lang="ts">
	import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import PersonIcon from '$lib/images/icon/person_icon.svg';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import DialogMenu from '$lib/components/dialog/DialogMenu.svelte';

	export let photo: InputFieldScheme;

	let isShowMenu: boolean = false;

	const toggleShowMenu = () => (isShowMenu = !isShowMenu);
	const onMenuClick = (evn: CustomEvent) => {
		console.log('evn', evn.detail);
	};
</script>

<section>
	<img
		src={isEmptyTo(photo.value, { defValue: PersonIcon })}
		alt="avatar"
		on:error={() => (photo.value = PersonIcon)}
	/>

	<div>
		<DialogMenu
			menuList={['Capture', 'Upload File']}
			bind:isShow={isShowMenu}
			on:MenuClick={(evn) => onMenuClick(evn)}
		>
			<ButtonIcon icon={PersonIcon} label="Edit" isOutline={true} on:Click={toggleShowMenu} />
		</DialogMenu>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: start;
		align-items: center;
	}

	img {
		width: 7em;
		height: 7em;
	}
</style>
