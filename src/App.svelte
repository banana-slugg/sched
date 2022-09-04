<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
    //pt-52  px-20 pb-20
    //px-52 pt-52
</script>

<main class="h-screen overflow-auto">
    <Header />

    <div class="h-5/6 w-full my-20">
        <Schedule />
    </div>

    <Footer />
</main>
