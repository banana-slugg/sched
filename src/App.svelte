<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
    //pt-52  px-20 pb-20
    //px-52 pt-52
</script>

<main class="h-screen overflow-auto">
    <Header />
    <div class="h-full w-full bg-nord0 pt-20 px-0 pb-12 lg:pt-32 xl:p-0 xl:pt-20 overflow-auto"><Schedule /></div>
    <Footer />
</main>
