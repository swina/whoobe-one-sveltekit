<script context="module">
    export const prerender = true;
    export async function load ( ctx ){ 
        return { props: { slug : ctx.params.slug } }
    }
</script>

<script>
    import pages from '$lib/pages/pages.js';
    import whoobe from '$lib/pages/whoobe.js';
    export let slug
</script>

<svelte:head>
    <title>{slug}</title>
</svelte:head>


    {@html whoobe.pages[slug].html}
    <!-- {@html pages[slug].html} -->
