<script context="module">
    import Error from './__error.svelte'
    let page, website
	export async function load({ url, params, fetch, session, stuff }) {
        let slug = params.slug
        page = stuff.config.pages[slug]
		return true
	}
    // export async function load ( ctx ){ 
    //     return { props: { slug : ctx.params.slug } }
    // }
</script>
<!-- 
<script>
    import Error from './__error.svelte'
    import whoobe from '$lib/pages/whoobe.js';
    export let slug
    
</script> -->

<svelte:head>
    {#if page}
        <title>{page.title}</title>
        <meta name="description" content="{page.description}"/>
    {/if}
</svelte:head>

{#if page}
    {@html page.html}
{:else}
    <Error/>
{/if}
    
