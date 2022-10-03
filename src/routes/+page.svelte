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
    }, 250);
</script>

<svelte:head>
    <title>u@soopy.moe ~/Home</title>
</svelte:head>

<div class="content h-card">
    <p class="separator">
        <a href="https://www.pixiv.net/en/artworks/52956249">
            <img
                class="u-photo"
                src="https://www.libravatar.org/avatar/58a08528a7e2b3fd738b25d0c63f5c82?s=1024"
                alt="avatar of soopyc"
            />
        </a>
        <span class="p-name text-gold">sophie</span>
        <span class="p-name text-iris">selene</span>
        <span class="text-muted">
            <span class="p-nickname">soopyc</span>
            <span class="p-nickname">soap</span>
            ...
        </span>
    </p>
    <a style="display: none" class="u-url u-uid" href="https://soopy.moe">soopy.moe</a>
    <a style="display: none" class="u-url u-uid" href="https://rewrite.soopy.moe">rewrite.soopy.moe</a>
    <p>
        born on
        <span class="dt-bday">{birthday.getFullYear()}-{birthday.getMonth() + 1}-{birthday.getDate()}</span>
    </p>
    <p>{String(Math.round((age / 365) * 10000000000) / 10000000000).padEnd(13, "0")} years old</p>

    <p class="separator p-note">full-time student</p>
    <p class="p-note">sysadmin cosplayer<sup><a href="https://youtube.com/c/JeffGeerling">?</a></sup></p>
    <p class="p-note">touhou fan</p>
    <p><span class="p-region">Hong Kong</span>er</p>
    <p class="p-note p-gender-identity">trans demigirl</p>

    <p class="separator">quick links</p>
    <p>
        <a href="https://pronouns.page/@soopyc" rel="me" class="u-url">Pronouns -> pronouns.page</a>
    </p>
    <p>
        <a href="https://koakuma.soopy.moe/sophie" rel="me" class="u-url">Koakuma -> //koakuma.soopy.moe</a>
    </p>
    <!-- i dont really use gitlab kekO -->
    <p><a href="https://gitlab.com/kcomain" rel="me" class="u-url">GitLab -> //gitlab.com</a></p>
    <p>
        <a
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/7BADC9C659B024D8F0AC64F3DB9BEC3A93B4B1DF"
            rel="pgpkey"
            class="u-key"
        >
            OpenPGP -> 0xDB9BEC3A93B4B1DF
        </a>
    </p>
    <p>
        <a href="https://github.com/soopyc" rel="me" class="text-muted u-url">GitHub</a>
        ->
        <a href="https://dev.to/galtzo/im-leaving-github-50ba" class="text-rose">Why not GitHub</a>
    </p>
    <p>@ -> <a href="mailto:me@soopy.moe?subject=Hello!" class="u-email">me@soopy.moe</a></p>
    <!-- What am I doing on Shitcord right now!? -->

    <p class="separator">trans rights are human rights</p>
</div>

<style lang="sass">
    p
        margin: 0
    .separator
        margin-top: 16px

    .u-photo
        border-radius: 50%
        height: 2em
        vertical-align: middle
</style>
