import { writable } from "svelte/store";


//const storedTheme = localStorage.getItem("svelte-website");
export const theme = writable(storedTheme);
theme.subscribe(value => {
    localStorage.setItem("svelte-website", value === '' ? '' : '');
});

export { theme as default };