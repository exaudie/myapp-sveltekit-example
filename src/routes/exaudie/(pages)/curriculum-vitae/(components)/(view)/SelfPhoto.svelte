<script lang="ts">
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import PersonIcon from '$lib/images/icon/person_icon.svg';

	export let photo: string;
</script>

<img
	src={isEmptyTo(photo, { defValue: PersonIcon })}
	alt="avatar"
	on:error={() => (photo = PersonIcon)}
/>

<style>
	img {
		width: 7em;
		height: 7em;
	}
</style>
