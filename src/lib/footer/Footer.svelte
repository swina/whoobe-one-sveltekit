<script>
	import { getContext } from 'svelte'
	let footer = getContext ( 'footer' )
</script>
<svelte:head>
	{#if footer && footer.fonts.length }
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family={footer.fonts.join('|')}">
	{/if}
</svelte:head>


{#if footer}
	{@html footer.html}
{/if}


