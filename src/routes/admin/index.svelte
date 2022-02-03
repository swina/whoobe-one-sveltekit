<script>
    import { writable } from "svelte/store";
    
    let files;

	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
        async function test () {
            const file = files[0];
            const content = await file.text();
            const theme = writable(storedTheme);
            theme.subscribe(value => {
                localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
            });
            window.localStorage.setItem ( 'svelte-website' , content );
        }
        const website = test();
	}
</script>

<label for="website">Upload Website:</label>
<input
	accept="application/json"
	bind:files
	id="website"
	name="website"
	type="file"
/>


{#if files}
	<h2>Selected file:</h2>
	{#each Array.from(files) as file, i}
		<p>{file.name} ({file.size} bytes) </p>
        {#await file.text() then text}
            <pre>
                {JSON.stringify(JSON.parse( text ),null,4)}
            </pre>
        {/await}
	{/each}
{/if}