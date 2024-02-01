<script lang="ts">
	import type { CurrculumVitae } from '$lib/types/CurriculumVitaeType';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import { scrollTopElement } from '$lib/helpers/CommonHelpers';
	import { CvStore } from '$lib/stores/CurriculumVitaeStore';
	import { onDestroy, onMount } from 'svelte';
	import { downloadPdf, initCvData } from '../../(helpers)/CurriculumVitaeHelpers';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import DialogViewPdf from '$lib/components/dialog/DialogViewPdf.svelte';
	import LoadingDialog from '$lib/components/loading/LoadingDialog.svelte';
	import DownloadIcon from '$lib/images/icon/download_icon.svg';
	import ContactPerson from './ContactPerson.svelte';
	import Education from './Education.svelte';
	import Experiance from './Experience.svelte';
	import PersonalInfo from './PersonalInfo.svelte';
	import SelfPhoto from './SelfPhoto.svelte';
	import Skills from './Skills.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let isEdit: boolean;

	let cvData: CurrculumVitae = initCvData;
	let generatePdfForm: HTMLFormElement;
	let sourcePdf: string = '';
	let isLoading: boolean = true;
	let isDownload: boolean = false;
	let isShowPdfDialog: boolean = false;

	const personName: string[] = [
		'exaudiecv',
		cvData.personalInfo.firstName,
		cvData.personalInfo.lastName,
		`${new Date().getTime()}`
	];

	const fileNamePdf: string = personName.join('_');

	const unsubscribeCv = CvStore.subscribe((data) => {
		isLoading = false;

		if (data) cvData = data;
	});

	const togglePdfDialog = () => (isShowPdfDialog = !isShowPdfDialog);

	const onEdit = () => {
		isEdit = true;
	};

	const onGenerate = () => {
		isDownload = false;
		generatePdfForm.requestSubmit();
	};

	const onDownload = () => {
		if (sourcePdf != '') {
			downloadPdf({ fileName: fileNamePdf, src: sourcePdf });

			return;
		}

		isDownload = true;
		generatePdfForm.requestSubmit();
	};

	const parseGenPdf = (response: any) => {
		if (!response.success) {
			return;
		}

		if (isDownload) {
			const srcPdf = response?.data?.genCv ?? '';
			downloadPdf({ fileName: fileNamePdf, src: srcPdf });
			isDownload = false;

			return;
		}

		sourcePdf = response?.data?.genCv ?? '';
		togglePdfDialog();
	};

	const generatePdfEnhance: SubmitFunction = ({ formData }) => {
		isLoading = true;
		formData.append('cvData', btoa(JSON.stringify(cvData)));

		return async ({ result }) => {
			isLoading = false;
			switch (result.type) {
				case 'success':
					const resultData = result.data;

					parseGenPdf(resultData);
					break;
				default:
			}
		};
	};

	onMount(() => {
		CvStore.useLocalStorage();

		scrollTopElement({ elementId: 'main#main_content' });
	});

	onDestroy(() => unsubscribeCv());
</script>

<form
	bind:this={generatePdfForm}
	method="post"
	action="?/generatePdf"
	use:enhance={generatePdfEnhance}
/>

<SelfPhoto photo={cvData.personalInfo.photo} />

<VerticalSpace height="1em" />
<PersonalInfo data={cvData.personalInfo} />

<VerticalSpace height="36px" />
<ContactPerson data={cvData.contactPerson} />

<VerticalSpace height="36px" />
<SocialMedia datas={cvData.socialMedia} />

<VerticalSpace height="36px" />
<Experiance datas={cvData.experience} />

<VerticalSpace height="36px" />
<Education datas={cvData.education} />

<VerticalSpace height="36px" />
<Skills datas={cvData.skills} />

<VerticalSpace height="48px" />
<div class="button-layout">
	<div class="button-wrap">
		<Button label="Edit Information" isOutline={true} on:Click={onEdit} />
	</div>

	<div class="button-wrap">
		<Button label="Generate CV" isOutline={true} on:Click={onGenerate} />
	</div>

	<div class="button-wrap">
		<ButtonIcon icon={DownloadIcon} label="Download CV" isOutline={true} on:Click={onDownload} />
	</div>
</div>

<LoadingDialog bind:isShow={isLoading} />
<DialogViewPdf bind:isShow={isShowPdfDialog} {sourcePdf} />

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

	@media only screen and (max-width: 640px) {
		.button-layout {
			justify-content: center;
			flex-direction: column;

			.button-wrap {
				width: 100%;
			}
		}
	}
</style>
