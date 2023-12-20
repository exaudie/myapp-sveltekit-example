<script lang="ts">
	import type { InputFieldScheme } from '$lib/types/InputFieldSchemeType';
	import PersonIcon from '$lib/images/icon/person_icon.svg';

	export let photo: InputFieldScheme;
</script>

<img src={photo.value} alt="avatar" on:error={() => (photo.value = PersonIcon)} />

<style>
	img {
		width: 7em;
		height: 7em;
	}
</style>
