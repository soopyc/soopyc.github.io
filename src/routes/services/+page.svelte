<script lang="ts">
    import type { PageData } from "./$types"
    // import sites from "$lib/constants/sites";

    export let serviceList;
    export let data: PageData;
</script>

<svelte:head>
    <title>site@soopy.moe ~/Services</title>
</svelte:head>

<div class="content">
    <h2>Services</h2>
    <div class="para">
        <p><b>Service status: </b><a href="//status.soopy.moe">status.soopy.moe (GitHub)</a></p>
        <p>Running {data.xnix} {data.kernel}</p>
    </div>
    <!-- <noscript>
        <p>
            This page uses JavaScript to retrieve service information. As you have
            JavaScript disabled, it is not possible for us to show you the list
            of sites here. Please visit
            <a href="https://github.com/soopyc/upgraded-lamp">
                https://github.com/soopyc/upgraded-lamp
            </a> for the full list.
        </p>
        <p>
            Update: we are working on a method that allows user without JavaScript
            to display a list of our services.
        </p>
    </noscript> -->
    <div class="service-list" bind:this={serviceList}>
        {#each data.services as service}
            {service}
            <!--
                component, showing
                <Service {service} />
            -->
        {/each}
    </div>
</div>

<style lang="scss">
    .para {
        margin: 1em auto;

        & p {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
