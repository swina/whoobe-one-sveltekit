<script context="module">
    export async function load ( ctx ){ 
        return { props: { slug : ctx.params.slug } }
    }
</script>

<script>
    import { fade } from 'svelte/transition';
    import pages from '$lib/pages/pages.js';
    export let slug
    // let fonts = []
    // Object.keys(pages).forEach ( page => {
    //     fonts.push ( page.fonts )
    // })
    
</script>

<svelte:head>
    <title>{slug}</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--Google Fonts-->
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel|Archivo+Black|Barlow"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={pages[slug].fonts.join('|')}"/>
</svelte:head>

<section transition:fade>
    {@html pages[slug].html}
</section>