<script>
	import { page } from '$app/stores';
	import whoobe from '$lib/pages/whoobe.js';
	let footer = whoobe.hasOwnProperty('footer') ? whoobe.footer : null
</script>
<svelte:head>
	{#if footer && footer.fonts.length }
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family={footer.fonts.join('|')}">
	{/if}
</svelte:head>


{#if footer}
	{@html footer.html}
{/if}


