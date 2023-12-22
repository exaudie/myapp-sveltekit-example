<script lang="ts">
	import type { CurrculumVitaeScheme } from '$lib/types/CurriculumVitaeType';
	import { onDestroy, onMount } from 'svelte';
	import { CvStore } from '$lib/stores/CurriculumVitaeStore';
	import { toastNotify } from '$lib/stores/ToastNotifyStore';
	import {
		initCvData,
		setCurriculumVitaeData,
		setCurriculumVitaeScheme
	} from '../../(helpers)/CurriculumVitaeHelpers';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experience.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let isEdit: boolean;

	let cvScheme: CurrculumVitaeScheme = setCurriculumVitaeScheme({ cvData: initCvData });

	const unsubscribeCv = CvStore.subscribe((data) => {
		if (data) cvScheme = setCurriculumVitaeScheme({ cvData: data });
	});

	const onSave = () => {
		CvStore.set(setCurriculumVitaeData({ cvScheme: cvScheme }));
		isEdit = false;
		toastNotify.success({ message: 'Save success' });
	};

	const onCancel = () => (isEdit = false);

	onMount(() => CvStore.useLocalStorage());

	onDestroy(() => unsubscribeCv());
</script>

<SelfPhoto bind:photo={cvScheme.personalInfo.photo} />
<PersonalInfo bind:scheme={cvScheme.personalInfo} />

<VerticalSpace height="36px" />
<ContactPerson bind:scheme={cvScheme.contactPerson} />

<VerticalSpace height="36px" />
<SocialMedia bind:schemes={cvScheme.socialMedia} />

<VerticalSpace height="36px" />
<Experiance bind:schemes={cvScheme.experience} />

<VerticalSpace height="36px" />
<Education bind:schemes={cvScheme.education} />

<VerticalSpace height="36px" />
<Skills bind:schemes={cvScheme.skills} />

<VerticalSpace height="48px" />
<div class="button-layout">
	<div class="button-wrap">
		<Button label="Cancel" theme="warning" isOutline={true} on:Click={onCancel} />
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
