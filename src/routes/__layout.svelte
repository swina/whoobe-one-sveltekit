<script>
    //import theme from '../store';
    import Header from '$lib/header/Header.svelte';
    import Footer from '$lib/footer/Footer.svelte';
    import '../app.css';
    import whoobe from '$lib/pages/whoobe.js'
    let fonts = Object.keys(whoobe.pages).map ( page => {
        return [...whoobe.pages[page].fonts]
    })
    fonts = Array.prototype.concat.apply([], fonts)
    
</script>


<svelte:head>
    
	<!--Material-icons-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--Google Fonts-->
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={fonts.join('|')}">
</svelte:head>
<Header />

<main>
	<slot />
</main>

<Footer/>
