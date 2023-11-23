<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { downloadPdf } from '../../(helpers)/CurriculumVitaeHelpers';
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

	let generatePdfForm: HTMLFormElement;

	let srcIframe: string = '';

	const currentPath = $page.url.pathname;

	const onEdit = () => {
		isEdit = true;
	};

	const onDown = () => {
		generatePdfForm.requestSubmit();
	};

	const generatePdfEnhance: SubmitFunction = ({ formData }) => {
		formData.append('cvData', 'eko setiadi');

		return async ({ result }) => {
			if (result.type == 'success') {
				srcIframe = result?.data?.data?.genCv ?? '';
				if (srcIframe != '') {
					downloadPdf({ fileName: 'cvdownoad', src: srcIframe });
				}
			}
		};
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

<iframe src={srcIframe} title="cv" frameborder="0" />

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
</style>
