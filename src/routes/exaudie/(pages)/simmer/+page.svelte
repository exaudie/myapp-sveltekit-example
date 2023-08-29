<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import SimmerLine from '$lib/components/simmer/SimmerLine.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<div class="card" style="padding: 16px;">
	<SimmerLine><VerticalSpace height="10px" /></SimmerLine>
</div>

<div class="card">
	<div class="shimmerBG media" />
	<div class="p-32">
		<div class="shimmerBG title-line" />
		<div class="shimmerBG title-line end" />

		<div class="shimmerBG content-line m-t-24" />
		<div class="shimmerBG content-line" />
		<div class="shimmerBG content-line" />
		<div class="shimmerBG content-line" />
		<div class="shimmerBG content-line end" />
	</div>
</div>

<style lang="less">
	.card {
		position: relative;
		-webkit-box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		border-radius: 6px;
		height: 500px;
		overflow: hidden;
		width: 350px;
		margin: 40px auto;

		.shimmerBG {
			animation-duration: 2.2s;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
			animation-name: shimmer;
			animation-timing-function: linear;
			background: #ddd;
			background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
			background-size: 1200px 100%;
		}

		@-webkit-keyframes shimmer {
			0% {
				background-position: -100% 0;
			}
			100% {
				background-position: 100% 0;
			}
		}

		@keyframes shimmer {
			0% {
				background-position: -1200px 0;
			}
			100% {
				background-position: 1200px 0;
			}
		}

		.media {
			height: 200px;
		}

		.p-32 {
			padding: 32px;
		}

		.title-line {
			height: 24px;
			width: 100%;
			margin-bottom: 12px;
			border-radius: 20px;
		}

		.content-line {
			height: 8px;
			width: 100%;
			margin-bottom: 16px;
			border-radius: 8px;
		}

		.end {
			width: 40%;
		}
	}

	.m-t-24 {
		margin-top: 24px;
	}
</style>
