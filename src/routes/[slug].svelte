<script context="module">
    export const prerender = true;
    export async function load ( ctx ){ 
        return { props: { slug : ctx.params.slug } }
    }
</script>

<script>
    import Error from './__error.svelte'
    import whoobe from '$lib/pages/whoobe.js';
    export let slug
    
</script>

<svelte:head>
    {#if whoobe.pages[slug]}
        <title>{whoobe.pages[slug].title}</title>
        <meta name="description" content="{whoobe.description}"/>
    {/if}
</svelte:head>

{#if whoobe.pages[slug]}
    {@html whoobe.pages[slug].html}
{:else}
    <Error/>
{/if}
    
