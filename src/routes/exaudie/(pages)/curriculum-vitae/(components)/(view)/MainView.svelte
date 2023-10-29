<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experiance.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let isEdit: boolean;

	const onEdit = () => (isEdit = true);
</script>

<Button label="Edit" on:Click={onEdit} />

<SelfPhoto />
<PersonalInfo />
<ContactPerson />
<SocialMedia />
<Experiance />
<Education />
<Skills />
