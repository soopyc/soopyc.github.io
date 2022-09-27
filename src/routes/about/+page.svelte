<script lang="ts">
    import Accordion from "$lib/actions/accordion";
    import { onMount } from "svelte";
    import tippy from "$lib/actions/tippy";

    import Fediverse from "$lib/icons/fediverse.svelte";
    import Discord from "@svicons/simple-icons/discord.svelte";
    import Discourse from "@svicons/simple-icons/discourse.svelte";
    import Osu from "@svicons/simple-icons/osu.svelte";
    import Matrix from "@svicons/simple-icons/matrix.svelte";
    import Box from "@svicons/bootstrap/box.svelte";
    import At from "@svicons/bootstrap/at.svelte";

    export let content: HTMLElement;
    export let data: any;
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
        I also manage my own network of services and the infrastructure of them.
        See <a href="/sites">~/Sites</a> for more details
    </p>

    <p>i use arch btw</p>

    <hr />

    <h3 id="contact">Contact</h3>
    <p>
        Since I'm terminally online, you can reach me through a wide range of sites and services apart from a select
        few.
    </p>

    <hr />
    <details open>
        <summary>
            <abbr title="Social Networking Services" use:tippy={{}}>SNS</abbr>
        </summary>
        <div class="list-none">
            <ul>
                <li>
                    <Matrix height="1em" style="vertical-align: middle" /> Matrix:
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
                    <Fediverse />
                    <abbr title="Fediverse" use:tippy={{}}>Fedi:</abbr>
                    <a href="https://m.soopy.moe/@sophie">@sophie@m.soopy.moe</a>
                </li>
                <li>
                    <span class="text-gold" use:tippy={{}} title="Avoid Discord where possible.">
                        <Discord height="1em" style="vertical-align: middle" />
                        Discord:
                    </span>
                    <a href="https://discord.com/users/{data.discordUser.id}">
                        {data.discordUser.username}#{data.discordUser.discriminator}
                    </a>
                </li>
                <li>
                    <At height="1em" style="vertical-align: middle" />
                    <span>Email: <a href="https://keyoxide.org/hkp/me%40soopy.moe">Keyoxide</a></span>
                </li>
            </ul>
        </div>
    </details>

    <hr>
    <details open>
        <summary>Services</summary>
        <div class="list-none">
            <ul>
                <Discourse height="1em" style="vertical-align: middle" />
                Discourse: <a href="//f.soopy.moe/u/sophie">@sophie (@f.soopy.moe)</a>
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
        margin-top: 0.15rem

    li
        padding-top: 0.25rem
        vertical-align: middle

    details
        margin: 0
        padding-top: 0.5rem

    details > summary
        cursor: pointer

    .no-space
        margin: 0
        padding: 0

    .copy
        user-select: all
</style>
