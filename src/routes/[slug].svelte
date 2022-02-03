<script context="module">
    export const prerender = true;
    export async function load ( ctx ){ 
        return { props: { slug : ctx.params.slug } }
    }
</script>

<script>
    import whoobe from '$lib/pages/whoobe.js';
    export let slug
</script>

<svelte:head>
    <title>{whoobe.pages[slug].title}</title>
    <meta name="description" content="{whoobe.description}"/>
</svelte:head>


    {@html whoobe.pages[slug].html}
    <!-- {@html pages[slug].html} -->
