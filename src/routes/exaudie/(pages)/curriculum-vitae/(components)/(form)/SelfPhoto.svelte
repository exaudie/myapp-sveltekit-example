<script lang="ts">
	import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import PersonIcon from '$lib/images/icon/person_icon.svg';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import DialogMenu from '$lib/components/dialog/DialogMenu.svelte';
	import DialogCamera from '$lib/components/dialog/DialogCamera.svelte';

	export let photo: InputFieldScheme;

	let isShowMenu: boolean = false;
	let isShowCamera: boolean = false;

	const menuList = ['Capture', 'Upload File', 'Remove'];

	const toggleShowMenu = () => (isShowMenu = !isShowMenu);

	const onMenuClick = (evn: CustomEvent) => {
		switch (evn.detail.index) {
			case 0:
				isShowCamera = true;
				break;

			case 1:
				console.log('evn', evn.detail.index);
				break;

			case 2:
				console.log('evn', evn.detail.index);
				break;
		}
	};
</script>

<DialogCamera bind:isShow={isShowCamera}></DialogCamera>

<section>
	<img
		src={isEmptyTo(photo.value, { defValue: PersonIcon })}
		alt="avatar"
		on:error={() => (photo.value = PersonIcon)}
	/>

	<div>
		<DialogMenu {menuList} bind:isShow={isShowMenu} on:MenuClick={(evn) => onMenuClick(evn)}>
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
