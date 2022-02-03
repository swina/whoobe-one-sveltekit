<script>
	import whoobe from '$lib/pages/whoobe.js';
	let header = whoobe.hasOwnProperty('header') ? whoobe.header : null
</script>
<svelte:head>
	{#if header && header.fonts.length }
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family={header.fonts.join('|')}">
	{/if}
</svelte:head>


{#if header}
	{@html header.html}
{/if}


