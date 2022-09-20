<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<main class="h-screen">
    <div
        class="grid grid-rows-auto grid-flow-row h-full justify-items-center place-items-stretch gap-y-5 auto-cols-fr overflow-y-scroll overflow-x-hidden"
    >
        <section class="grid place-content-center p-10  w-full border-b border-my-dark">
            <Header />
        </section>
        <section class="grid place-content-stretch w-full h-[45rem]">
            <Schedule />
        </section>
        <section class="grid place-items-end w-full">
            <Footer />
        </section>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    main {
        @apply bg-my-darkest leading-normal tracking-normal;
        font-family: "Roboto", sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
