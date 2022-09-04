<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
    //pt-52  px-20 pb-20
    //px-52 pt-52
</script>

<main class="h-screen">
    <Header />
    <div class=" h-4/6 w-full sm:h-full bg-nord0 pt-20 px-0 pb-12 md:pt-32 xl:px-20 xl:pb-20"><Schedule /></div>
    <Footer />
</main>
