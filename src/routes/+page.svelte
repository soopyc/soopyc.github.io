<script lang="ts">
    // export let data;
    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime";
    import duration from "dayjs/plugin/duration";
    dayjs.extend(relativeTime)
    dayjs.extend(duration)

    // TODO: maybe add humanized display?
    // const birthday = dayjs("2005-12-26T18:03:24.201+08:00");
    const birthday = dayjs("2005-12-26T00:00:00+08:00");
    const birthdayThisYear = birthday.year(dayjs().year())
    export let now = dayjs();
    export let age = now.diff(birthday, "years", true)
    export let daysLeft = dayjs.duration(now.diff(birthdayThisYear))
    export const fumo = ["cheers.webp", "lamp.jpg"][Math.floor(Math.random() * 2)]

    setInterval(() => {
        // now = dayjs("2023-12-26T16:00:00.000Z");
        now = dayjs();
        age = now.diff(birthday, "years", true)
        daysLeft = dayjs.duration(now.diff(birthdayThisYear))
    }, 550);
</script>

<svelte:head>
    <title>site@soopy.moe ~/Home</title>
</svelte:head>

<link rel="authorization_endpoint" href="https://indieauth.com/auth">
<div class="content h-card">
    <p class="separator">
        <a href="https://www.pixiv.net/en/artworks/52956249">
            <img
                class="u-photo"
                src="https://www.libravatar.org/avatar/58a08528a7e2b3fd738b25d0c63f5c82?s=1024"
                alt="avatar of soopyc"
            />
        </a>
        <span class="p-name text-gold">cassie</span>
        <span class="p-name text-love">sophie</span>
        <span class="p-name text-iris">selene</span>
        <span class="text-muted">
            <span class="p-nickname">soopyc</span>
            <span style="display: none" class="p-nickname">ミズキ</span>
            <span style="display: none" class="p-nickname">soap</span>
            ...
        </span>
    </p>
    <a style="display: none" class="u-url u-uid" href="https://soopy.moe">soopy.moe</a>
    <a style="display: none" class="u-url u-uid" href="https://rewrite.soopy.moe">rewrite.soopy.moe</a>
    <p>
        born on
        <span class="dt-bday">{birthday.format("YYYY-MM-DD")}</span>
    </p>
    <!-- least cursed leap year detection -->
    <p>{String((Math.round(age * 10000000) / 10000000)).padEnd(10, "0")} years old</p>
    {#if daysLeft.days() <= 31 && daysLeft.asSeconds() < 0}
        <p>can you believe it folks‽ birthday! just {(daysLeft).humanize()} away‼</p>
    {/if}
    {#if now.diff(birthday, "years") == 18}
        <p>i am now legal. <img class="inline-img" src="/images/yippee.gif" alt="GIF of the autism creature/TBH with confetti"/> </p>
    {/if}

    <p class="separator p-note">full-time student</p>
    <p class="p-note">sysadmin cosplayer<sup><a href="https://youtube.com/c/JeffGeerling">?</a></sup></p>
    <p class="p-note">big mizuki (prsk) fan</p>
    <p class="p-note"><a href="/images/fumo/{fumo}">fumo fan</a></p>
    <p><span class="p-region">Hong Kong</span>er</p>
    <p class="p-note p-gender-identity">trans demigirl</p>

    <p class="separator">quick links</p>
    <p>
        <a href="https://pronouns.page/@soopyc" rel="me" class="u-url">Pronounce -&gt; pronouns.page</a>
    </p>
    <p>
        <a href="https://koakuma.soopy.moe/sophie" rel="me" class="u-url">GitLab -&gt; //koakuma.soopy.moe</a>
    </p>
    <p>
        <a href="https://patchy.soopy.moe/mizuki" rel="me" class="u-url">Forgejo -&gt; //patchy.soopy.moe</a>
    </p>
    <!-- i dont really use gitlab kekO -->
    <p><a href="https://gitlab.com/kcomain" rel="me" class="u-url">GitLab SaaS -&gt; //gitlab.com</a></p>
    <p>
        <a
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/7BADC9C659B024D8F0AC64F3DB9BEC3A93B4B1DF"
            rel="pgpkey"
            class="u-key"
        >
            OpenPGP -&gt; ed25519/0xD539637D518022C6
        </a>
    </p>
    <p>
        <a href="https://github.com/soopyc" rel="me" class="text-muted u-url">GitHub</a>
        -&gt;
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

    .inline-img
        vertical-align: middle
        height: 3rem
</style>
