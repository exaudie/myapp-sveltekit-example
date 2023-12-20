<script lang="ts">
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitaeType';
	import { initCvData, setCurriculumVitaeScheme } from '../../(helpers)/CurriculumVitaeHelpers';
	import Button from '$lib/components/button/Button.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experiance.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let isEdit: boolean;

	let cvSheme: CurrculumVitaeScheme = setCurriculumVitaeScheme({ cvData: initCvData });

	const onSave = () => (isEdit = false);
</script>

<SelfPhoto bind:photo={cvSheme.personalInfo.photo} />
<PersonalInfo bind:scheme={cvSheme.personalInfo} />
<VerticalSpace height="36px" />
<ContactPerson bind:scheme={cvSheme.contactPerson} />
<VerticalSpace height="36px" />
<SocialMedia bind:schemes={cvSheme.socialMedia} />
<VerticalSpace height="36px" />
<Experiance bind:schemes={cvSheme.experience} />
<VerticalSpace height="36px" />
<Education bind:schemes={cvSheme.education} />
<VerticalSpace height="36px" />
<Skills bind:schemes={cvSheme.skills} />

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

	@media only screen and (max-width: 640px) {
		.button-layout > .button-wrap {
			width: 100%;
		}
	}
</style>
