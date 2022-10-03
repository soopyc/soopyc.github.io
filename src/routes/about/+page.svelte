<script lang="ts">
    import type { PageData } from "./$types";

    import { onMount } from "svelte";
    import tippy from "$lib/actions/tippy";
    import Accordion from "$lib/actions/accordion";
    import sites from "$lib/constants/sites";
    import parser from "$lib/cstmparser";

    import Fediverse from "$lib/icons/fediverse.svelte";
    import Discord from "@svicons/simple-icons/discord.svelte";
    import Discourse from "@svicons/simple-icons/discourse.svelte";
    import Keybase from "@svicons/simple-icons/keybase.svelte";
    import Osu from "@svicons/simple-icons/osu.svelte";
    import Matrix from "@svicons/simple-icons/matrix.svelte";
    import Box from "@svicons/bootstrap/box.svelte";
    import At from "@svicons/bootstrap/at.svelte";
    import Git from "@svicons/simple-icons/git.svelte";
    import Github from "@svicons/simple-icons/github.svelte";
    import Gitlab from "@svicons/simple-icons/gitlab.svelte";
    import Lastfm from "@svicons/simple-icons/lastdotfm.svelte";

    export let content: HTMLElement;
    export let data: PageData;
    onMount(() => {
        content.querySelectorAll("details").forEach((el) => {
            new Accordion(el, {
                easing: "ease",
                animationDuration: 500,
            });
        });

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
    </p>

    <h3 id="whoami">Who am I?</h3>
    <p>
        I'm a Secondary 5 student in 🇭🇰 Hong Kong. I study <span class="text-gold">Biology</span>,
        <span class="text-gold">Physics</span> and <span class="text-gold">Computer Science</span>.
    </p>
    <p>
        I also manage my own network of services and the infrastructure of them. See <a href="/sites">~/Sites</a> for more
        details
    </p>

    <p>arch linux user :33</p>

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
                    <Matrix height="1em" style="vertical-align: middle" /> Matrix
                    <ul>
                        <li>
                            <a href="https://matrix.to/#/@sophie:nue-staging.soopy.moe">
                                @sophie:nue-staging.soopy.moe
                            </a>
                        </li>
                        <li>
                            <a href="https://matrix.to/#/@sophie:nue.soopy.moe">@sophie:nue.soopy.moe</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Git height="1em" style="vertical-align: middle"/>
                    Personal Git
                    <a href="https://koakuma.soopy.moe/sophie">@sophie</a>
                </li>
                <li>
                    <Fediverse />
                    <abbr title="Fediverse" use:tippy={{}}>Fedi</abbr>
                    <a href="https://m.soopy.moe/@sophie">@sophie@m.soopy.moe</a>
                </li>
                <li>
                    <Keybase height="1em" style="vertical-align: middle" />
                    Keybase <a href="//keybase.io/kcomain">kcomain</a>
                </li>
                <li>
                    <Gitlab height="1em" style="vertical-align: middle" />
                    GitLab <a href="//gitlab.com/kcomain">kcomain</a>
                </li>
                <li class="text-muted">
                    <span
                        use:tippy={{}}
                        title="Avoid GitHub, link to why in homepage. Funny how I'm currently using github for this. Will switch when possible."
                    >
                        <Github height="1em" style="vertical-align: middle" />
                        GitHub
                    </span>
                    <a href="//github.com/kcomain">soopyc</a>
                </li>
                <li>
                    <At height="1em" style="vertical-align: middle" />
                    <span>Email <a href="https://keyoxide.org/hkp/me%40soopy.moe">Keyoxide</a></span>
                </li>
                <li>
                    <span class="text-gold" use:tippy={{}} title="Avoid Discord where possible.">
                        <Discord height="1em" style="vertical-align: middle" />
                        Discord
                    </span>
                    {#if parser(data.lanyardkv.avatar)}
                        <!--the ?.url is not needed because the output is guaranteed to not be undefined but ts be like no.-->
                        <a href={parser(data.lanyardkv.avatar)?.url}>
                            <img
                                id="discordAvatar"
                                alt="[avatar of soopyc on discord]"
                                src={sites.lanyard.avatar(data.discordUser.id)}
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
                    <Discourse height="1em" style="vertical-align: middle" />
                    Discourse <a href="//f.soopy.moe/u/sophie">@sophie (@f.soopy.moe)</a>
                </li>
                <li>
                    <Lastfm height="1em" style="vertical-align: middle" />
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
                    <span title="osu!"><Osu height="1.5em" style="vertical-align: middle" />:</span>
                    <a href="//osu.ppy.sh/u/soopyc">
                        <span class="text-hide">osu!</span>
                        soopyc
                    </a>
                </li>
                <li>
                    <Box height="1em" style="vertical-align: middle" /> Minecraft: CatgirlSelene
                </li>
            </ul>
        </div>
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
        padding-top: 0.25rem
        vertical-align: middle

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
</style>
