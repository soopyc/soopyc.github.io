<script lang="ts">
    import type { PageData } from "./$types"
    import sites from "$lib/constants/sites";

    export let data: PageData;
</script>

<svelte:head>
    <title>u@soopy.moe ~/Sites</title>
</svelte:head>

<div class="content">
    <h2>Projects</h2>
    <p>What I've been working on</p>
    <pre>{JSON.stringify(data, undefined, 4)}</pre>
    <!-- definitely use svelte logic stuff later to stop repeating myself-->


</div>
