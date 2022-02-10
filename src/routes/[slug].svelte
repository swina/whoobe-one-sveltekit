<script context="module">
    
    // let page, website
	// export async function load({ url, params, fetch, session, stuff }) {
    //     let slug = params.slug
    //     page = stuff.config.pages[slug]
	// 	return true
	// }
    import whoobe from '$lib/pages/config.js'
    export async function load ( ctx ){ 
        return { 
            props: { 
                page: whoobe.pages[ctx.params.slug]
            } 
        }
    }
</script>

<script>
    import Error from './__error.svelte'
    import { getContext } from 'svelte'
	export let page
    // let pages = getContext ( 'pages' );
    // let page 
    // if ( pages[slug] ) {
    //     page = pages[slug];
        // console.log ( page.fonts )
    // }
</script>

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
    
