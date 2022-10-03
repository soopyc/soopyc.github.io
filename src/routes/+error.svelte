<script lang="ts">
    import { page } from "$app/stores";
</script>

<div id="main">
    <h1>
        {$page.status}
    </h1>
    {#if $page.status == 404}
        <p><code>site@soopy.moe$ cd {$page.url.pathname}</code></p>
        <p><code>cd: directory not found: {$page.url.pathname}</code></p>
    {:else}
        <p><code>site@soopy.moe$ display {$page.url.pathname}</code></p>
        <p><code>Segmentation fault (core dumped)</code></p>
    {/if}
</div>

<style lang="sass">
    h1
        margin: 0
        margin-bottom: 0.5rem

    #main
        margin: 0 1rem
</style>
