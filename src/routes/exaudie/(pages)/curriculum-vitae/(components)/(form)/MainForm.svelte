<script lang="ts">
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

<Button label="Save" on:Click={onSave} />
