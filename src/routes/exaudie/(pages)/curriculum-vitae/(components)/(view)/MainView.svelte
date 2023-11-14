<script lang="ts">
	import { enhance } from '$app/forms';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experiance.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let isEdit: boolean;

	let generatePdfForm: HTMLFormElement;

	const currentPath = $page.url.pathname;

	const onEdit = () => {
		isEdit = true;
		generatePdfForm.requestSubmit();
	};

	const onDown = () => {
		goto(`${currentPath}/wew`, { replaceState: true });
	};

	const generatePdfEnhance: SubmitFunction = () => {
		return async () => {};
	};
</script>

<form
	bind:this={generatePdfForm}
	method="post"
	action="?/generatePdf"
	use:enhance={generatePdfEnhance}
/>

<SelfPhoto />
<PersonalInfo />
<ContactPerson />
<SocialMedia />
<Experiance />
<Education />
<Skills />

<VerticalSpace height="48px" />
<div class="button-layout">
	<div class="button-wrap">
		<Button label="Download" isOutline={true} on:Click={onDown} />
	</div>

	<div class="button-wrap">
		<Button label="Edit Information" isOutline={true} on:Click={onEdit} />
	</div>
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.button-layout {
		display: flex;
		justify-content: end;
		gap: 1em;

		.button-wrap {
			width: 20%;
			display: flex;
		}
	}

	@media print {
		body .app {
			display: none;
		}

		.button-layout {
			display: block;
		}
	}
</style>
