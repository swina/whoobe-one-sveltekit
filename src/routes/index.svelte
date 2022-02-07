<script context="module">
    let home, website
	export async function load({ url, fetch, session, stuff }) {
		website = stuff.config
        home = website.pages['home']
		return true
	}
</script>
<svelte:head>
    {#if website}
        <title>{website.name}</title>
        <meta name="description" content="{website.description}"/>
    {/if}
</svelte:head>

{#if home }
    {@html home.html}
{/if}
