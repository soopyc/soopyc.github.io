<script lang="ts">
    import KeyFill from "@svicons/bootstrap/key-fill.svelte";
    import type { PageData } from "./$types";
    import tippy from "$lib/actions/tippy";

    // export let data;
    const birthday = new Date(1135591404201.0);
    export let age = (new Date().getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24);

    setInterval(() => {
        const now = new Date().getTime();
        age = (now - birthday.getTime()) / (1000 * 60 * 60 * 24);
    }, 1000);
</script>

<svelte:head>
    <title>u@soopy.moe ~/Home</title>
</svelte:head>

<div class="content h-card">
    <p class="separator">
        <span class="p-name">sophie</span>
        <span class="text-muted">
            <span class="p-nickname">selene</span>
            <span class="p-nickname">soopyc</span>
            <span class="p-nickname">soap</span>...
        </span>
    </p>
    <p>
        <abbr use:tippy={{}} title="born on">b=</abbr>{birthday.getFullYear()}/{birthday.getMonth() +
            1}/{birthday.getDate()},
        {String(Math.round((age / 365) * 100000) / 100000).padEnd(8, "0")} years old
    </p>

    <p class="separator">full-time student</p>
    <p>sysadmin cosplayer</p>

    <p class="separator">
        <a href="//koakuma.soopy.moe/sophie" rel="me" class="d-inline">
            Koakuma -> //koakuma.soopy.moe
        </a>
    </p>
    <!-- i dont really use gitlab kekO -->
    <!-- <p><a href="//gitlab.com/kcomain" rel="me">GitLab -> //gitlab.com</a></p> -->
    <p>
        <a href="//github.com/soopyc" class="text-muted">GitHub</a>
        ->
        <a href="https://dev.to/galtzo/im-leaving-github-50ba">Why not GitHub</a>
    </p>

    <!-- What am I doing on Shitcord right now!? -->

    <p class="separator">transgender rights are human rights</p>
</div>

<style lang="sass">
    p
        margin: 0
    .separator
        margin-top: 16px

    .d-inline
        display: block
</style>
