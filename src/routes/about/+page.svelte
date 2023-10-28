<script lang="ts">
    import type { PageData } from "./$types";

    import { onMount } from "svelte";
    import tippy from "$lib/actions/tippy";
    // import Accordion from "$lib/actions/accordion";
    import sites from "$lib/constants/sites";
    import parser from "$lib/cstmparser";

    // icons
    import IconAt from "~icons/ph/at-bold";
    import IconMatrix from "~icons/simple-icons/matrix";
    import IconForgejo from "~icons/simple-icons/forgejo";
    import IconKeybase from "~icons/simple-icons/keybase";
    import IconGitlab from "~icons/simple-icons/gitlab";
    import IconOsuAmpersandPound33Semicolon from "~icons/simple-icons/osu";
    import IconTwitter from "~icons/simple-icons/twitter";
    import IconDiscord from "~icons/simple-icons/discord";
    import IconMisskey from "~icons/simple-icons/misskey";
    import IconGithub from "~icons/octicon/mark-github-16";
    import IconFediverse from "~icons/arcticons/fediverse";
    import IconAkkoma from "~icons/arcticons/akkoma";
    import IconGoToSocial from "~icons/arcticons/gotosocial"
    import IconLastfm from "~icons/fa-brands/lastfm-square";

    export let content: HTMLElement;
    export let data: PageData;

    export const a4bc2e953c08d8 = "bWVAc29vcHkubW9l";
    export let e22c90f8e8a495 = a4bc2e953c08d8;
    function YXRvYm5jb3B5(dmFy: string) {
        navigator.clipboard.writeText(atob(dmFy));
        e22c90f8e8a495 = "Copied!";
        setTimeout(() => {
            e22c90f8e8a495 = a4bc2e953c08d8;
        }, 1000);
    }
    onMount(() => {
        // FIXME: broken on smaller details.
        // content.querySelectorAll("details").forEach((el) => {
        //     new Accordion(el, {
        //         easing: "ease",
        //         animationDuration: 500,
        //     });
        // });
        // content.querySelectorAll(".copy").forEach((el) => {
        //     // add copy logic here
        // });
        // probably better as an action
    });
</script>

<svelte:head>
    <title>u@soopy.moe ~/About</title>
</svelte:head>

<div class="content" bind:this={content}>
    <h2>About</h2>
    <p class="no-space">
        <a href="#whoami">whoami</a>
        <a href="#contact">finger</a>
        <a href="#keys">keys</a>
    </p>

    <h3 id="whoami">Who am I?</h3>
    <p>
        My name is Cassie, but you can also call me Sophie or any other names listed on the front page. I'm a Secondary
        6 student in 🇭🇰 Hong Kong. I study <span class="text-gold">Biology</span>,
        <span class="text-gold">Physics</span> and <span class="text-gold">Computer Science</span>.
    </p>
    <p>
        I also manage my own network of services and the infrastructure of them. See <a href="/sites">~/Sites</a> for more
        details.
    </p>
    <p>
        proud owner of <a href="//bnuuy.moe">bnuuy.moe</a>
    </p>

    <hr />

    <h3 id="contact">Contact</h3>
    <p>
        Since I'm terminally online, you can reach me through a wide range of sites and services apart from a select
        few.
    </p>

    <hr />
    <!-- TODO: replace design with grid-like/table entries without username -->
    <details open>
        <summary>
            <abbr title="Social Networking Services" use:tippy={{}}>SNS</abbr>
        </summary>
        <div class="list-none">
            <ul>
                <li>
                    <IconMatrix /> Matrix
                    <ul>
                        <li>
                            <a href="https://matrix.to/#/@sophie:nue-staging.soopy.moe">@sophie:nue-staging.soopy.moe</a
                            >
                        </li>
                        <li><a href="https://matrix.to/#/@sophie:nue.soopy.moe">@sophie:nue.soopy.moe</a></li>
                    </ul>
                </li>
                <li>
                    <IconFediverse /> Fediverse
                    <ul>
                        <li>
                            <span> <IconMisskey /> Misskey </span>
                            <a href="https://mk.bnuuy.moe/@sophie">@cassie@mk.bnuuy.moe</a>
                        </li>
                        <!-- i realize these icons are literally unreadable but this is currently the only option we have -->
                        <li>
                            <span> <IconAkkoma /> Akkoma </span>
                            <a href="//a.soopy.moe/mizuki">@mizuki@a.soopy.moe</a>
                        </li>
                        <li>
                            <span><IconGoToSocial /> <abbr title="GoToSocial" use:tippy={{}}>GTS</abbr></span>
                            <a href="https://gts.soopy.moe/@cassie">@cassie@gts.soopy.moe</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <IconForgejo /> Forgejo <a href="https://patchy.soopy.moe/cassie">@cassie@patchy.soopy.moe</a>
                </li>
                <li>
                    <IconKeybase height="1em" style="vertical-align: middle" />
                    Keybase <a href="//keybase.io/kcomain">kcomain</a>
                </li>
                <li>
                    <IconGitlab />
                    GitLab <a href="//gitlab.com/kcomain">kcomain</a>
                </li>
                <li class="text-muted">
                    <span
                        use:tippy={{}}
                        title="Avoid GitHub, link to why in homepage. Funny how I'm currently using github for this. Will switch when possible."
                    >
                        <IconGithub />
                        GitHub
                    </span>
                    <a href="//github.com/soopyc">soopyc</a>
                </li>
                <li>
                    <IconAt />
                    <span>
                        Email
                        <span
                            class="click"
                            tabindex="0"
                            role="button"
                            on:keypress={() => YXRvYm5jb3B5(a4bc2e953c08d8)}
                            on:click={() => YXRvYm5jb3B5(a4bc2e953c08d8)}
                        >
                            {e22c90f8e8a495}
                        </span>
                        <a href="https://keyoxide.org/hkp/me%40soopy.moe">(Keyoxide)</a>
                    </span>
                    <!-- <ul>
                        <li>
                            <a href="https://keys.openpgp.org/pks/lookup?op=get&options=mr&search=cheunghowui@gmail.com">OpenPGP Key via openpgp.org</a>
                        </li>
                        <li>
                            <a href="https://openpgpkey.soopy.moe/.well-known/openpgpkey/soopy.moe/hu/s8y7oh5xrdpu9psba3i5ntk64ohouhga">... with WKD</a>
                        </li>
                        <li>
                            <a href="/pgpkey.asc">... directly</a>
                        </li>
                    </ul> -->
                </li>
                <li>
                    <span
                        class="text-gold"
                        use:tippy={{}}
                        title="Avoid Twitter where possible, use the fediverse instead."
                    >
                        <IconTwitter />
                        <!-- I will not call it X -->
                        Twitter
                    </span>
                    <a href="https://twitter.com/soopyc_">@soopyc_</a>
                </li>
                <li>
                    <span
                        class="text-gold"
                        use:tippy={{}}
                        title="Avoid Discord where possible, use matrix or other plaforms instead."
                    >
                        <IconDiscord />
                        Discord
                    </span>
                    {#if parser(data.lanyardkv.avatar)}
                        <!--the ?.url is not needed because the output is guaranteed to not be undefined but ts be like no.-->
                        <a href={parser(data.lanyardkv.avatar)?.url}>
                            <img
                                id="discordAvatar"
                                alt="[avatar of soopyc on discord]"
                                src={sites.lanyard.avatar(data.discordUser?.id)}
                            />
                        </a>
                    {/if}
                    <a href="https://discord.com/users/{data.discordUser.id}">
                        {data.discordUser.username}#{data.discordUser.discriminator}
                    </a>
                </li>
            </ul>
        </div>
    </details>

    <hr />
    <details open>
        <summary>Services</summary>
        <div class="list-none">
            <ul>
                <li>
                    <IconLastfm />
                    Last.fm <a href="//last.fm/user/kcomain">@kcomain</a>
                </li>
            </ul>
        </div>
    </details>

    <hr />
    <details open>
        <summary>Games</summary>
        <div class="list-none">
            <ul>
                <li>
                    <abbr
                        use:tippy={{ allowHTML: true, maxWidth: "600px" }}
                        title="プロジェクトセカイ　カラフルステージ！feat.初音ミク<br>Project Sekai: Colorful Stage! (feat. Hatsune Miku)"
                    >
                        プロセカ:
                    </abbr>
                    <ul>
                        <li>
                            JP: <span class="copy">234698393179963406</span>
                        </li>
                        <li>
                            TW: <span class="copy">7048999698589457153</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <abbr
                        use:tippy={{ allowHTML: true, maxWidth: "600px" }}
                        title="ワールドダイスター 夢のステラリウム<br>World Dai Star: Yume no Stellarium"
                        >ユメステ:</abbr
                    >
                    <ul>
                        <li class="muted">This game is currently only available in JP markets.</li>
                        <li>JP: <span class="copy">5007270775</span></li>
                    </ul>
                </li>
                <li>
                    <span title="osu!">
                        <IconOsuAmpersandPound33Semicolon />
                    </span>
                    <a href="//osu.ppy.sh/u/soopyc">
                        <span class="text-hide">osu!</span>
                        soopyc
                    </a>
                </li>
                <li>Minecraft: CatgirlSelene</li>
            </ul>
        </div>
    </details>

    <hr />
    <details class="list-none" open id="keys">
        <summary>Public keys</summary>
        <ul>
            <li>
                <span class="text-rose">Age keys</span>
                <ul>
                    <li class="copy">age1yubikey1qgmfcf0vddslyza7djdekjjk3t3u29d474c5xscmcdye8x3spvhlxxj23xz</li>
                    <li class="muted">
                        (backup) <span class="copy">age17t2t5j2pnt45saq5fy2e7gn2w6q99h5myret58tqckwc283vvccs3qlqkl</span
                        >
                    </li>
                </ul>
            </li>
            <li>
                <span class="text-rose">Minisign keys</span>
                <ul>
                    <li class="copy">RWTwHbCTKdHg/muMS/0Uxlz27Jw7C1ccDxnDx+GIpM+1IeeWzIu6aAi9</li>
                </ul>
            </li>
        </ul>
    </details>
</div>

<style lang="sass">
    // ul
    //     margin: 0
    //     padding: 0.5rem 2rem
    //     & > li > ul
    //         padding: 0.5rem 1rem

    ul
        padding-top: 0.15rem
        margin: 0

    li
        padding-left: 0.5rem
        padding-top: 0.25rem
        vertical-align: middle

    .muted
        color: var(--color-muted) !important
    //    text-decoration: wavy line-through

    details
        margin: 0
        padding-top: 0.5rem

    details > summary
        cursor: pointer

    #discordAvatar
        border-radius: 50%
        height: 2em
        vertical-align: middle

    .copy
        user-select: all

    .click
        cursor: pointer
</style>
