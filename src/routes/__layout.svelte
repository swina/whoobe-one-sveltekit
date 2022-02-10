
<script context='module'>
    import Header from '$lib/header/Header.svelte';
    import Footer from '$lib/footer/Footer.svelte';
    import '../app.css';
	import whoobe  from '$lib/pages/config.js';
    
    let website, fonts = []
    website = whoobe
    fonts = [ ...fonts , ...website.header.fonts ]
    fonts = [ ...fonts , ...website.footer.fonts ]
    fonts = [ ...fonts , ...website.homepage.fonts ]
    let pagefonts = Object.keys(website.pages).map ( page => {
        return [ ...website.pages[page].fonts]
    })
    pagefonts = Array.prototype.concat.apply( fonts, pagefonts)
    fonts = [ ...new Set ( pagefonts ) ] 
    console.log ( fonts )
    let config = website
	// export async function load({ url, fetch, session, stuff }) {
	// 	const origin = '/config'
	// 	const res = await fetch(origin)

	// 	if (res.ok) {
	// 		website = await res.json()
    //         fonts = Object.keys(website.pages).map ( page => {
    //             return [...website.pages[page].fonts]
    //         })
    //         fonts = [ ...fonts , ...website.header.fonts ]
    //         fonts = [ ...fonts , ...website.footer.fonts ]
    //         fonts = [ ...fonts , ...website.homepage.fonts ]
    //         fonts = [ ...new Set ( fonts ) ] 
    //         let config = website
	// 		return { stuff : { config } }
	// 	}

	// 	return {
	// 		status: res.status,
	// 		error: new Error(`Could not load ${origin}`)
	// 	};
	// }
</script>

<script>
    import { setContext } from 'svelte'
import Error from './__error.svelte';
    setContext('header',website.header);
    setContext('footer',website.footer);
    setContext('website' , website );
    setContext ( 'pages' , website.pages );
</script>

<svelte:head>
	<!--Material-icons-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--Google Fonts-->
    {#if website}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={fonts.join('|')}">
    {/if}
</svelte:head>

{#if website}
<Header/>

<main>
	<slot />
</main>

<Footer/>
{/if}