<script>
    import whoobe from '$lib/pages/whoobe.js'
    let pages = Object.keys(whoobe.pages);
    let home = whoobe.pages[pages[0]]
</script>
{#if home }
    {@html home.html}
{/if}
