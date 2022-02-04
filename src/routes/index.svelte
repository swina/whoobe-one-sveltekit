<script>
    import whoobe from '$lib/pages/whoobe.js'
    let pages = Object.keys(whoobe.pages);
    let home = whoobe.pages[pages[0]]
    let website = whoobe
</script>

<svelte:head>
    <title>{website.name}</title>
    <meta name="description" content="{website.description}"/>
</svelte:head>

{#if home }
    {@html home.html}
{/if}
