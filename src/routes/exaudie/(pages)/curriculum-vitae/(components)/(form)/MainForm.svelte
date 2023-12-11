<script lang="ts">
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitae';
	import { setCurriculumVitaeScheme } from '../../(helpers)/CurriculumVitaeHelpers';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experiance.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let isEdit: boolean;

	let cv: CurrculumVitaeScheme = setCurriculumVitaeScheme();

	const onSave = () => (isEdit = false);
</script>

<SelfPhoto />
<VerticalSpace height="16px" />
<PersonalInfo />
<VerticalSpace height="16px" />
<ContactPerson />
<VerticalSpace height="16px" />
<SocialMedia />
<VerticalSpace height="16px" />
<Experiance />
<VerticalSpace height="16px" />
<Education />
<VerticalSpace height="16px" />
<Skills />

<VerticalSpace height="48px" />
<div class="button-layout">
	<div class="button-wrap">
		<Button label="Cancel" theme="warning" isOutline={true} on:Click={onSave} />
	</div>

	<div class="button-wrap">
		<Button label="Save" on:Click={onSave} />
	</div>
</div>

<style lang="less">
	.button-layout {
		display: flex;
		justify-content: end;
		gap: 1em;

		.button-wrap {
			width: 20%;
			display: flex;
		}
	}
</style>
