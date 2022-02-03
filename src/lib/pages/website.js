import { browser } from '$app/env';
let website;
if (browser) {
    website = window.localStorage.getItem('svelte-website');
    console.log ( website )
}
export default website;