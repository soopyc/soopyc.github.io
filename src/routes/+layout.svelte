<script lang="ts">
    import 'tippy.js/dist/tippy.css';
    import "../app.sass";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import twemoji from "$lib/actions/twemoji";

    export let timeDisplay: string = new Date().toLocaleString();
    setInterval(() => {
        timeDisplay = new Date().toLocaleString();
    }, 255);
</script>

<svelte:head>
    <link rel="icon" href="https://github.com/soopyc.png" />
</svelte:head>

<noscript>
    <div id="nojs">
        <p>
            You currently do not have JavaScript enabled, though this site
            should still work fine.
        </p>
        <p>
            If you notice any accessibility issues, please do not hesitate to
            shoot me a message.
        </p>
        <p>
            You can find methods to contact me on
            {#if $page.url.pathname == "/about"}
                this page.
            {:else}
                the <a href="/about">contact</a> page.
            {/if}
        </p>
    </div>
</noscript>

<div id="header">
    <p id="site-name">soopy.moe<sup>★</sup></p>
    <p id="time-display">
        {#if !browser}<abbr title="Rendered at">r=</abbr>{/if}{timeDisplay}
    </p>
</div>

<div id="nav">
    <a href="/" class:current={$page.url.pathname == "/"}>~/Home</a>
    <a href="/sites" class:current={$page.url.pathname == "/sites"}>~/Sites</a>
    <a href="/about" class:current={$page.url.pathname == "/about"}>~/About</a>
</div>
<hr />

<div use:twemoji>
    <slot />
</div>

<hr />
<div id="footer" use:twemoji>
    <p>🏳️‍🌈 🏳️‍⚧️ 💙💛 🇭🇰</p>
    <p>
        The source code of this site can be viewed
        <a href="//github.com/soopyc/soopyc.github.io">here</a>
    </p>
    <p>future webrings here</p>
</div>

<style lang="sass">
    #header
        display: flex
        justify-content: space-between

        p
            margin: 0.75em 0.75em

    #time-display
        color: #5BCEFA

    #site-name
        color: #F5A9B8

    @media (prefers-color-scheme: light)
        #time-display
            color: #49A7CC

        #site-name
            color: #CC7E97

    #nav
        display: flex
        justify-content: start
        margin: 0 1rem

        a
            margin: 0 0.35rem

    .current
        color: var(--color-rose)

    #footer
        margin: 0 1rem
        padding-bottom: 2rem

        p
            margin-top: 0.25rem
            margin-bottom: 0

    #nojs
        margin: 0
        padding-top: 1em
        color: var(--color-pine)
        text-align: center
        p
            margin: 0
</style>
